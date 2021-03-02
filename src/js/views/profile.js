var template=`
    
    [UDATA]

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

import Abstract from './abstract.js'
import {Application} from '../app'
import moment from 'moment'
import services from '../services.js'

export class Profile extends Abstract{

    constructor(target,params)
    {
        super(target,params)
    }
    
    mounted()
    {
    }

    emptyOrDefault(value){
        
        return value ? value : "---"
    }

    currentUser()
    {
        //return Application.user.current();
        return window.Application.user;
    }

    getDays(){
        debugger;
        let usr=this.currentUser();
        return moment().diff(moment(usr.policies),'days')
    }

    locale(){

       
        var disciplinareUrl="http://www.infn.it/disciplinareRisorseInformatiche/index.php"
        var itSecCourseUrl= "https://elearning.infn.it" 
        let userPortalUrl="https://userportal.app.infn.it"
        var signupUrl="https://signup.app.infn.it"
        var href={'disci':`<a class="prof-feedback" target="_blank" href="${disciplinareUrl}">${disciplinareUrl}</a>`,
                  'supp':`<a class="prof-feedback" href="mailto:supporto@roma1.infn.it">supporto@roma1.infn.it</a>`,
                  'itsec':`<a class="prof-feedback" target="_blank" href="${itSecCourseUrl}">${itSecCourseUrl}</a>`,
                  'portal':`<a class="prof-feedback" target="_blank" href="${userPortalUrl}">${userPortalUrl}</a>`,
                  'signup':`<a class="prof-feedback" target="_blank" href="${signupUrl}">${signupUrl}</a>`}
        
              
        
        var disciText_ita=`Le linee guida della politica IT INFN (Disciplinare) non sono state ancora accettate.<br>Per accettarle, prego seguire questo url: ${href.disci}`
        var disciText_eng=`The INFN IT policy guidelines (Disciplinare) has not yet been accepted.<br>To comply, please go to url: ${href.disci}`
       
        var itsec_ita= `Per utilizzare le risorse informatiche dell’INFN è necessario aver seguito il corso obbligatorio di sicurezza informatica, 
                        disponibile all’indirizzo ${href.itsec}, 
                        dopo aver effettuato la login con le sue credenziali AAI.<br>`

                        if(Application.user.isValid()){
                            itsec_ita+=`<b style="color:red">La invitiamo pertanto a seguire e completare il corso prima dello scadere del periodo di "grace-time"</b><br>`
                        }
                        
                        /*if(user.gracetime)
                        {
                            itsec_ita+=`Giorni trascorsi: <b>${this.getDays()}</b>.`
                        }*/
        
        var itsec_eng= `In order to use the INFN IT resources you need to follow the IT security course, 
                        available at ${href.itsec}, 
                        logging in with your AAI credentials.<br>`

                        if(Application.user.isValid()){
                            itsec_eng+=`<b style="color:red">We therefore invite you to attend and complete the course before the "grace-time" expiration period.</b><br>`
                        }
                        /*if(user.gracetime)
                        {
                            itsec_eng+=`Days trascorsi: <b>${this.getDays()}</b>.`
                        }*/


        var unauth_ita=`La sua identità non risulta ancora verificata.
                        <br>
                        Se lei è già presente, come “Attivo” e “Autorizzato”, nel database del 
                        Dipartimento di Fisica la preghiamo di controllare che l’email 
                        registrata nel Sistema Informativo INFN corrisponda a quella presente 
                        nel database del Dipartimento. In caso contrario dovrebbe richiedere di 
                        aggiungere quest'ultimo indirizzo mail a quelli registrati a suo nome 
                        scrivendo a:  ${href.supp}.
                        <br><br>
                        Se invece lei è un ospite della Sezione di Roma dell'INFN o in fase di 
                        associazione la preghiamo di assicurarsi di aver avviato la procedura di 
                        verifica dell'identita'  attraverso la richiesta di abilitazione 
                        all'utilizzo delle risorse informatiche dell'Ente, accedendo al sito 
                        ${href.portal} e di contattare il proprio responsabile e 
                        la segreteria amministrativa INFN di Roma per eventuali controlli.<br>
                        <br><br>
                        In caso di domande ulteriori contattare il supporto di Roma 
                        all’indirizzo: ${href.supp}
                        `
        
        var unauth_eng=`Your identity has not been verified yet.
                        <br>
                        If you are already present as "Active" and "Authorized" in the DB of the 
                        Department of Physics you are kindky asked to check that the email you 
                        have registered in the INFN Information System corresponds to the one in 
                        the Department's DB. If this is not the case you should request to add 
                        the latter mail address to the ones already registered with your user 
                        sending a mail to ${href.supp}.
                        <br><br>
                        If you are a guest of INFN Roma or being associated to it you are kindly 
                        requested to check that the procedure of identity verification has been 
                        started by requesting to be enabled to the IT resources of INFN, using 
                        the link ${href.portal} and to contact your supervisor 
                        and the Administrative Secretariat of INFN Roma for further checks.
                        <br><br>
                        For any further question please contact the Roma support at 
                        ${href.supp}
                        `

        return {
                
                "ITA":{"email":"E-mail","email_alt":"E-mail alternativi","phone":"Telefono","role":"Ruolo","exp":"Scadenza",
                        "disciplinare":"Disciplinare accettato","itsec":"Corso sicurezza informatica base",
                        "itsec_feedback":`${itsec_ita}`,
                        "unauthorized_feedback":`${unauth_ita}`,
                        "disciplinare_feedback":`${disciText_ita}`,
                        },

                "ENG":{"email":"E-mail","email_alt":"Alternate Emails Address","phone":"Phone","role":"Role","exp":"Expiration",
                        "disciplinare":"Usage policies resigned","itsec":"IT security base course",
                        "itsec_feedback":`${itsec_eng}`,
                        "unauthorized_feedback":`${unauth_eng}`,
                        "disciplinare_feedback":`${disciText_eng}`,
                       },
                        
                }
    }

    fillUserData(){
      
        var user=this.currentUser();

        var content="";

        var loc=this.locale()[Application.language.current];
      
        if(!user.isAuthorized || !user.loa2)
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

        if(content!="")
        {
            services.user.notifyStatus(user).then(res=>{
                console.log(res)
            })
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
        <p>${loc["exp"]}</p>
        </div>
        <div class="prof_val">
        <p>${this.parseDate(user.expiration)}</p>
        </div>`
       
       
        return html;

    }

    showList(items)
    {
        var list=Array.isArray(items) ? items : [items];
        return list.join("<br>")
    }

    parseDate(date){
       
       

        if(!date) return "---"
        if(date=="nolimit") return (Application.language.current=="ITA" ? "nessuna" :"never")
        
        if(date.indexOf("-")>-1)
        {
            date=date.split("-").reverse().join("")
        }
        let date_format={'ITA':"DD-MM-YYYY",'ENG':"MM-DD-YYYY"}
        try
        {
            return moment(date).format(date_format[Application.language.current])
        }
        catch{
            return "---"
        }
      
    }
    
    getContent(){
        let html=this.fillUserData()
        return template.replace(/\[UDATA\]/g,html);
    }
}