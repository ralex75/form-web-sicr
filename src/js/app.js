import {NavMenu} from './views/menu.js'
import services from './services.js'
import {Router} from './router.js'

//application data
window.Application={"user":null};


const Init=(user)=>{
    
  
        //salva info utente
        window.Application.user=user;
 
        if(user.isAuthorized && user.disciplinare)
        {
            
            var menu=document.querySelector("#col_sin_menu")
            menu=new NavMenu(menu);
        
        }

        //window.location.hash="";

        //default route
        //window.location.hash='#profile';
    
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

const Application={
    Init,
    SaveRequest,
    EmitEvent,
    RequestTypes
}

export {Application}





