import {NavMenu} from './views/menu.js'
import {Result} from './views/result.js'
import {Profile} from './views/profile.js'
import {HostList} from './views/hostlist.js'
import {Requests} from './views/requests.js'
import {RequestDetails} from './views/reqdetails.js'

import {IP} from './views/ip.js'
import {WIFI} from './views/wifi.js'
import {Base,UI} from './views/base.js'
import services from './services.js'


const showView=function({view,args}){

    var target=document.querySelector("#colonne_content")
   
    target.classList.remove("fade-in");
    void target.offsetWidth;
    target.classList.add("fade-in");

    
    switch(view.toLowerCase()){
        
        
        case "profile":
            view=new Profile(target,args)
        break;
        case "ip":
            view=new IP(target,args);
        break;
        case "wifi":
            view=new WIFI(target,args);
        break;
        case "hostlist":
            view=new HostList(target,args);
        break;
        case "requests":
            view=new Requests(target,args);
        break;
        case "reqdetails":
            view=new RequestDetails(target,args);
        break;
        case "result":
            view=new Result(target,args);
            //redirezione utente ad altra view se è view Result
            if(args.status)
            {
                UI.EmitChangeView(args.next || 'profile',null, 2000);
            }
        break;
        default:
            view=new Base(target,args);
    }


}


const handleError=(err)=>{
    console.log(err);
   
    //rimuove info utente
    services.user.unset();
    //TO DO
     //DUMP ERROR to file ?

    //rimuove pannello di navigazione
    document.querySelector("#col_sin_menu").innerHTML="";
    //show error
    return showView({'view':'result','args':{'status':false}})
}


window.addEventListener('error', function(event) { 
    handleError(event);
})

window.addEventListener('unhandledrejection', function(event) {
    //console.error('Unhandled rejection (promise: ', event.promise, ', reason: ', event.reason, ').');
    //document.querySelector("#col_sin_menu").innerHTML="";
    handleError(event);
});

//listener DOM Loaded
document.addEventListener('DOMContentLoaded',async ev=>{

  
    try{
        
        //legge informazioni utente
        var user=await services.user.read();

        //memorizza
        //services.user.set(user);
      
        if(user.isAuthorized && user.disciplinare)
        {
            
            var menu=document.querySelector("#col_sin_menu")
            menu=new NavMenu(menu);
         
        }

        UI.EmitChangeView('profile',user);

    }
    catch(exc)
    {
        handleError(exc);
    }
   
   
})

//listener cambio view
document.addEventListener(UI.EventNames.ChangeView, ev=>{
    
    ev.preventDefault();
    showView(ev.detail);

})


//salva richiesta
document.addEventListener(UI.EventNames.SaveRequest, async ev=> {
   
    var {type,data}=ev.detail;
   
    var result={"status":true, "reqdata":ev.detail, "next":"hostlist"};

   
    if(data)
    {
        
        try
        {
            await services.requests.save(type,data)
            result.next="requests";
        }
        catch(exc)
        {
            result.status=false;
            result.next="profile";
            console.log("exc:",exc);
        }

    }
    
   
    //mostra risultati
    UI.EmitChangeView('result',result);
    
})


//distrugge dati utente nel browser
window.addEventListener("unload", function() {
    services.user.unset();
});