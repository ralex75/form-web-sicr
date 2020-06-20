
import services from './services.js'
import {Router} from './router.js'
import {Application} from './app.js'



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
    Router.go('result',{'status':false})
}

window.addEventListener('hashchange', ev=>{
    var view=window.location.hash.substr(1);
    Router.go(view);
})


//listener DOM Loaded
document.addEventListener('DOMContentLoaded',async ev=>{

    try{
        
        //legge informazioni utente
        var user=await services.user.read();
 
        if(!window.location.hash)
        {
            //setta #profile nell'url senza fare reolad della pagina
            window.history.pushState("","","#profile")
        }
       
        //inizializza app
        Application.Init(user);

        //vai alla view profile
        Router.go(window.location.hash.substr(1));

    }
    catch(exc)
    {
        handleError(exc);
    }
   
})


//salva richiesta
/*document.addEventListener(ApplicationEventBus.types.SaveRequest, async ev=> {
   
    var reqdata=ev.detail;

    var success=await Application.SaveRequest(reqdata);

    var result={"status":success, "reqdata":reqdata, "next":"requests"};

    Router.changeView("result",result);
   
})*/
