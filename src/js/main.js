
import services from './services.js'
//import {Router} from './router.js'
//import {Application} from './app.js'
import { interval } from 'rxjs';
import {Profile} from './views/profile'
import {Account} from './views/account'
import {HostList} from './views/hostlist'
import {IP} from './views/ip'
import {WIFI} from './views/wifi'
import {Requests} from './views/requests'
import {RequestDetails} from './views/reqdetails'
import menu from './views/menu'



const cssLoaderClass=`.loader {
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .inline{
      display:flex;
      justify-content: left;
      align-items:center;
      padding:50px 50px;
     
  }
  div.inline p{
    margin-left:30px;
    
  }
  .timer{
      font-weight:bold;
  }
  `

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

export const language={
    set current(lang){
        if(window.Application.lang!=lang)
        {
            let url=location.href;
       
            url=url.match("/en/") ? url.replace("wwwsicr/en/","wwwsicr/") : url.replace("wwwsicr/","wwwsicr/en/")
            history.pushState("","",url);

            window.Application.lang=lang;
            EmitEvent("languageChanged")
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
    container.innerHTML=loader();

    setTimeout(async ()=>{
        container.innerHTML=await comp.getContent();
        comp.mounted();
    },200)

    
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

/*
window.addEventListener('hashchange', ev=>{
    
    //var view=window.location.hash.substr(1);
    //Router.go(view);
})*/

const loader=()=>{
    return `<style>${cssLoaderClass}</style><div class=\"inline\"><div class=\"loader\"></div>`
}

const showLoader=(lang)=>{

    //Loader
    var cont= document.querySelector("#colonne_content");
    let html="<div class=\"inline\"><div class=\"loader\"></div>\
                <p class=\"info\" style=\"opacity:0;transition:opacity 1s linear;\">"
                if(lang=="ITA")
                { 
                    html+="<b>Attendere prego, controllo identità in corso...</b>\
                            <br>L'operazione potrebbe richiedere qualche secondo...<span class=\"timer\"></span>"
                }
                else{
                    html+="<b>Please wait, identity checking...</b>\
                        <br>The operation may take some seconds...<span  class=\"timer\"></span>"
                }
                html+="</p></div>";

    cont.innerHTML="<style>"+cssLoaderClass+"</style>"+html;
    var countElem= document.querySelectorAll(".timer")

   
    let subscription=interval(1000).subscribe(
        next=>
        {
           
            if(next>2)
            {
                let info=cont.querySelector(".info")
                if (info)
                    info.style.opacity="1";
            }
            countElem.forEach(e=>e.innerText=`${next}s`)
        }
    )

    return subscription;

}


window.addEventListener('hashchange', ev=>{
    router()
});



//listener DOM Loaded
document.addEventListener('DOMContentLoaded',async ev=>{

    let lang= location.href.match("/en/") ? "ENG" : "ITA"

    let subscription=null;
   
    //salva info utente e lingua selezionata
    window.Application={"user":null,"lang":lang};


    //Application.generateNavigationMenu(lang)

    try{
      
        //messaggio di attesa da mostrare utente mentre l'API sincronizza
        subscription=showLoader(lang)

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

     

   
   
})

