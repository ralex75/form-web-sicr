import {Base,UI} from './base.js'


export class NavMenu extends Base {

    
    constructor(target)
    {
       
        super(target);

        

        this.target.querySelectorAll('a.navi').forEach(el=>{
            el.addEventListener('click',ev=>{
                ev.preventDefault();
                UI.EmitChangeView(ev.target.dataset['route'])
                this.target.querySelectorAll('a.navi').forEach(el=>el.className='');
                el.className='navi selected';
            })
        })
        
    }



    getContent(){

        this.items=[

            {"text":'Il mio profilo',"view":"profile"},
            {"text":'Richieste effettuate','view':'requests'},
            {"text":'Aggiungi Nodo','view':'ip'},
            {"text":'I miei nodi','view':'hostlist'},
            {"text":'Wifi temporaneo','view':'WIFI'}
        ]

        let tpl=""
       
        this.items.forEach(i=>{
           
            tpl+=`<div class="bordato"><a href="#" class="navi" data-route="${i.view}">${i.text}</a></div>`

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