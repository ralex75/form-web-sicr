import {Result} from './views/result.js'
import {Profile} from './views/profile.js'
import {HostList} from './views/hostlist.js'
import {Requests} from './views/requests.js'
import {RequestDetails} from './views/reqdetails.js'

import {IP} from './views/ip.js'
import {Account} from './views/account.js'
import {WIFI} from './views/wifi.js'
import {Application} from './app.js'


let lastValidRoute={"view":"profile","args":""};

const go=(view,args)=>{
       

        //controllo se utente è autorizzato prima di passare ad altra view
        //L'utente potrebbe fare copia e incolla della route
        //se non è autorizzato mostra la view del profilo
        if(!Application.UserIsValid())
        {
            window.history.pushState("","","#profile")
            view="profile";
        }
       
        var target=document.querySelector("#colonne_content")
       
        target.classList.remove("fade-in");
        void target.offsetWidth;
        target.classList.add("fade-in");
       
        switch(view.toLowerCase()){
            
            case "profile":
                new Profile(target,args)
            break;
            case "account":
                new Account(target,args);
            break;
            case "ip":
                new IP(target,args);
            break;
            case "wifi":
                new WIFI(target,args);
            break;
            case "hosts":
                new HostList(target,args);
            break;
            case "requests":
                new Requests(target,args);
            break;
            case "reqdetails":
                new RequestDetails(target,args);
            break;
            case "result":
                new Result(target,args);
                
                if(args.status)
                {
                    clearTimeout(timeout);
                    timeout=setTimeout(()=>{
                        var view=args.next || 'profile'
                        window.location.hash=`#${view}`;
                    },2000)
                }
            break;
            default:
                view=lastValidRoute.view ? lastValidRoute.view : "profile";
                return window.location.hash=`#${view}`;
                
        }
       
        lastValidRoute={"view":view,"args":args};

}

let timeout=null;


const Router={
    go,
    lastValidRoute
    //changeView
}

document.addEventListener("languageChanged",ev=>{
    var {view,args}=lastValidRoute;
    Router.go(view,args);    
})

export {Router};