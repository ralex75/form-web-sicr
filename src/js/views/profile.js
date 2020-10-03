var template=`
    
    <div id="udata"></div>

    <style scoped>
    .prof_intest div{
        color:#777;
        font-size:21px;
        margin:10px 0;
    }

    .prof-feedback{
        text-align:justify;
        width:90%;
        font-size:18px;
    }

    .prof-feedback a{
        color:red;
    }
    .prof-feedback a:hover{
        text-decoration:underline
    }
    .error u{
        color:red;
    }

    h3.unauth{
        border:1px solid red;
        padding:20px;
        color:red;
    }

    </style>
`

import {Base} from './base.js'
import {Application} from '../app.js'
import services from '../services.js'
import moment from 'moment'

export class Profile extends Base{
    
    init()
    {
      
       this.fillUserData()
       
    }

    emptyOrDefault(value){
        
        return value ? value : "---"
    }

    currentUser()
    {
        return Application.user.current();
    }

    locale(){

       
        var disciplinareUrl="http://www.infn.it/disciplinareRisorseInformatiche/index.php"
        var itSecCourseUrl= "https://elearning.infn.it"
        var href={'disci':`<a class="prof-feedback" target="_blank" href="${disciplinareUrl}">${disciplinareUrl}</a>`,
                  'supp':`<a class="prof-feedback" href="mailto:support@roma1.infn.it">support@roma1.infn.it</a>`,
                  'itsec':`<a class="prof-feedback" target="_blank" href="${itSecCourseUrl}">${itSecCourseUrl}</a>`}
        
        
        
        var disciText_ita=`Le linee guida della politica IT INFN (Disciplinare) non sono state ancora accettate.<br>Per accettarle, prego seguire questo url: ${href.disci}`
        var disciText_eng=`The INFN IT policy guidelines (Disciplinare) has not yet been accepted.<br>To comply, please go to url: ${href.disci}`

        /*
        var unauth_ita=`Spiacenti, si è verificato un problema, prego contattaci: <a href="mailto:support@roma1.infn.it">support@roma1.infn.it</a>`
        var unauth_eng=`Sorry, an error has occurred, please contact us: <a href="mailto:support@roma1.infn.it">support@roma1.infn.it</a>`
        */

        var itsec_ita= `Per utilizzare le risorse informatiche dell’INFN è necessario aver seguito il corso obbligatorio di sicurezza informatica, 
                        disponibile all’indirizzo ${href.itsec}, 
                        dopo aver effettuato la login con le sue credenziali AAI.<br>
                        <u>La preghiamo pertanto di effettuare il corso prima di procedere con qualunque richiesta.</u>`
        
        var itsec_eng= `In order to use the INFN IT resources you need to follow the IT security course, 
                        available at ${href.itsec}, 
                        logging in with your AAI credentials.<br>
                        <u>You are requested to follow the course before proceeding with any further request.</u>`


        var unauth_ita=`La sua identità risulta correttamente registrata nel sistema informativo centrale, 
                        ma la sua utenza non è stata ancora associata alla sede di Roma.<br><br>
                        Contattare il supporto di Roma all'indirizzo: ${href.supp}`
        
        var unauth_eng=`Your identity is correctly registered in the central IT systems, 
                        but your user is not yet  associated to the site of Roma.<br><br>
                        Please contact the Roma support via email at: ${href.supp}`

        return {
                
                "ITA":{"email":"E-mail","email_alt":"E-mail alternativi","phone":"Telefono","role":"Ruolo","exp":"Scadenza",
                        "disciplinare":"Disciplinare accettato","itsec":"Corso sicurezza informatica",
                        "itsec_feedback":`${itsec_ita}`,
                        "unauthorized_feedback":`${unauth_ita}`,
                        "disciplinare_feedback":`${disciText_ita}`},
                "ENG":{"email":"E-mail","email_alt":"Alternate Emails Address","phone":"Phone","role":"Role","exp":"Expiration",
                        "disciplinare":"Usage policies resigned","itsec":"IT security course",
                        "itsec_feedback":`${itsec_eng}`,
                        "unauthorized_feedback":`${unauth_eng}`,
                        "disciplinare_feedback":`${disciText_eng}`}
            }
    }

