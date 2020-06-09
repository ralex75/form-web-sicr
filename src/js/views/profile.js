var template=`

    <div id="udata"></div>

    <style scoped>
    .prof_intest div{
        color:#777;
        font-size:21px;
        margin:10px 0;
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
      
       this.fillUserData()

    }

    emptyOrDefault(value){
        return value ? value : "--"
    }

    async fillUserData(){

      
        var user=window.Application.user;

       
        var resp=await services.requests.list(false,Application.RequestTypes.ACCOUNT);

        let requests=resp.data;
        
        //let user = this.args || await services.user.read();
        var content="";

        content = !user.isAuthorized ? `<div><b>Attenzione</b>, il suo stato risulta: <b class="error"><u>NON AUTORIZZATO</u>.</b></div>`
                                     : !user.disciplinare ? `<div><b>Attenzione<b>, <b class="error"><u>il disciplinare non è stato ancora accettato</u>.</b></div>` 
                                     : ""

        var html=`<div class="prof_intest" >
        <p>${user.name} ${user.surname}</p>
        
        ${content}
        </div>
       
        <div class="prof_lab">
        <p>E-mail</p>
        </div>
        <div class="prof_val">
        <p class="email">${user.email}</p>
        </div>
        <div class="prof_lab">
        <p>Telefono</p>
        </div>
        <div class="prof_val">
        <p>${this.emptyOrDefault(user.phone)}</p>
        </div>
        <div class="prof_lab">
        <p>Ruolo</p>
        </div>
        <div class="prof_val">
        <p>${user.role}</p>
        </div>
        <div class="prof_lab">
        <p>Scadenza</p>
        </div>
        <div class="prof_val">
        <p>${user.expiration}</p>
        </div>`
       
        console.log("Profile")
       
        this.target.querySelector("#udata").innerHTML=html;
        
        if(!user.email || user.email.indexOf("@roma1.infn.it")<0)
        {
            var req=requests[0];
            var diff=3;
            var link=``
           
            if(req)
            {
               
                diff=moment(moment().format('YYYY-MM-DD')).diff(moment(req.req_date).format("YYYY-MM-DD"),'days')
                console.log("Date Diff:",diff);

            }

            if(diff<9)
            {
                link="Richiesta inviata, account di Posta in lavorazione..."
            }
            else
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