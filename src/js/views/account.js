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
                <input type="submit" class="button_m" value="[SEND]" />
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
</style>

`



import Abstract from './abstract.js'
import {Application} from '../main'
import {Dialog} from '../components/dialog.js'
import services from '../services.js'
import moment from 'moment'

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
        this.timeoutID=null;

        this.$form.querySelector(".acc-submit").classList.add("show");
        
        this.$form.addEventListener("submit",async ev=>{
            
            ev.preventDefault();
            
            ev.submitter.disabled=true;
            this.disableEnableSelect(true);
            let invalid= this.emailAddressIsInValid();

         
            ev.submitter.disabled=false;
            this.disableEnableSelect(false);
           
            if(invalid) return;

            let loc=this.locale();

            var confirm=loc.dialog.confirm;
            var msg=loc.dialog.msg;
            var accountMsg= Application.language.current=="ITA" ? "Account di posta richiesto" : "Requested email account"
           
           
            //chiama il metodo per mostrare la Dialog
            this.showDialog(confirm,
                            `${accountMsg}:<p><b>${this.$email.innerText}</b></p><br>${msg}?`
                            ,()=>{
                                //console.log(this.$email.innerText)
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
            
            this.emailAddressIsInValid()
       
        });

    }

    submitForm(){

        Application.SaveRequest(Application.requestTypes.ACCOUNT,{"email":this.$email.innerText});
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
            console.log("devi selezionare nome e cognome")
            this.$err.innerHTML=loc["email_invalid"];
        }
        return isInvalid;
    }

    emailAddressExists()
    {
        let loc=this.locale();
        clearTimeout(this.timeoutID);
        this.$err.innerHTML=`<p class="acc_success">${loc["email_exists_pending"]}</p>`
        
        return new Promise((resolve,reject)=>{
            this.timeoutID=setTimeout(async ()=>{
                
                let result=await services.net.verifyEmailAddress(this.$email.innerText)
                let exists= result.data.exists;
                let msg=""
                
                if(exists)
                {
                    debugger;
                    msg=loc["email_exists"]
                }

                this.$err.innerHTML=msg;
              


                resolve(exists);

            },2000)
        })
        
    }

    replaceBadChars(words){
        return words.map(e=>{return e.toLowerCase().replace(/à/g,"a").replace(/è/g,"e").replace(/ì/g,"i").replace(/ò/g,"o").replace(/ù/g,"u")})
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
        
        /*
        if(yesCallback)
           dlg.showYesButton(yesCallback)
        
        if(noCallback)
           dlg.showNoButton(noCallback)
           */

        //dlg.setTitle("Verifica indirizz");
        
        //dlg.showHide();

        //quando si apre la dialog inizia la ricerca per indirizzo duplicato
        //var html=this.$email.innerText+"<p><small class=\"check\">verifica indirizzo email scelto in corso...</small></p>"
        //dlg.setMessage(html)
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
        const loc= {

                "ITA":{"header":"Account di posta","user_has_account":"<p>Attenzione, hai già un account di posta 'roma1.infn.it'</p>",
                        "email_feedback":"Il tuo indirizzo di posta sarà:",
                        "email_exists_pending":"Controllo che l'account di mail scelto non sia già in uso...",
                        "email_exists":"L'indirizzo di posta risulta già registrato.",
                        "email_invalid":"Indirizzo di posta scelto non valido.<br>Selezionare le parti del nome e le parti del cognome che vorresti vedere nel tuo account di posta.",
                        "send":"Invia","send":"Invia","name":"Nome","surname":"Cognome",
                        "request_already_sent":"Attenzione, hai già inviato la richiesta di creazione account in data:",
                       
                        "legend":{"name":"Seleziona le parti del nome","surname":"Seleziona le parti del cognome"},
                        "dialog":{
                                "confirm":"Richiesta di conferma",
                                "msg":"Si desidera procedere con l'invio della richiesta"
                        }
                     },
                      
                "ENG":{"header":"Email Account","user_has_account":"Warning, you already have an Email account 'roma1.infn.it'",
                "email_feedback":"Your email address will be:",
                "email_exists_pending":"Checking the selected email address is not yet in use...",
                "email_exists":"Email adress is already registered.",
                "email_invalid":"Selected mail address is invalid.<br>Select the parts of your name and surname you want to show in your email account",
                "to":"To","send":"Submit","name":"Name","surname":"Surname",
                "request_already_sent":"Warning, you have already sent an account request creation on date:",
                "legend":{"name":"Select the parts of your name","surname":"Select the parts of your surname"},
                "dialog":{
                        "confirm":"Confirm request",
                        "msg":"Do you want submit the request"
                    }
                },
               
               }
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
                    <select>
                    <option>----</option>
                    <option selected>${items[i]}</option>
                    </select>
                    </div>`
            
        }

        return `<fieldset class="account-fieldset"><legend>${loc.legend[labelText]}</legend>
                <div class="inline">${html}</div></fieldset>`
    }


    getContent(){

        var loc=this.locale();
        var tpl=template;

        let user=Object.assign({},Application.user.current());
        let email=user.email;
        this.userHasAccount=user.email!="";
        

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