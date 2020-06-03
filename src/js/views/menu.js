import {Base,UI} from './base.js'


export class NavMenu extends Base {

    
    init()
    {
        this.lastroute=this.routes[0];
        window.location.hash="";
       
        window.addEventListener('hashchange', ev=>{
           
           
            var view=window.location.hash.substr(1);
            
            //var route= this.routes.filter(i=>{return i.view.indexOf(view)>-1})[0] || this.lastroute;
            //var route= this.routes.filter(i=>{return i.view.indexOf(view)>-1})[0] || this.lastroute;
            
            var route= this.routes.filter(i=>{return view==i.view})[0];
            
           
            if(!route)
            {
                route=this.lastroute;
                return window.location.hash=`#${route.view}`;
            }

            this.lastroute=route;
            this.highlightSelectedMenu()
            UI.EmitChangeView(route.view)
        })

        
       
        
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