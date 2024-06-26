const template=`
<form>  
    <div class="form_sez">
    
        <div class="form_intest">
        [HEADER]
        </div>

        <section id="account-req" style="display:none;">
            <p class="acc-email-text">[EMAIL_FEEDBACK]</p>
            <h4 class="account-email">[EMAIL]</h4>
            <small class="error"></small>
        
            <div class="account_content"></div>
        
            </div>
            <div class="form_sez acc-submit">
            <div class="form_pied cbutton">
                <input type="submit" id="submit" class="button_m" value="[SEND]" />
            </div>	
        </section>
    </div>		
</form>

<style>
.account_content
{
    margin-top:50px;
}

.account_content div.inline{
    display:flex;
    justify-content: start;
}
    
.inline div{
    margin-right:10px;
}

.account-email{
    margin:10px 0;
}

.acc-email-text > p{
   
   color:green;
}

.account-fieldset{
    border-radius:10px;
    border:1px solid #DDD;
    margin:10px 0;
}

    .error{
        color:red;
        font-size:16px;
    }
    .error > span{
        color:green;
    }

    .acc_success{
        color:green
    }

    .form_pied{
        padding:1px;
      }

      .acc-submit{
          display:none;
      }
      .acc-submit.show{
        display:block;
    }
      
      .form_pied:hover > input[type=submit]{
        background-color:#FFF;
        color:#000;
        letter-spacing:10px;
       
      }
      
        .form_pied input[type=submit]{
            width:100%;
            padding:10px;
            color:#FFF;
            font-size:21px;
            outline:0;
            transition: 0.5s ease-in-out;
        } 
        .form_pied input[type=submit]:disabled{
            background-color:#999;
            transition:none;
            letter-spacing:0;
            color:#DDD;
           border:none;
        } 
        #restore-desc div.info-box{
            width: 400px;
            height: 20px;
            padding:20px 10px;
            border: 1px solid #000;
            display:flex;
            align-items:center;
            font-weight: normal;
            border-radius: 10px;
            background-color: #ddd;
            border-color: #aaa; 
        }

        #alert-account {
            background-color:#ffd700;
            color:#000
            text-align:center;
            padding:10px;
            margin:6px 0;
            font-weight:bold;
        }
</style>`



import Abstract from './abstract.js'
import {Application} from '../app'
import {Dialog} from '../components/dialog.js'
import services from '../services.js'
import moment from 'moment'
import loc from '../locale/account.loc'

export class Account extends Abstract{

