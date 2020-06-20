

import {Base,UI} from './base.js'
import { Router } from '../router.js';
import {Application} from '../app.js'


export class NavMenu extends Base {

    
    init()
    {
       console.log("Menu created")
       
        window.addEventListener('hashchange', ev=>{
            this.highlightSelectedMenu()
        });


        this.target.querySelectorAll("[data-lang]").forEach(el=>el.addEventListener("click",ev=>{
          
            Application.language.current= ev.target.dataset["lang"];
        
        }));

        this.target.querySelectorAll("[data-lang]").forEach(el=>{
            if(el.dataset["lang"]==Application.language.current)
            {
                el.classList.add("selected");
            }
        })

        this.highlightSelectedMenu()

    }

    highlightSelectedMenu()
    {
       
        this.target.querySelectorAll('a.navi').forEach(el=>{
          
            el.className= window.location.hash.indexOf(el.hash)>-1 ? 'navi selected' : 'navi';

        })
        
    }

    locale(){
        var loc= {"ITA":{"profile":"Il mio profilo","requests":"Richieste inviate","ip":"Richiesta indirizzo IP","hosts":"I miei nodi","wifi":"Richiesta WIFI temporaneo"},
                "ENG":{"profile":"My Profile","requests":"My Requests","ip":"IP address request","hosts":"My hosts","wifi":"Temporary WIFI request"}
                }

        return loc[Application.language.current]
    }
   

    getContent(){

        var loc = this.locale()

        this.routes=[

            {"text":`${loc["profile"]}`,"view":"profile"},
            {"text":`${loc["requests"]}`,'view':'requests'},
            {"text":`${loc["hosts"]}`,'view':'hosts'},
            {"text":`${loc["ip"]}`,'view':'ip'},
            {"text":`${loc["wifi"]}`,'view':'wifi'}
        ]

        let tpl=""
       
       
        if(Application.UserIsValid())
        {
            this.routes.forEach(i=>{
            
                //tpl+=`<div class="bordato"><a href="#" class="navi" data-route="${i.view}">${i.text}</a></div>`
                tpl+=`<div class="bordato"><a href="#${i.view}" class="navi">${i.text}</a></div>`

            })
        }

         
        var template=`<div class=\"divisione\">
                        <!--<input type="button" id="changeLang" value="ChangeLang" />-->
                        <div class="language">
                      
                            <div class="flag ita" tooltip="ita" data-lang="ITA"></div>
                            <div class="flag eng" tooltip="eng" data-lang="ENG"></div>
                        </div>
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