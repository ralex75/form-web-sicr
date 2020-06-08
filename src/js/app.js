import {NavMenu} from './views/menu.js'

import {Base,UI} from './views/base.js'
import services from './services.js'
import {router} from './router.js'

//application data
window.Application={"user":null};


window.addEventListener('error', function(event) { 
    handleError(event);
})

window.addEventListener('unhandledrejection', function(event) {
    //console.error('Unhandled rejection (promise: ', event.promise, ', reason: ', event.reason, ').');
    //document.querySelector("#col_sin_menu").innerHTML="";
    handleError(event);
});


const handleError=(err)=>{
    console.log(err);
   
    //TO DO
     //DUMP ERROR to file ?

    //rimuove pannello di navigazione ?
    //document.querySelector("#col_sin_menu").innerHTML="";
   
    //show error
    //return showView({'view':'result','args':{'status':false}})
}

window.addEventListener('hashchange', ev=>{
           
    var view=window.location.hash.substr(1);
    router({'view':view});

})


//listener DOM Loaded
document.addEventListener('DOMContentLoaded',async ev=>{

     //legge informazioni utente
    var user=await services.user.read();
    
    window.location.hash="";
    //salva info utente
    window.Application.user=user;

    try{
        
       
        if(user.isAuthorized && user.disciplinare)
        {
            
            var menu=document.querySelector("#col_sin_menu")
            menu=new NavMenu(menu);
        
        }

        //default route
        window.location.hash='#profile';


    }
    catch(exc)
    {
        handleError(exc);
    }
   
})



//listener cambio view
document.addEventListener(UI.ApplicationEvents.ChangeView, ev=>{
    
    ev.preventDefault();
    //showView(ev.detail);

    router(ev.detail)

})


//salva richiesta
document.addEventListener(UI.ApplicationEvents.SaveRequest, async ev=> {
   
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
