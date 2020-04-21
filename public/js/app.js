import {NavMenu} from './views/menu.js'
import {Result} from './views/result.js'
import {Profile} from './views/profile.js'
import {HostList} from './views/hostlist.js'
import {Requests} from './views/requests.js'
import {IP} from './views/ip.js'
import {Base,UI} from './views/base.js'
import services from './services.js'
//import {Requests} from './views/requests.js'



const showView=function({view,args}){

    var target=document.querySelector("#colonne_content")
   
    target.classList.remove("fade-in");
    void target.offsetWidth;
    target.classList.add("fade-in");

    //UI.cancelTimeout();

    switch(view){
        
        case "profile":
            view=new Profile(target,args)
        break;
        case "ip":
            view=new IP(target,args);
        break;
        case "hostlist":
            view=new HostList(target,args);
        break;
        case "requests":
            view=new Requests(target,args);
        break;
        case "result":
            view=new Result(target,args);
            //redirezione utente ad altra view se è view Result
            UI.EmitChangeView('profile',null,2000);
        break;
        default:
            view=new Base(target,args);
           
    }


}

document.addEventListener('DOMContentLoaded',ev=>{
    var menu=document.querySelector("#col_sin_menu")
    new NavMenu(menu);
    showView({'view':'requests'});
    //showView({'view':'result','args':{'status':true}});
})

document.addEventListener(UI.EventList.ChangeView, ev=>{
    console.log("ChangeView:",ev);
    ev.preventDefault();
    showView(ev.detail);
})

document.addEventListener(UI.EventList.SaveRequest, ev=> {
    
    var {type,data}=ev.detail;
    console.log(ev);

    var result={"status":false,"data":data};
   
    services.requests.save(type,data).then(res=>{
        result.status=false
    }).catch(err=>{
        result.status=false
    }).finally(_=>{
        showView({'view':'result',"args":result});
    });
    
})
