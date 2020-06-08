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

export class Profile extends Base{
    
    init()
    {
       this.fillUserData()
    }

    async fillUserData(){

      
        var user=window.Application.user;
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
        <p>${user.email}</p>
        </div>
        <div class="prof_lab">
        <p>Telefono</p>
        </div>
        <div class="prof_val">
        <p>${user.phone}</p>
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
       

        this.target.querySelector("#udata").insertAdjacentHTML('afterbegin',html);


    }
    
    getContent(){
        return template;
    }
}