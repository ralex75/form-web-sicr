const template=`
<div class="search_cont">
    <input type="text" id="search" class="search" placeholder="[SEARCH]" />
    <select id="where">
        <option value="LDAP">LDAP</option>
        <option value="USERDB">USERDB</option>
    </select>
    <input type="button" id="btSearch" value="Cerca"/>
</div>
<div id="waiting"></div>
<h4 id="resultText" ></h4>
<div class="scroll">
    <ul id="userlist"></ul>
</div>
<style>

div.search_cont{
    display:flex;
    justify-content:space-between;
    align-items:center;
    grid-template-columns: 100px 30px 60px;
    grid-gap:10px;
}

.search_cont{
    height:60px;
  
}
#btSearch{
    width:200px;
    border:1px solid #000;
}
.search_cont *{
    height:50px;
}

input.search{
    padding:10px;
    margin:10px 0;
    width:100%;
   
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
        
        console.log("QUI")
        this.$where=this.target.querySelector("#where")
        this.$search=this.target.querySelector("#search")
        this.$btsearch=this.target.querySelector("#btSearch")
        this.$resultText=this.target.querySelector("#resultText")
        this.$list=this.target.querySelector("#userlist")
        
        //this.$search.addEventListener('input',this.searchUsers.bind(this))
        this.$btsearch.addEventListener('click',this.searchUsers.bind(this))
        this.$where.addEventListener('change',this.searchUsers.bind(this))

        let scope=this;
        this.$search.addEventListener("keyup", function(ev) {
            // Number 13 is the "Enter" key on the keyboard
            if (ev.keyCode === 13) {
              // Cancel the default action, if needed
              ev.preventDefault();
              // Trigger the button element with a click
              scope.$btsearch.click();
            }
        })

        

        this.services={"LDAP":services.user.list,
                        "USERDB":services.userdb.list}
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

    displayUsers(users,type="USERDB"){


        users=users.sort((a,b)=>a.surname>b.surname ? 1 : -1)

        let items=""
       
        if(type=='LDAP')
        { 
            users.forEach(u => {
                let cls=u.isAuthorized ? 'auth' : ''
                items+=`<li class="${cls}"><pre>${templates.completeUserInfo(u)}</pre></li>`
            });
        }
        
        if(type=="USERDB"){
            let separator= users.length>1 ? "<br>----------------------------------------------------------------------" : ""
            users.forEach(u => {
                console.log(u)
                let state=u.stato.toUpperCase()
                let cls=(state=='ATTIVO' || state=='ATTIVO - AUTORIZZATO') ? 'auth' : ''
                items+=`<li class="${cls}"><pre>${templates.userDBInfo(u)}</pre></li>`
                items+=separator
            });
        }

       
      
        this.$resultText.innerText=`Risultati trovati:${users.length}`
        this.$list.innerHTML=items;
    }


    searchUsers(ev){

       
        clearTimeout(this.searchTimeOutID)
        let scope=this;
              
        let value=this.$search.value
        console.log(value)

        this.$resultText.innerText=""
        this.$list.innerHTML=""

        if(!value || value.length<3) return;

      
        this.searchTimeOutID=setTimeout(async ()=>{
            let close=UI.showUserWaiting("",'waiting')
            try{
                
                let resp=await this.services[this.$where.value](value,false)
                scope.displayUsers(resp.data,this.$where.value)
            }
            catch(exc){
                console.log(exc)
                this.$resultText.innerHTML=`<span style="color:red">Spiacenti, si è verificato un problema.</span>`
            }
            finally{
                close();
            }
           
        },1)
    }

    locale(){
        
        const loc={"ITA":{"search":"ricerca..."},
                "ENG":{"search":"search..."}}

        return loc[Application.language.current];
        
    }

   

    
    
}