var template=`
    <input type="button" id="auth" value="Set/Unset Authorization" />
    <input type="button" id="disci" value="Set/Unset Disciplinare" />
    <input type="button" id="ca" value="Show/Hide Create Account" />
    <div id="udata"></div>

    <style scoped>
    .prof_intest div{
        color:#777;
        font-size:21px;
        margin:10px 0;
    }

    .prof-feedback{
        text-align:justify;
        width:80%;
        font-size:16px;
    }

    .error u{
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
       this.disci=true;
       this.auth=true;
       this.createAcc=false;
      
       this.target.querySelector("#auth").addEventListener('click',ev=>{
          this.auth=!this.auth 
          this.disci=true;
          this.fillUserData()
       }) 
       this.target.querySelector("#disci").addEventListener('click',ev=>{
        this.disci=!this.disci 
        this.auth=true;
        this.fillUserData()
     }) 
     this.target.querySelector("#ca").addEventListener('click',ev=>{
        this.disci=true; 
        this.auth=true;
        this.createAcc=!this.createAcc;
        this.fillUserData()
     }) 
       this.fillUserData()
       
    }

    emptyOrDefault(value){
        return value ? value : "--"
    }

    currentUser()
    {
        return window.Application.user;
    }

    locale(){

        var user=this.currentUser();

        var disciText_ita="Le linee guida della politica IT INFN (Disciplinare) non sono state ancora accettate."
        var disciText_eng="The INFN IT policy guidelines (Disciplinare) has not yet been accepted."
        var unauth_ita=`Gentile ${user.name} ${user.surname}, la sua identità risulta correttamente registrata nel sistema informativo centrale, 
                        ma la sua utenza non è stata ancora associata alla sede di Roma.<br>
                        Se lei è membro registrato e attivo del dipartimento e la registrazione della sua identità è stata 
                        effettuata meno di 6h fa la preghiamo di attendere e riprovare in seguito, 
                        la sua utenza verrà associata a breve.<br>In caso contrario è pregato di contattare 
                        il supporto di Roma all'indirizzo supporto@roma1.infn.it.`
        
        var unauth_eng=`Dear ${user.name} ${user.surname}, your identity is correctly registered in the central IT systems, 
                        but your user is not yet  associated to the site of Roma.<br> 
                        If you are a registered and active member of the Department of Physics and your identity 
                        has been registered less than 6h ago, please wait and try again later, 
                        your user will be associated shortly.<br> 
                        In all other cases please contact the Roma support via email at supporto@roma1.infn.it.`

        return {"ITA":{"email":"E-mail","phone":"Telefono","role":"Ruolo","exp":"Scadenza",
                        "unauthorized":`<p class="prof-feedback">${unauth_ita}</p>`,
                        "disciplinare":`<p class="prof-feedback">${disciText_ita}</p>`},
                "ENG":{"email":"E-mail","phone":"Phone","role":"Role","exp":"Expiration",
                        "unauthorized":`<p class="prof-feedback">${unauth_eng}</p>`,
                        "disciplinare":`<p class="prof-feedback">${disciText_eng}</p>`}
            }
    }

    async fillUserData(){

      
        var user=this.currentUser();

        var resp=await services.requests.list(false,Application.RequestTypes.ACCOUNT);

        let requests=resp.data;

        user.isAuthorized=this.auth;
        user.disciplinare=this.disci;
        
        
        //let user = this.args || await services.user.read();
        var content="";

        var loc=this.locale()[Application.language.current];

       
        content = !user.isAuthorized ? `${loc['unauthorized']}`
                                     : !user.disciplinare ? `${loc["disciplinare"]}` 
                                     : ""

        
        Application.EmitEvent("showHideMenu")

        var html=`<div class="prof_intest" >
        <p>${user.name} ${user.surname}</p>
        
        ${content}
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
        <p class="email">${user.email || "--"}</p>
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
        <p>${loc["exp"]}</p>
        </div>
        <div class="prof_val">
        <p>${user.expiration}</p>
        </div>`
       
        console.log("Profile")
       
        this.target.querySelector("#udata").innerHTML=html;
        

        
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
          
            
        }

    }
    
    getContent(){
        return template;
    }
}