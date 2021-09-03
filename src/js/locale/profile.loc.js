import {Application} from '../app'

let disciplinareUrl="http://www.infn.it/disciplinareRisorseInformatiche/index.php"
let itSecCourseUrl= "https://elearning.infn.it" 
let userPortalUrl="https://userportal.app.infn.it"
let signupUrl="https://signup.app.infn.it"
let href={'disci':`<a class="prof-feedback" target="_blank" href="${disciplinareUrl}">${disciplinareUrl}</a>`,
          'supp':`<a class="prof-feedback" href="mailto:supporto@roma1.infn.it">supporto@roma1.infn.it</a>`,
          'itsec':`<a class="prof-feedback" target="_blank" href="${itSecCourseUrl}">${itSecCourseUrl}</a>`,
          'portal':`<a class="prof-feedback" target="_blank" href="${userPortalUrl}">${userPortalUrl}</a>`,
          'signup':`<a class="prof-feedback" target="_blank" href="${signupUrl}">${signupUrl}</a>`}


let disciText_ita=`Le linee guida della politica IT INFN (Disciplinare) non sono state ancora accettate.<br>Per accettarle, prego seguire questo url: ${href.disci}`
let disciText_eng=`The INFN IT policy guidelines (Disciplinare) has not yet been accepted.<br>To comply, please go to url: ${href.disci}`

let itsec_ita= `Per utilizzare le risorse informatiche dell’INFN è necessario aver seguito il corso obbligatorio di sicurezza informatica, 
disponibile all’indirizzo ${href.itsec}, 
dopo aver effettuato la login con le sue credenziali AAI.<br>`




let itsec_eng= `In order to use the INFN IT resources you need to follow the IT security course, 
available at ${href.itsec}, 
logging in with your AAI credentials.<br>`



let unauth_ita=`Sebbene la sua identità risulti correttamente registrata nel Sistema 
Informativo INFN la sua utenza non è stata ancora associata alla sede di 
Roma.<br><br>
Se lei è già presente, come “Attivo” e “Autorizzato”, nel database del 
Dipartimento di Fisica la preghiamo di controllare che l’email 
registrata nel Sistema Informativo INFN corrisponda a quella presente 
nel database del Dipartimento.<br>
In caso contrario dovrebbe richiedere di 
aggiungere quest'ultimo indirizzo mail a quelli registrati a suo nome 
inviando una mail all’indirizzo ${href.supp}.
<br><br>
Se invece lei è un ospite della Sezione di Roma dell'INFN la preghiamo 
di rivolgersi al suo referente per far completare la  registrazione 
indicando il suo ruolo nel nostro Ente.
<br><br>
In caso di domande ulteriori contattare il supporto di Roma 
all’indirizzo: ${href.supp}.
`

let unauth_eng=`Although your identity is properly registered in the INFN Information 
System, your account has not yet been associated to the INFN Rome site.
<br><br>
In case you already figure, as an “Active” and “Authorized” user, in the 
Physics Department database, please check that the email registered in 
the INFN Information System coincides with the email in the Department 
database. 
<br><br>
Should this not be the case, please ask to add this last email 
address to those registered under your name writing to the address 
${href.supp}.
<br><br>
If you are a host of the INFN Rome section, please address your contact 
person to complete your registration, specifying your position in our 
Institution.
<br><br>
Should you have any further question, contact the Rome support at the 
address ${href.supp}.
`


let loa2_ita=`La sua identità non è stata ancora verificata.
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

let loa2_eng=`Your identity has not been verified yet.
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

export default ()=>{
    
    if(Application.user.isValid()){
        itsec_ita+=`<b style="color:red">La invitiamo pertanto a seguire e completare il corso prima dello scadere del periodo di "grace-time"</b><br>`
        itsec_eng+=`<b style="color:red">We therefore invite you to attend and complete the course before the "grace-time" expiration period.</b><br>`
    }

    return {

               
        
                "ITA":{"email":"E-mail","email_alt":"E-mail alternativi","phone":"Telefono","role":"Ruolo","exp":"Scadenza",
                        "disciplinare":"Disciplinare accettato","itsec":"Corso sicurezza informatica base",
                        "itsec_feedback":`${itsec_ita}`,
                        "loa2_feedback":`${loa2_ita}`,
                        "unauthorized_feedback":`${unauth_ita}`,
                        "disciplinare_feedback":`${disciText_ita}`,
                        },

                "ENG":{"email":"E-mail","email_alt":"Alternate Emails Address","phone":"Phone","role":"Role","exp":"Expiration",
                        "disciplinare":"Usage policies resigned","itsec":"IT security base course",
                        "itsec_feedback":`${itsec_eng}`,
                        'loa2_feedback':`${loa2_eng}`,
                        "unauthorized_feedback":`${unauth_eng}`,
                        "disciplinare_feedback":`${disciText_eng}`,
                       },
                        
                }
            }