    async mounted(){

       
        let sec=this.target.querySelector("#account-req");
        let loc=this.locale();

        let html=sec.innerHTML;

        sec.innerHTML="";
        sec.style.display="block";

      
        //utente ha già account
        if(this.userHasAccount)
        {
            sec.innerHTML=html;
            return;
        };


        //controlla se ha fatto richiesta e quando
        var resp=await services.requests.list(false,Application.requestTypes.ACCOUNT);
       
        let requests=resp.data;

        let DAYS_LIMIT=5;

        if(requests.length>0)
        {
            let lastreq=requests[0]
           
            let days=moment().diff(moment(lastreq.req_date),'days')
           
            //se non sono passati DAYS_LIMIT allora non può fare nuova richiesta
            if(days<DAYS_LIMIT){
                
                let date=moment(lastreq.req_date);
                date=date.format( Application.language.current=="ITA" ? "DD/MM/YYYY" : "MM/DD/YYYY");
                sec.innerHTML=`<h4>${loc["request_already_sent"]} ${date}</h4>`
                return;
            }
        }

        sec.innerHTML=html;
        
        let $content=this.target.querySelector(".account_content");
        this.$email=this.target.querySelector(".account-email")
        this.$err=this.target.querySelector(".error");
        this.$form=this.target.querySelector("form");
        this.$submit=this.target.querySelector("#submit")
        this.restoreOption="";
        this.timeoutID=null;

        this.$form.querySelector(".acc-submit").classList.add("show");
        
        this.$form.addEventListener("submit",async ev=>{
            
            ev.preventDefault();
            
            this.$submit.disabled=true;
            this.disableEnableSelect(true);
            let invalid= this.emailAddressIsInValid();

         
            this.$submit.disabled=false;
            this.disableEnableSelect(false);
           
            if(invalid) return;

            let loc=this.locale();

            var confirm=loc.dialog.confirm;
            var msg=loc.dialog.msg;
            var accountMsg= Application.language.current=="ITA" ? "Account di posta richiesto" : "Requested email account"
           
            let restOpts=document.querySelector("#restoreOptions");
            let restoreType= Application.language.current == 'ITA' ? "Nessuno" : "None";
            
            
            if(restOpts)
            {
                restoreType=restOpts.selectedOptions[0].text
            }

            restoreType= `<br>${loc['restore']}: <br><b>${restoreType}</b>`


            //chiama il metodo per mostrare la Dialog
            this.showDialog(confirm,
                            `${accountMsg}:<br><b>${this.$email.innerText}</b><br>${restoreType}<br><br>${msg}?`
                            ,()=>{
                                this.submitForm();
                            },()=>{});

            
        })

        $content.innerHTML=""
        
        if(this.names.length>1 || this.surnames.length>1)
        {
            $content.innerHTML+=this.buildSelect("name",this.names);
            $content.innerHTML+=this.buildSelect("surname",this.surnames);
        }

        $content.addEventListener("change",ev=>{
            
            ev.preventDefault();

            if(ev.target.name=="restore") {
             
              
                this.restoreOption=ev.target.value;
                return;
            }
           
            this.emailAddressIsInValid()
       
        });

        let rloc=loc.restore_data_account;
        resp=await services.user.restoreAccountOptions()
      
        let restOpts=(resp && resp.data && resp.data.options) || [];
        
        let restoreOptions={}
        
       
        //mail, afs
        restOpts.forEach((k)=>{
            
            restoreOptions[k]=rloc[k]
           
        })
       
        //se ci sono i 2 singoli backup (mail & afs) allora proponiamo anche il backup completo
        if(Object.keys(restoreOptions)==2){
            restoreOptions["mail-afs"]=rloc["mail-afs"];
        }
        
        //se rimane solo quella mail+afs non costruisce la select restore
        if(Object.keys(restoreOptions)==0) return;

        $content.innerHTML+=this.buildSimpleSelect("restore",restoreOptions)

    }

    submitForm(){
        
        let data={"email":this.$email.innerText,
                  "restore":this.restoreOption}

        this.SaveRequest(Application.requestTypes.ACCOUNT,data);
    }

    disableSumbmit(disabled)
    {
        this.$form.querySelector("input[type='submit']").disabled=disabled;
    }

    disableEnableSelect(disable)
    {
        document.querySelectorAll("select").forEach(el=>el.disabled=disable);
    }

    emailAddressIsInValid()
    {
        var selected=[]
        var isInvalid=false;
        var loc=this.locale();
        
        //se non ci sono nomi multipli e cognomi multipli non ci sono selezioni da fare
        //ritorna che la forma è ok --> a.b@roma1.infn.i
        if(this.names.length==1 && this.surnames.length==1)
        {
            return isInvalid;
        }

        this.target.querySelectorAll("select").forEach(e => {
            if(e.value.indexOf("--")<0)
                selected.push(e.value);
        });
        
        this.$err.innerHTML=""
        
        var names=this.names.filter(x=>selected.includes(x))
        var surnames=this.surnames.filter(x=>selected.includes(x))
        this.$email.innerHTML=this.buildEmailText(names,surnames);
        
        if(names.length==0 || surnames.length==0)
        {
            isInvalid=true;
            this.$err.innerHTML=loc["email_invalid"];
        }
        return isInvalid;
    }

    emailAddressExists()
    {
        let loc=this.locale();
        clearTimeout(this.timeoutID);
        this.$err.innerHTML=`<p class="acc_success"><img src='img/loader.gif' valign="middle"/>&nbsp;${loc["email_exists_pending"]}</p>`
        
        return new Promise((resolve,reject)=>{
            this.timeoutID=setTimeout(async ()=>{
                
                let result=await services.net.verifyEmailAddress(this.$email.innerText)
                let exists= result.data.exists;
                let msg=""
                
                if(exists)
                {
                    msg=loc["email_exists"]
                }

                this.$err.innerHTML=msg;
              
                resolve(exists);

            },2000)
        })
        
    }

