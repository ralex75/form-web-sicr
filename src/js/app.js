
import services from './services.js'
import {Profile} from './views/profile'
import {Account} from './views/account'
import {HostList} from './views/hostlist'
import {WIFI} from './views/wifi'
import {IP} from './views/ip'
import {Support} from './views/support'
import {Requests} from './views/requests'
import {UserSearch} from './views/usersearch'
import {RequestDetails} from './views/reqdetails'
import {Logout} from './views/logout'
import {Result} from './views/result'
import {ActivePort} from './views/activeport'
import {UI} from './views/ui'
import menu from './views/menu'


let timeoutID=null;
//const ITSEC_GRACE_TIME=15;

const navigateTo=(view,args)=>{
  
    history.pushState(args,null,`#${view}`)
    router();
}

const navigateToWithDelay=(view,delay)=>{
    clearTimeout(timeoutID);
    timeoutID=setTimeout(()=>{
        navigateTo(view);
    },delay)
}

const EmitEvent=(name,args=null,bubbles=true)=>{
   
    document.dispatchEvent(new CustomEvent(name,{'detail':args,bubbles:bubbles}))
}

export const language={
    set current(lang){
       
        if(window.Application.lang!=lang)
        {
            let url=location.href;
                   
            url=url.match("/en/") ? url.replace("sicr/en/","sicr/") : url.replace("sicr/","sicr/en/")
       
            history.pushState("","",url);

            window.Application.lang=lang;
            EmitEvent("LanguageChanged")
        }
    },
    get current(){
        return window.Application.lang;
    }
}

const User={
    isAdmin(){
        let _user=User.current();
        return _user && _user.isAdmin
    },
    isValid(){
       
        let _user=User.current();
        return _user && _user.isAuthorized;

    },
    current(){
        let _user=null;
        if(window.Application && window.Application.user)
        {
            _user=Object.assign({},window.Application.user);
        }
        return _user;
    },
    remove(){
        if(User.current())
            window.Application.user=null;
    }
}



export const Application={
    language:language,
    user:User,
    navigateTo:navigateTo,
    navigateToWithDelay:navigateToWithDelay,
    requestTypes:{"WIFI":"WIFI","IP":"IP","ACCOUNT":"ACCOUNT","DPORT":"DPORT"}
}

let latestView={"name":"","args":null}

const router=async ()=>{

    clearTimeout(timeoutID)


    let routes=[

        {"path":"#profile","name":'profile',view:Profile},
        {"path":"#hosts","name":'hosts',view:HostList},
        {"path":"#requests","name":'requests',view:Requests},
        {"path":"#requests/details","name":'requests',view:RequestDetails,'hide':true,'requireArgs':true},
        {"path":"#account","name":'account',view:Account},
        {"path":"#ip","name":'ip',view:IP},
        {"path":"#hosts/edit","name":'hosts',view:IP, 'hide':true,'requireArgs':true},
        {"path":"#actport","name":'actport',view:ActivePort},
        {"path":"#wifi","name":'wifi',view:WIFI},
        {"path":"#support","name":'other',view:Support},
        {"path":"#logout","name":'logout',view:Logout},
        {"path":"#search","name":'search',view:UserSearch},
        {"path":"#result","name":'result',view:Result,'hide':true}

    ]

    
    let path=location.hash;

    let matchPath=routes.find(r=>r.path==path);

    if(matchPath && matchPath.requireArgs && !history.state)
    {
        matchPath=null;
    }
  
    
    if(!matchPath)
    {
        matchPath=routes[0];
        history.pushState("","",matchPath.path);
    }

    //salva ultima view selzionata con argomenti
    //ci serve nel caso si seleziona lingua diversa e si vuole rimanere sulla stessa form
    latestView.name=matchPath.path.substr(1);
    latestView.args=history.state;

   
    let user=User.current();

    if(!user || !user.isAuthorized)
    {
        let user=User.current();
        routes=routes.filter(r=>(user && r.name=="profile") || r.name=="logout")
    }

    
    if(user && !user.isAdmin){
        routes=routes.filter(r=>r.name!="search")
    }
    
    
    document.querySelector("#col_sin_menu").innerHTML= new menu(routes).getContent();

    let container=document.querySelector("#colonne_content");
    
    container.classList.remove("fade-in");
    void container.offsetWidth;
    container.classList.add("fade-in");

    let comp = new matchPath.view(container,history.state);
    container.innerHTML=UI.loader();

    setTimeout(async ()=>{
        container.innerHTML=await comp.getContent();
        comp.mounted();
    },50)

    
}


const selectedLanguage=(lang)=>{
   
    UI.generateLanguageSelection(lang);
    UI.generateNavigationMenu(lang)
    
}



const handleError=(err)=>{
    
    debugger;
    User.remove()

    navigateTo('result',{'status':false})

}



window.addEventListener('error', function(event) { 
    debugger
    handleError(event);
})

window.addEventListener('unhandledrejection', function(event) {
    debugger
    handleError(event);
});


window.addEventListener('hashchange', ev=>{
    router()
});

document.addEventListener("LanguageChanged",()=>{
   
    selectedLanguage(Application.language.current);
    navigateTo(latestView.name || 'profile',latestView.args);
})

//listener DOM Loaded
document.addEventListener('DOMContentLoaded',async ev=>{

    
    let lang= location.href.match("/en/") ? "ENG" : "ITA"

    let subscription=null;
   
    //salva info utente e lingua selezionata
    window.Application={"user":null,"lang":lang};

    
    try{
      
        let msg=`<b>Attendere prego, controllo identità in corso...</b>
                 <br>L'operazione potrebbe richiedere qualche secondo...`
        
        if(lang!="ITA")
        { 
            msg=`<b>Please wait, identity checking...</b>\
                 <br>The operation may take some seconds...`
        }
       
        //messaggio di attesa da mostrare utente mentre l'API sincronizza
        subscription=UI.showUserWaiting(msg,'colonne_content',true)
        
        //legge informazioni utente
        //potrebbe impiegare un pò se devi sincronizzare
        var {user,syncResultMessage}=await services.user.read();
     

        if(!user)
        {
            throw Error("No user found")
        }

        user.roma1Email=function(){
           
            if(this.mailAlternates.length>0)
            {
                let email=this.mailAlternates.concat(this.email).filter(m=>m.match(/^\w+(\.([a-zA-Z-]+))+@roma1.infn.it/))
                return email[0] || ""
            }
            return "";
        }
       

        window.Application.user=user;
        
        navigateTo("profile");
        
       
    }
    catch(exc)
    {
        handleError(exc);
    }
    finally
    {
        if(subscription){
            //subscription.unsubscribe();
            subscription()
        }
    }

    selectedLanguage(Application.language.current)

   
})

