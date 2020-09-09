
import services from './services.js'
import {Router} from './router.js'
import {Application} from './app.js'
import { interval } from 'rxjs';


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

    let subscription=null;

    try{
    
        //Loader
        var cont= document.querySelector("#colonne_content");
        cont.innerHTML="<style>"+cssLoaderClass+"</style>";
        cont.innerHTML+="<div class=\"inline\"><div class=\"loader\"></div>\
                                                            <p class=\"info\" style=\"opacity:0;transition:opacity 1s linear;\">\
                                                            <b>Attendere prego, controllo identità in corso...</b>\
                                                            <br>L'operazione potrebbe richiedere qualche secondo...<span class=\"timer\"></span>\
                                                            <br><br>\
                                                            <b>Please wait, identity checking...</b>\
                                                            <br>The operation may take some seconds...<span  class=\"timer\"></span>\
                                                            </p>\
                                                        </div>";
        
        var countElem= document.querySelectorAll(".timer")
 
       
        subscription=interval(1000).subscribe(
            next=>
            {
               console.log(next)
                if(next>2)
                {
                   
                    cont.querySelector(".info").style.opacity="1";
                }
                countElem.forEach(e=>e.innerText=`${next}s`)
            }
        )

        /*
        setTimeout(()=>{

            subscription.unsubscribe();

        },20000)
        
      
        return*/
        //legge informazioni utente
        //potrebbe impiegare un pò se devi sincronizzare
        var {user,syncResultMessage}=await services.user.read();

        console.log("message:",syncResultMessage)
 
        
        
        if(!window.location.hash)
        {
            //setta #profile nell'url senza fare reolad della pagina
            window.history.pushState("","","#profile")
        }
       
        user.disciplinare=false;
        //inizializza app
        Application.Init(user);

        //vai alla view profile
        Router.go(window.location.hash.substr(1));

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


//salva richiesta
/*document.addEventListener(ApplicationEventBus.types.SaveRequest, async ev=> {
   
    var reqdata=ev.detail;

    var success=await Application.SaveRequest(reqdata);

    var result={"status":success, "reqdata":reqdata, "next":"requests"};

    Router.changeView("result",result);
   
})*/
