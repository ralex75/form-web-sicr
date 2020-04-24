import {Base,UI} from './base.js'


export class NavMenu extends Base {

    
    init()
    {
        document.addEventListener(UI.EventList.ChangeView,ev=>{
           
            var view=ev.detail.view;
            this.target.querySelectorAll('a.navi').forEach(el=>
                {
                   
                    el.className='navi'
                    if(el.dataset['route']==view)
                    {
                        el.className='navi selected';
                    }
            });
           
        })

        this.target.querySelectorAll('a.navi').forEach(el=>{
            el.addEventListener('click',ev=>{
                ev.preventDefault();
                UI.EmitChangeView(ev.target.dataset['route'])
                /*this.target.querySelectorAll('a.navi').forEach(el=>el.className='');
                el.className='navi selected';*/
            })
        })
        
    }

   

    getContent(){

        this.items=[

            {"text":'Il mio profilo',"view":"profile"},
            {"text":'Richieste inviate','view':'requests'},
            {"text":'Aggiungi Nodo','view':'ip'},
            {"text":'I miei nodi','view':'hostlist'},
            {"text":'Wifi temporaneo','view':'wifi'}
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