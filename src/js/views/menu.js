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
            Application.language.current="SPA";
        })

        this.highlightSelectedMenu()

    }

    highlightSelectedMenu()
    {
       
        this.target.querySelectorAll('a.navi').forEach(el=>{
        
            el.className= window.location.hash.indexOf(el.hash)>-1 ? 'navi selected' : 'navi';

        })
        
    }

   

    getContent(){

        this.routes=[

            {"text":'Il mio profilo',"view":"profile"},
            {"text":'Richieste inviate','view':'requests'},
            {"text":'Aggiungi Nodo','view':'ip'},
            {"text":'I miei nodi','view':'hosts'},
            {"text":'Wifi temporaneo','view':'wifi'}
        ]

        let tpl=""
       
        this.routes.forEach(i=>{
           
            //tpl+=`<div class="bordato"><a href="#" class="navi" data-route="${i.view}">${i.text}</a></div>`
            tpl+=`<div class="bordato"><a href="#${i.view}" class="navi">${i.text}</a></div>`

        })

         
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