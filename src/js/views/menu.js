import {Base,UI} from './base.js'
import { Router } from '../router.js';
import {Application} from '../app.js'


export class NavMenu extends Base {

    
    init()
    {
       
       
        window.addEventListener('hashchange', ev=>{
            this.highlightSelectedMenu()
        });

        console.log("SelectedLang:",Application.language.current)
        
        this.target.querySelector("#changeLang").addEventListener("click",ev=>{
            Application.language.current= Application.language.current=='ITA' ? 'ENG' :'ITA';
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
        return {"ITA":{"profile":"Il mio profilo","requests":"Richieste inviate","ip":"Aggiungi Nodo","hosts":"I miei nodi","wifi":"Wifi temporaneo"},
                "ENG":{"profile":"My Profile","requests":"My Requests","ip":"Add Host","hosts":"My hosts","wifi":"Temporary WIFI"}
                }
    }
   

    getContent(){

        var loc = this.locale()[Application.language.current]

        this.routes=[

            {"text":`${loc["profile"]}`,"view":"profile"},
            {"text":`${loc["requests"]}`,'view':'requests'},
            {"text":`${loc["ip"]}`,'view':'ip'},
            {"text":`${loc["hosts"]}`,'view':'hosts'},
            {"text":`${loc["wifi"]}`,'view':'wifi'}
        ]

        let tpl=""
       
        var user=window.Application.user;

        if(user.isAuthorized && user.disciplinare)
        {
            this.routes.forEach(i=>{
            
                //tpl+=`<div class="bordato"><a href="#" class="navi" data-route="${i.view}">${i.text}</a></div>`
                tpl+=`<div class="bordato"><a href="#${i.view}" class="navi">${i.text}</a></div>`

            })
        }

         
        var template=`<div class=\"divisione\">
                        <input type="button" id="changeLang" value="ChangeLang" />
                        <p><span class=\"divisione_title\">Account e Rete</span></p>
                        ${tpl}
                     </div>
                     <style scoped>
                        a.navi.selected{
                            color:#E00;
                        }
                     </style>
                     `

        return template;
    }

}