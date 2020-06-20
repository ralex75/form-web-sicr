import {NavMenu} from './views/menu.js'
import services from './services.js'
import {Router} from './router.js'

//application data
window.Application={"user":null,"lang":"ITA"};


const Init=(user)=>{
    
      
       //salva info utente
       window.Application.user=user;
 
       
       document.addEventListener("languageChanged",ev=>{
           
                buildMenu();
       })

       document.addEventListener("showHideMenu",ev=>{
           
               showHide();
       })
    

       buildMenu();

}

const showHide=()=>{
  
    var routes=document.querySelector("#routes");
    if(routes)
    {
        routes.style.display = UserIsValid() ? 'block' : 'none'
    }
}

const buildMenu=()=>{
    
    var menu=document.querySelector("#col_sin_menu")
    new NavMenu(menu);
   
}

const UserIsValid=()=>{
    
    var user=window.Application.user
    return user.isAuthorized && user.disciplinare;
}

const EmitEvent=(name,args=null,bubbles=true)=>{
   
    document.dispatchEvent(new CustomEvent(name,{'detail':args,bubbles:bubbles}))
}

const SaveRequest=async (type,data)=>{
        
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

        var result={"status":success, "reqdata":{'type':type,'data':data}, "next":"requests"};

        Router.go("result",result);

}

const RequestTypes={"WIFI":"WIFI","IP":"IP","ACCOUNT":"ACCOUNT"}

const language={
    set current(lang){
        if(window.Application.lang!=lang)
        {
            window.Application.lang=lang;
            EmitEvent("languageChanged")
        }
    },
    get current(){
        return window.Application.lang;
    }
   
}


const Application={
    Init,
    UserIsValid,
    SaveRequest,
    EmitEvent,
    RequestTypes,
    language
}

export {Application}





