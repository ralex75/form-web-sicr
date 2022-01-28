const template=`
<div>
    <input type="text" id="search" class="search" placeholder="[SEARCH]" />
</div>
<div id="waiting"></div>
<h4 id="resultText" ></h4>
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
   
    padding:6px 0;
}
div.scroll{
    overflow-x:auto;
    width:90%;
    white-space: nowrap;
}

ul{
    list-style:none;
    
}

li::marker{
   
    content: "\\2717";
    font-size:2.6em;
    color:red;
}

li.auth::marker{
   
   color:#5cd65c;
   font-size:2.6em;
   content: "\\2713"

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
        
        if(!Application.user.isAdmin())
        {
            return Application.navigateTo("#profile")
        }

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
            let cls=u.isAuthorized ? 'auth' : ''
            items+=`<li class="${cls}"><pre>${templates.completeUserInfo(u)}</pre></li>`
        });

       
      
        this.$resultText.innerText=`Risultati trovati:${users.length}`
        this.$list.innerHTML=items;
    }


    searchUsers(ev){

        clearTimeout(this.searchTimeOutID)
        let scope=this;
        
        let value=ev.target.value;

        this.$resultText.innerText=""
        this.$list.innerHTML=""

        if(!value || value.length<5) return;
        
        this.searchTimeOutID=setTimeout(async ()=>{
            let close=UI.showUserWaiting("",'waiting')
            try{
                let resp=await services.user.list(ev.target.value,false)
                scope.displayUsers(resp.data)
            }
            finally{
                close();
            }
           
        },1000)
    }

    locale(){
        
        const loc={"ITA":{"search":"ricerca..."},
                "ENG":{"search":"search..."}}

        return loc[Application.language.current];
        
    }

   

    
    
}