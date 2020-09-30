import {NavMenu} from './views/menu.js'
import services from './services.js'
import {Router} from './router.js'
import moment from 'moment'

const Init=(user,lang='ITA')=>{
    
        document.addEventListener("languageChanged",ev=>{
            
            buildMenu();
        })
    
        if(!user || !user.isAuthorized)
        {
            throw Error("Unauthorized user")
        }
       
       
       //salva info utente e lingua selezionata
       window.Application={"user":user,"lang":lang};

 
       //genera menu
       buildMenu();
    

}


const buildMenu=()=>{
    
    var menu=document.querySelector("#col_sin_menu")
    new NavMenu(menu);
   
}

const UserIsValid=()=>{
    
    var isValid=false;
    var user=window.Application.user
   
    if(user)
    {
        isValid = user.isAuthorized// && user.disciplinare;
    }
    return isValid;
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


const user={
    isValid(){
        return UserIsValid()
    },
    current(){
        return Object.assign({},window.Application.user);
    },
    remove(){
        window.Application.user=null;
    }
}

const Application={
    Init,
    buildMenu,
    UserIsValid,
    SaveRequest,
    EmitEvent,
    RequestTypes,
    language,
    user
}

export {Application}





