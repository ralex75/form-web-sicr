var template=`

    <div id="udata">
    </div>

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
import services from '../services.js'

export class Profile extends Base{
    
    init()
    {
       if(!this.args)
       {
           
            services.user.read().then(user=>{
                this.fillUserData(user);
            })
        }
        else{
            this.fillUserData(this.args);
        }

    }

    fillUserData(user){

        var html=`<div class="prof_intest" >
        <p>[NAME] [SURNAME]</p>
        
        </div>
       
        <div class="prof_lab">
        <p>E-mail</p>
        </div>
        <div class="prof_val">
        <p>[EMAIL]</p>
        </div>
        <div class="prof_lab">
        <p>Telefono</p>
        </div>
        <div class="prof_val">
        <p>[PHONE]</p>
        </div>
        <div class="prof_lab">
        <p>Ruolo</p>
        </div>
        <div class="prof_val">
        <p>[ROLE]</p>
        </div>
        <div class="prof_lab">
        <p>Scadenza</p>
        </div>
        <div class="prof_val">
        <p>[EXPIRATION]</p>
        </div>`
       
      
        for(var k in user)
        {
            var field='['+k.toUpperCase()+']';
            var value=user[k];
            html=html.replace(field,value)
        }

        this.target.querySelector("#udata").insertAdjacentHTML('afterbegin',html);

        
        var name=this.target.querySelector(".prof_intest")
        var content="";
        if(!user.isAuthorized)
        {
            content=`<div><b>Attenzione</b>, il suo stato risulta: <b class="error"><u>NON AUTORIZZATO</u>.</b></div>`
        }
        else{
            if(!user.disciplinare)
            {
                content=`<div><b>Attenzione<b>, <b class="error"><u>il disciplinare non è stato ancora accettato</u>.</b></div>`
                //TO DO
                //link al disciplinare
            }
        }

       if(content!="")
       {
           name.insertAdjacentHTML('beforeend',content);
       }

    }
    
    getContent(){
        return template;
    }
}