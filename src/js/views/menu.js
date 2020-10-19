


import {Application} from '../app'


export default class {

    
    constructor(routes)
    {
       
        this.routes=routes;

    }


    locale(){
        var loc= {"ITA":{"profile":"Il mio profilo",
                        "requests":"Richieste inviate",
                        "account":"Richiesta account di posta",
                        "ip":"Richiesta indirizzo IP","hosts":"I miei nodi","wifi":"Richiesta WIFI temporaneo",
                        "logout":"Esci"},
                    "ENG":{"profile":"My profile","requests":"My requests",
                    "account":"Email account request",
                    "ip":"IP address request","hosts":"My hosts","wifi":"Temporary WIFI request",
                    "logout":"Logout"}
                }

        return loc[Application.language.current || 'ITA']
    }
   

    getContent(){

        var loc = this.locale()

        this.routes=this.routes.filter(r=>!r.hide).map(r=>{
            return {"text":`${loc[r.name]}`,"path":r.path,"name":r.name}
        })

        
        /*let tpl=""
        let userIsValid=Application.UserIsValid();
       
        if(!userIsValid)
        {
            //con il disciplinare non accettato visualizziamo il profile
            this.routes=this.routes.filter(e=>{return e.view=="profile" || e.view=="logout"});
            
        }*/
       
        
        let path=location.hash

        
        let tpl=this.routes.map(r=>{
            
            let _class = path==r.path ? "navi selected": "navi"
            return `<div class="bordato"><a href="${r.path}" class="${_class}">${r.text}</a></div>` 

        }).join("")
       
         
        let template=`<div class=\"divisione\">
                        <p><span class=\"divisione_title\">Account e Rete</span></p>
                        <div id="routes">
                        ${tpl}
                        </div>
                     </div>
                     <style scoped>
                        a.navi.selected{
                            color:#E00;
                        }
                        div.language{
                            display:flex;
                            justify-content:space-evenly;
                            width:80%;
                        }
                        div.flag{
                            width:46px;
                            height:32px;
                            background-repeat:no-repeat;
                            background-size: contain;
                            background-origin: content-box;
                            border:2px solid transparent;
                            padding:3px;
                        }
                        div.flag.ita{
                            background-image: url("img/ita-flag.png");
                            width:42px;
                        }
                        div.flag.eng{
                            background-image: url("img/eng-flag.png");
                            background-size: 36px 22px;
                        }


                        div.flag.selected,div.flag:hover{
                            border-color:#4697b8;
                        }

                        *{
  
                            box-sizing: border-box;
                          
                          }
                     </style>
                     `

       
        return template;
    }

}