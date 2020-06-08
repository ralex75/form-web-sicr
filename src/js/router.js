import {Result} from './views/result.js'
import {Profile} from './views/profile.js'
import {HostList} from './views/hostlist.js'
import {Requests} from './views/requests.js'
import {RequestDetails} from './views/reqdetails.js'

import {IP} from './views/ip.js'
import {WIFI} from './views/wifi.js'
import {Base,UI} from './views/base.js'

let lastValidRoute="";

const route=({view,args})=>{
    
        var target=document.querySelector("#colonne_content")
       
        target.classList.remove("fade-in");
        void target.offsetWidth;
        target.classList.add("fade-in");
        debugger;
        switch(view.toLowerCase()){
            
            case "profile":
                new Profile(target,args)
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
                    Router.changeView(args.next || 'profile',null, 2000);
                }
            break;
            default:
                view=lastValidRoute ? lastValidRoute : "profile";
                return window.location.hash=`#${view}`;
                
        }

        lastValidRoute=view;

}

let timeout=null;

const changeView=(view,args,delay=0)=>{

    clearTimeout(timeout);
    timeout=setTimeout(()=>{
        debugger;
        route({"view":view,"args":args});
    },delay)
   
}

const Router={
    route,
    changeView
}

export {Router};