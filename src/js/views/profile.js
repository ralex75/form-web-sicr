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

    locale(){

       
        var disciplinareUrl="http://www.infn.it/disciplinareRisorseInformatiche/index.php"
        var itSecCourseUrl= "https://elearning.infn.it"
        var signupUrl="https://signup.app.infn.it"
        var href={'disci':`<a class="prof-feedback" target="_blank" href="${disciplinareUrl}">${disciplinareUrl}</a>`,
                  'supp':`<a class="prof-feedback" href="mailto:support@roma1.infn.it">support@roma1.infn.it</a>`,
                  'itsec':`<a class="prof-feedback" target="_blank" href="${itSecCourseUrl}">${itSecCourseUrl}</a>`,
                  'signup':`<a class="prof-feedback" target="_blank" href="${signupUrl}">${signupUrl}</a>`}
        
        
        
        var disciText_ita=`Le linee guida della politica IT INFN (Disciplinare) non sono state ancora accettate.<br>Per accettarle, prego seguire questo url: ${href.disci}`
        var disciText_eng=`The INFN IT policy guidelines (Disciplinare) has not yet been accepted.<br>To comply, please go to url: ${href.disci}`
       
        var itsec_ita= `Per utilizzare le risorse informatiche dell’INFN è necessario aver seguito il corso obbligatorio di sicurezza informatica, 
                        disponibile all’indirizzo ${href.itsec}, 
                        dopo aver effettuato la login con le sue credenziali AAI.<br>
                        <u>La preghiamo pertanto di effettuare il corso prima di procedere con qualunque richiesta.</u>`
        
        var itsec_eng= `In order to use the INFN IT resources you need to follow the IT security course, 
                        available at ${href.itsec}, 
                        logging in with your AAI credentials.<br>
                        <u>You are requested to follow the course before proceeding with any further request.</u>`


        var unauth_ita=`La sua identità risulta correttamente registrata nel sistema informativo centrale, 
                        ma la sua utenza non è stata ancora associata alla sede di Roma.<br>
                        Da un controllo preliminare lei risulta essere presente nel database del dipartimento di Fisica.<br>
                        La preghiamo quindi di controllare che l'email registrata nel sistema informativo centrale corrisponda a quella registrata al dipartimento e, 
                        in caso contrario, di aggiungerla come mail alternativa accedendo all'indirizzo: ${href.signup}
                        <br><br>
                        In caso di domande ulteriori contattare il supporto di Roma all'indirizzo: ${href.supp}`
        
        var unauth_eng=`You identity is correctly registered in the INFN Central Information System,
                        but your user has not been associated to the Roma site yet.<br>
                        From a preliminary check you are present in the database of the Physics Department. <br>
                        You are then kindly asked to check that the email registered in the INFN Central Information System is matching the one you have registered in the Physics Department and, 
                        if not, to add it in the Central Information System as alternate email, using the link ${href.signup}
                        <br><br>
                        In case of further questions please contact the Roma support at this url: ${href.supp}`

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

    fillUserData(){

      
        var user=this.currentUser();

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
       
       
        return html;

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
        let html=this.fillUserData()
        return template.replace(/\[UDATA\]/g,html);
    }
}