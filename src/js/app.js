import {NavMenu} from './views/menu.js'
import {Result} from './views/result.js'
import {Profile} from './views/profile.js'
import {HostList} from './views/hostlist.js'
import {Requests} from './views/requests.js'
import {IP} from './views/ip.js'
import {WIFI} from './views/wifi.js'
import {Base,UI} from './views/base.js'
import services from './services.js'



const showView=async function({view,args}){

    var target=document.querySelector("#colonne_content")
   
    target.classList.remove("fade-in");
    void target.offsetWidth;
    target.classList.add("fade-in");

    
    switch(view.toLowerCase()){
        
        case "profile":
            view=new Profile(target,args)
        break;
        case "ip":
            view=new IP(target,args);
        break;
        case "wifi":
            view=new WIFI(target,args);
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
            if(args.status) UI.EmitChangeView(args.next || 'profile',null,2000);
        break;
        default:
            view=new Base(target,args);
           
    }


}


const handleError=(err)=>{
    showView({'view':'result','args':{"status":false,"data":err}})
}



document.addEventListener('DOMContentLoaded',async ev=>{

  
    try{
        
        var user=await services.user.current('50699576-15eb-49c6-a645-c07c0de9c402');
      
        if(user.isAuthorized && user.disciplinare)
        {
            
            var menu=document.querySelector("#col_sin_menu")
            menu=new NavMenu(menu);
         
        }

        UI.EmitChangeView('profile');

    }
    catch(exc)
    {
        handleError(exc);
    }
   
   
})

document.addEventListener(UI.EventList.ChangeView, ev=>{
    
    ev.preventDefault();
    showView(ev.detail);
})

document.addEventListener(UI.EventList.SaveRequest, ev=> {
    
    var {type,data}=ev.detail;
   
    var result={"status":false, "data":ev.detail, "next":"requests"};

    try{
        services.requests.save(type,data).then(res=>{
            result.status=true
        }).catch(err=>{
            result.status=false
        }).finally(_=>{
            UI.EmitChangeView('result',result);
        });
    }
    catch(exc)
    {
        UI.EmitChangeView('result',result);
    }
    
})


window.addEventListener("unload", function() {
    services.user.unset();
  });