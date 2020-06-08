import {Result} from './views/result.js'
import {Profile} from './views/profile.js'
import {HostList} from './views/hostlist.js'
import {Requests} from './views/requests.js'
import {RequestDetails} from './views/reqdetails.js'

import {IP} from './views/ip.js'
import {WIFI} from './views/wifi.js'
import {Base,UI} from './views/base.js'

let lastValidRoute="";

const router=({view,args})=>{
    
        var target=document.querySelector("#colonne_content")
       
        target.classList.remove("fade-in");
        void target.offsetWidth;
        target.classList.add("fade-in");
        
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
                //redirezione utente ad altra view se è view Result
                if(args.status)
                {
                    UI.EmitChangeView(args.next || 'profile',null, 2000);
                }
            break;
            default:
                view=lastValidRoute ? lastValidRoute : "profile";
                return window.location.hash=`#${view}`;
                
        }

        lastValidRoute=view;

}

export {router};