const template=`
<div>
    <input type="text" id="search" class="search" placeholder="[SEARCH]" />
</div>
<div id="waiting"></div>
<h4 id="resultText"></h4>
<div class="scroll">

    <ul id="userlist"></ul>
</div>
<style>

input.search{
    padding:10px;
    margin:10px 0;
    width:80%;
}
li{
    border-bottom:1px solid #DDD;
    margin:6px 0;
}
div.scroll{
    overflow-x:auto;
    width:90%;
    white-space: nowrap;
}
</style>
`


import Abstract from './abstract.js'
import services from '../services.js'
import {Application} from '../app'
import {templates} from '../../../server/api/templates'
import {UI} from './ui'

export class UserSearch extends Abstract{

    constructor(target,params){
        super(target,params)
    }


    async mounted(){
        
        this.$search=this.target.querySelector("#search")
        this.$resultText=this.target.querySelector("#resultText")
        this.$list=this.target.querySelector("#userlist")
        
        this.$search.addEventListener('input',this.searchUsers.bind(this))
    }

    async getContent(){
       
        var tpl=template;
       
        //current lang
        var loc=this.locale();

        for(var k in loc)
        {
            tpl=tpl.replace(`[${k.toUpperCase()}]`,loc[k]);
        }
        
        return tpl;
       
    }

    displayUsers(users){
        let items=""
       
        users.forEach(u => {
            items+=`<li><pre>${templates.completeUserInfo(u)}</pre></li>`
        });

       

        this.$resultText.innerText=`Risultati trovati:${users.length}`
        this.$list.innerHTML=items;
    }


    searchUsers(ev){
        clearTimeout(this.searchTimeOutID)
        let scope=this;
         //messaggio di attesa da mostrare utente mentre l'API sincronizza
       
        let value=ev.target.value;

        if(!value) {
            return scope.displayUsers([])
        }

        this.searchTimeOutID=setTimeout(async ()=>{
            let subscription=UI.showUserWaiting2('ITA','waiting')
            try{
                let resp=await services.user.list(ev.target.value,false)
                scope.displayUsers(resp.data)
            }
            finally{
                UI.showUserWaiting2('ITA','waiting',false)
                subscription.unsubscribe();
            }
           
        },1000)
    }

    locale(){
        
        const loc={"ITA":{"search":"ricerca...","port":"Porta","mac":"Indirizzo MAC","add":"Aggiungi","search":"ricerca"},
                "ENG":{"search":"search...","port":"Port","mac":"MAC Address","add":"Add","search":"search"},
            }

        return loc[Application.language.current];
        
    }

   

    
    
}