    replaceBadChars(words){
       
      
        const sets = [
            {to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶἀ]'},
            {to: 'c', from: '[ÇĆĈČ]'},
            {to: 'd', from: '[ÐĎĐÞ]'},
            {to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]'},
            {to: 'g', from: '[ĜĞĢǴ]'},
            {to: 'h', from: '[ĤḦ]'},
            {to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]'},
            {to: 'j', from: '[Ĵ]'},
            {to: 'ij', from: '[Ĳ]'},
            {to: 'k', from: '[Ķ]'},
            {to: 'l', from: '[ĹĻĽŁ]'},
            {to: 'm', from: '[Ḿ]'},
            {to: 'n', from: '[ÑŃŅŇ]'},
            {to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]'},
            {to: 'oe', from: '[Œ]'},
            {to: 'p', from: '[ṕ]'},
            {to: 'r', from: '[ŔŖŘ]'},
            {to: 's', from: '[ßŚŜŞŠȘ]'},
            {to: 't', from: '[ŢŤ]'},
            {to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]'},
            {to: 'w', from: '[ẂŴẀẄ]'},
            {to: 'x', from: '[ẍ]'},
            {to: 'y', from: '[ÝŶŸỲỴỶỸ]'},
            {to: 'z', from: '[ŹŻŽ]'},
            {to: '-', from: '[·/_,:;\']'}
          ];
  

          return words.map(e=>{
            let text=e.toLowerCase()
            sets.forEach(set => {
                    text = text.replace(new RegExp(set.from,'gi'), set.to)
                    
                })
                return text;
            })
          
    }

    buildEmailText(names,surnames)
    {
        let _names=this.replaceBadChars(names);
        let _surnames=this.replaceBadChars(surnames);
        return _names.join(".")+"."+_surnames.join("")+"@roma1.infn.it"
    }


    //DIALOG PROMPT
    showDialog(title,message,yesCallback,noCallback)
    {
      
       
        var dlgplaceholder=this.target.querySelector(".dlg-placeholder");
        if(!dlgplaceholder)
        {
           var place=this.target.querySelector("form")
           place.insertAdjacentHTML('afterend','<div class="dlg-placeholder"></div>');
           dlgplaceholder=this.target.querySelector(".dlg-placeholder");
        }
       
        var dlg=new Dialog(dlgplaceholder);
        
        let butt=document.querySelector('input[type="submit"]')
        
        butt.disabled=true;
        this.emailAddressExists().then(exists=>{
          
           
            if(!exists)
            {
                dlg.setTitle(title);
                dlg.setMessage(message)
                dlg.showYesButton(yesCallback)
                dlg.showNoButton(noCallback)
                dlg.showHide();
            }
           
        }).finally(_=>{
            butt.disabled=false;
        })

      
        
    }


    locale(){
        
        return loc[Application.language.current];
    }

    buildSelect(labelText,items)
    {
        let html=""
        const loc=this.locale();
        for(var i=0;i<items.length;i++)
        {
            html+=`<div>
                    <label>${loc[labelText]} ${i+1}</label><br>
                    <select name="${labelText}">
                    <option>----</option>
                    <option selected>${items[i]}</option>
                    </select>
                    </div>`
            
        }

        return `<fieldset class="account-fieldset"><legend>${loc.legend[labelText]}</legend>
                <div class="inline">${html}</div>
                </fieldset>`
    }

    buildSimpleSelect(labelText,items)
    {
       


        const loc=this.locale();
        let descr = Application.language.current=="ITA" ? "Nessuno" : "None"
        let options=`<option value=""> ${descr} </option>`
       
        for(var k in items)
        {
                options+=`<option value="${k}">${items[k]}</option>`
        }

        let html=`
                <label>${loc[labelText]}</label><br>
                <select id="restoreOptions" name="${labelText}">${options}</select>
               `

        //return `<fieldset class="account-fieldset">
        return `<hr>
                
                <div id="alert-account">${loc.restore_user_descr}</div>
                <div style="margin:3px 0">${html}</div>`
                //</fieldset>`
    }


    getContent(){

        var loc=this.locale();
        var tpl=template;

        let user=Object.assign({},Application.user.current());

        let email=user.roma1Email();
      
        this.userHasAccount=email!="";
        
        if(this.userHasAccount)
        {
            tpl=tpl.replace("[EMAIL_FEEDBACK]",loc['user_has_account'])
        }
        else{
        
            this.names=user.name.split(" ");
            this.surnames=user.surname.split(" ");
           
            this.addressIsValid=true;
            email=this.buildEmailText(this.names,this.surnames);

        }
        
        
        for(var k in loc)
        {
            tpl=tpl.replace(`[${k.toUpperCase()}]`,loc[k]);
        }
        
        
        tpl=tpl.replace("[EMAIL]",email);

        
        return tpl;
    }


}