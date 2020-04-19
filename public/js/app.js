import {NavMenu} from './views/menu.js'
import {Profile} from './views/profile.js'
import {HostList} from './views/hostlist.js'
import {IP} from './views/ip.js'
import {Base} from './views/base.js'
import services from './services.js'
//import {Requests} from './views/requests.js'



const showView=function({view,args}){

    var target=document.querySelector("#colonne_content")
   
    target.classList.remove("fade-in");
    void target.offsetWidth;
    target.classList.add("fade-in");

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
        default:
            view=new Base(target,args);
           
    }

    view.render();
}


document.addEventListener('DOMContentLoaded',ev=>{
    var menu=document.querySelector("#col_sin_menu")
    new NavMenu(menu).render();
    showView({'view':'hostlist'});
})

document.addEventListener('changeView',ev=>{
    console.log("ChangeView:",ev);
    showView(ev.detail);
})

//gestisce menu di navigazione
/*document.querySelector("#col_sin_menu").addEventListener('click', ev=>{
    ev.preventDefault();
    
   
    var view =ev.target.dataset["route"];
    if(!view) return;

    showView(view);

})*/