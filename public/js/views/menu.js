import {Base} from './base.js'

export class NavMenu extends Base {

   
    
    constructor(target)
    {
        super(target);

        this.items=[

                {"text":'Il mio profilo',"view":"profile"},
                {"text":'Richieste effettuate','view':'requests'},
                {"text":'Aggiungi Nodo','view':'ip'},
                {"text":'I miei nodi','view':'hostlist'},
                {"text":'Wifi temporaneo','view':'WIFI'}
            ]

        
    }

    render(){

        let tpl=""
       
        this.items.forEach(i=>{
           
            tpl+=`<div class="bordato"><a href="#" data-route="${i.view}">${i.text}</a></div>`

        })

         
        var template=`<div class=\"divisione\">
                        <p><span class=\"divisione_title\">Account e Rete</span></p>
                        ${tpl}
                     </div>
                     <style scoped>
                        a.selected{
                            color:#E00;
                        }
                     </style>
                     `

        
        this.target.innerHTML=template;

        this.target.querySelectorAll('a').forEach(el=>{
            el.addEventListener('click',ev=>{
                ev.preventDefault();
                el.dispatchEvent(new CustomEvent('changeView',{'detail':{"view":ev.target.dataset['route']},'bubbles':true}))
                this.target.querySelectorAll('a').forEach(el=>el.className='');
                el.className='selected';
            })
        })
    }

}