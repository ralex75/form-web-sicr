
import services from './services.js'
import {Profile} from './views/profile'
import {Account} from './views/account'
import {HostList} from './views/hostlist'
import {IP} from './views/ip'
import {WIFI} from './views/wifi'
import {Requests} from './views/requests'
import {RequestDetails} from './views/reqdetails'
import {UI} from './views/ui'
import menu from './views/menu'






window.addEventListener('error', function(event) { 
    
    handleError(event);
})

window.addEventListener('unhandledrejection', function(event) {
    
    //console.error('Unhandled rejection (promise: ', event.promise, ', reason: ', event.reason, ').');
    //document.querySelector("#col_sin_menu").innerHTML="";
    handleError(event);
});

let timeoutID=null;



const navigateTo=(view,args)=>{
    
    history.pushState(args,"",`#${view}`)
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
       
            url=url.match("/en/") ? url.replace("wwwsicr/en/","wwwsicr/") : url.replace("wwwsicr/","wwwsicr/en/")
            history.pushState("","",url);

            window.Application.lang=lang;
            EmitEvent("LanguageChanged")
        }
    },
    get current(){
        return window.Application.lang;
    }
}

const user={
    isValid(){
        var isValid=false;
        var user=window.Application && window.Application.user
    
        if(user)
        {
            isValid = user.isAuthorized && user.policies;
        }

        return isValid;
    },
    current(){
        return Object.assign({},window.Application.user);
    },
    remove(){
        if(window.Application && window.Application.user)
            window.Application.user=null;
    }
}

export const Application={
    language:language,
    user:user,
    navigateTo:navigateTo,
    navigateToWithDelay:navigateToWithDelay,
    requestTypes:{"WIFI":"WIFI","IP":"IP","ACCOUNT":"ACCOUNT"}
}



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
        {"path":"#wifi","name":'wifi',view:WIFI}

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



const handleError=(err)=>{
    console.log(err);
   

    //in caso di errore rimuoviamo utente;
    //Application.user.remove();
    
    
    //TO DO
     //DUMP ERROR to file ?

    //rimuove pannello di navigazione ?
    //document.querySelector("#col_sin_menu").innerHTML="";
   
    //show error
    //Router.go('result',{'status':false})
}






window.addEventListener('hashchange', ev=>{
    router()
});

document.addEventListener("LanguageChanged",()=>{
   
    UI.generateLanguageSelection(Application.language.current);
    UI.generateNavigationMenu(Application.language.current)
    debugger;
    navigateTo("profile")
})

//listener DOM Loaded
document.addEventListener('DOMContentLoaded',async ev=>{

    let lang= location.href.match("/en/") ? "ENG" : "ITA"

    let subscription=null;
   
    //salva info utente e lingua selezionata
    window.Application={"user":null,"lang":lang};


    //Application.generateNavigationMenu(lang)

    try{
      
        //messaggio di attesa da mostrare utente mentre l'API sincronizza
        subscription=UI.showUserWaiting(lang)

        //legge informazioni utente
        //potrebbe impiegare un pò se devi sincronizzare
      
        var {user,syncResultMessage}=await services.user.read();
     
        user.email=""
        window.Application.user=user;
        
        router();
       
    }
    catch(exc)
    {
        handleError(exc);
    }
    finally
    {
         
        if(subscription)
            subscription.unsubscribe();

    }

    UI.generateLanguageSelection(Application.language.current)
    UI.generateNavigationMenu(Application.language.current)

   
})