    async fillUserData(){

      
        var user=this.currentUser();

        console.log(user)

        //var resp=await services.requests.list(false,Application.RequestTypes.ACCOUNT);

        //let requests=resp.data;

        /*
        user.isAuthorized=this.auth;
        user.disciplinare=this.disci;
        */
        
        //let user = this.args || await services.user.read();
        
        var content="";

        var loc=this.locale()[Application.language.current];

       
        if(!user.isAuthorized)
        {
            content=`${loc['unauthorized_feedback']}`
        }
        else{
            let messages=[]
            if(!user.policies){
                messages.push(`${loc["disciplinare_feedback"]}`)
            }
            
            if(!user.itsec){
                messages.push(`${loc["itsec_feedback"]}`)
            }

            content=messages.join("<br><br>")
        }
        


        var html=`<div class="prof_intest">
        <p>${user.name} ${user.surname}</p>
        
        <p class="prof-feedback">${content}</p>
        </div>
        <div class="prof_lab">
        <p>Username</p>
        </div>
        <div class="prof_val">
        <p class="username">${user.uid}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["email"]}</p>
        </div>
        <div class="prof_val">
        <p class="email">${this.emptyOrDefault(user.email)}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["email_alt"]}</p>
        </div>
        <div class="prof_val">
        <p>${this.emptyOrDefault(this.showList(user.mailAlternates))}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["phone"]}</p>
        </div>
        <div class="prof_val">
        <p>${this.emptyOrDefault(user.phone)}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["role"]}</p>
        </div>
        <div class="prof_val">
        <p>${user.role}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["disciplinare"]}</p>
        </div>
        <div class="prof_val">
        <p>${this.emptyOrDefault(this.parseDate(user.policies))}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["itsec"]}</p>
        </div>
        <div class="prof_val">
        <p>${this.emptyOrDefault(this.parseDate(user.itsec))}</p>
        </div>
        <div class="prof_lab">
        <p>${loc["exp"]}</p>
        </div>
        <div class="prof_val">
        <p>${this.parseDate(user.expiration)}</p>
        </div>`
       
       
        this.target.querySelector("#udata").innerHTML=html;
        

        /*
        if(!user.email || user.email.indexOf("@roma1.infn.it")<0 || this.createAcc)
        {
            var req=requests[0];
            var diff=3;
            var link=``
           
            if(req)
            {
               
                diff=moment(moment().format('YYYY-MM-DD')).diff(moment(req.req_date).format("YYYY-MM-DD"),'days')
                console.log("Date Diff:",diff);
                if(diff<9)
                {
                    link="Richiesta inviata, account di Posta in lavorazione..."
                }
            }
            else
            {
                link=`<input type="button" value="Richiedi Creazione Account di Posta" />`
            }

            if(this.createAcc && !link)
            {
                link=`<input type="button" value="Richiedi Creazione Account di Posta" />`
            }

           
            this.target.querySelector(".email").innerHTML=link;

            let ctrl=this.target.querySelector(".email input")

            if(ctrl)
            {
                ctrl.addEventListener("click",ev=>{
                    Application.SaveRequest(Application.RequestTypes.ACCOUNT,user);
                })
            }
          
            
        }*/

    }

    showList(items)
    {
        var list=Array.isArray(items) ? items : [items];
        return list.join("<br>")
    }

    parseDate(date){
        if(!date) return
        if(date=="nolimit") return (Application.language.current=="ITA" ? "nessuna" :"never")
        let date_format={'ITA':"DD/MM/YYYY",'ENG':"MM/DD/YYYY"}
        return moment(date).format(date_format[Application.language.current])
    }
    
    getContent(){
        return template;
    }
}