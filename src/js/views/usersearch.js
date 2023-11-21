const template=`

<div class="search_cont">
    
    <input type="text" id="search" class="search" placeholder="[SEARCH]" />
    <select id="where">
        <option value="LDAP">LDAP</option>
        <option value="USERDB">USERDB</option>
    </select>
    <input type="button" id="btSearch" value="Cerca"/>
</div>
<div id="feedback"></div>
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
    flex-wrap:nowrap;
    gap:3px;
}


#btSearch{
    min-width:160px;
    border:1px solid #000;
   
}
.search_cont *{
    height:50px;
}

input.search{
    padding:10px;
    margin:10px 0;
    min-width:100px;
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

ul  > button{
    
    border:1px solid #000;
    padding:12px;
    background-color:#DDD;
    color:#333;
    border-radius:0;
    transition:all 0.5s ease-in-out;
}

ul  > button:hover{
    background-color:#333;
    color:#DDD;
}

button.pending{
    width:50px;
    height:50px;
    border:5px solid #00FF00;
    padding:10px;
    border-radius:50%;
    background:none;
    font-size:0;
    border-top-color:#005500;
    animation:rotate 0.75s ease infinite;
}

@keyframes rotate{
    from {
        transform: rotate(0deg);
      }
    
      to {
        transform: rotate(360deg);
      }
}

.feedback{
    
    font-size:21px;
    padding:10px;
    
}

.error{
    border:3px solid #F08080;
    background-color:#FFB6C1;
    color:red;
}

.success{
    border:3px solid #3CB371;
    background-color:#90EE90;
    color:green;
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
        
        
        this.$where=this.target.querySelector("#where")
        this.$search=this.target.querySelector("#search")
        this.$btsearch=this.target.querySelector("#btSearch")
        this.$resultText=this.target.querySelector("#resultText")
        this.$list=this.target.querySelector("#userlist")
        this.$feedback=this.target.querySelector("#feedback")
        
        
        //this.$search.addEventListener('input',this.searchUsers.bind(this))
        this.$btsearch.addEventListener('click',this.searchUsers.bind(this))
        this.$where.addEventListener('change',this.searchUsers.bind(this))
        this.$list.addEventListener('click',this.userlist.bind(this))

        this.insync=[]

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

    parseLDAPItem=(u)=>{
        let cls=u.isAuthorized ? 'auth' : ''
        let item=`<li class="${cls}"><pre>${templates.completeUserInfo(u)}</pre></li>`
        //let siteRoles=u.siteRoles
        //if (u.loa2 && !u.roma1)
        //{
            cls=this.insync.indexOf(u.uuid) > -1 ? "class='pending'" : ""
            item+=`<button ${cls}  data-uid='${u.uuid}'>Forza il SYNC</button>`
        //}
        return item
    }

    parseUserDBItem=(u)=>{
        let state=u.stato.toUpperCase()
        let cls=(state=='ATTIVO' || state=='ATTIVO - AUTORIZZATO') ? 'auth' : ''
        return `<li class="${cls}"><pre>${templates.userDBInfo(u)}</pre></li>`
    }

    displayUsers(users,type="USERDB"){

        users=users.sort((a,b)=>a.surname>b.surname ? 1 : -1)

        let items=""
        let separator= users.length>1 ? "<br>================================================================" : ""
        let callback=this.parseLDAPItem
        if(type!='LDAP')
        { 
            callback=this.parseUserDBItem
        }
       
        items=users.map(u => callback(u)).join(separator);
      
        this.$resultText.innerText=`Risultati trovati:${users.length}`
        this.$list.innerHTML=items;
    }

    userlist(ev){
        
        let uid=ev.target.dataset.uid
        
        if(!uid) return

        if(this.insync.indexOf(uid)>-1) return

        this.setFeedback({status:"",msg:""})

        ev.target.classList.toggle("pending")
        this.insync.push(uid)
        let scope=this;
       

        const refresh=(feedback={})=>{
            
                       
            this.target.querySelectorAll(".pending").forEach(e=>{
                if (e.dataset.uid==uid){
                    e.classList.toggle("pending")
                }
            })
            if(feedback){
                setTimeout(()=>{
                    this.setFeedback(feedback)
                },500)
            }
            this.insync=scope.insync.filter(id=>id!=uid)
            //scope.$btsearch.click();
        }

        let feedback=""

        services.user.sync(uid).then(({data})=>{
            console.log(data.message)
            feedback={"status":"success",msg:`${uid}: ${data.message}`}
        })
        .catch(err=>
            {
                feedback={"status":"error",msg:"Problemi di sincronizzazione"}
            }
        )
        .finally(_=>{
            refresh(feedback)
        })
       
    }

    setFeedback({status,msg}){
        if(!msg) { 
                this.$feedback.classList.remove("feedback","success","error")
        }
        if(msg){this.$feedback.classList.add("feedback",status)}
        this.$feedback.innerText=msg
    }


    searchUsers(ev){

       
        clearTimeout(this.searchTimeOutID)

        this.setFeedback({"status":false,msg:""})

        let scope=this;
              
        let value=this.$search.value
       
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
                if(close) close();
            }
           
        },1)
    }

    locale(){
        
        const loc={"ITA":{"search":"ricerca..."},
                "ENG":{"search":"search..."}}

        return loc[Application.language.current];
        
    }

   

    
    
}