import {NavMenu} from './views/menu.js'

import {Base,UI} from './views/base.js'
import services from './services.js'
import {Router} from './router.js'

//application data
window.Application={"user":null};

export class ApplicationEventBus{
    
    static types={'SaveRequest':'SaveRequest'}
    static EmitEvent(eventName,args)
    {
        document.dispatchEvent(new CustomEvent(eventName,{detail:args,bubbles:true}))
    } 
    static EmitSaveRequest(type,data)
    {
        ApplicationEventBus.EmitEvent(ApplicationEventBus.types.SaveRequest,{'type':type,'data':data})
    } 
}

class Application
{
    static Init(user){
        
        //salva info utente
        window.Application.user=user;
 
        if(user.isAuthorized && user.disciplinare)
        {
            
            var menu=document.querySelector("#col_sin_menu")
            menu=new NavMenu(menu);
        
        }

        window.location.hash="";

        //default route
        window.location.hash='#profile';
    
    }

    static async SaveRequest({type,data}){
        
        var success=false;

        if(data)
        {
            
            try
            {
                await services.requests.save(type,data)
                success=true;
            }
            catch(exc)
            {
                console.log("exc:",exc);
            }

        }

        return success;

    }
}



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
    
    Router.changeView('result',{'status':false})
}

window.addEventListener('hashchange', ev=>{
    var view=window.location.hash.substr(1);
    Router.changeView(view);
})


//listener DOM Loaded
document.addEventListener('DOMContentLoaded',async ev=>{

    try{
        //legge informazioni utente
        var user=await services.user.read();
 
        //inizializza app
        Application.Init(user);
    }
    catch(exc)
    {
        handleError(exc);
    }
   
})

//salva richiesta
document.addEventListener(ApplicationEventBus.types.SaveRequest, async ev=> {
   
    var reqdata=ev.detail;

    var success=await Application.SaveRequest(reqdata);

    var result={"status":success, "reqdata":reqdata, "next":"requests"};

    Router.changeView("result",result);
   
})
