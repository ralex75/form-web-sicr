import {NavMenu} from './views/menu.js'
import services from './services.js'
import {Router} from './router.js'
import moment from 'moment'

const Init=(user)=>{
    
       window.Application.user=user;
       
       generateLanguageSelection(Application.language.current);
       
       document.addEventListener("languageChanged",ev=>{
            let lang=Application.language.current;
            generateNavigationMenu(lang)
            generateLanguageSelection(lang)
            buildMenu();
       })

       
       //genera menu
       buildMenu();
    
       //vai alla view profile
       Router.go(window.location.hash.substr(1));

       if(!user)
       {
           throw Error("user is null")
       }

}


const generateLanguageSelection=(lang)=>
{
    
    let cl=document.querySelector("#ling")
    cl.style.display="block"
  
    if(lang=="ITA")
    {
        cl.innerHTML=`<img src="img/lang_ita_sel.png" width="60" height="30" alt=""/>
                      <a data-lang="ENG"><img src="img/lang_eng.png"  width="60" height="30" alt=""/></a>
                     `
    }
    else{
        cl.innerHTML=`<a data-lang="ITA"><img src="img/lang_ita.png" width="60" height="30" alt=""/></a>
                      <img src="img/lang_eng_sel.png" width="60" height="30" alt=""/>`
    }

    cl.querySelectorAll("[data-lang]").forEach(el=>el.addEventListener("click",ev=>{
        
      
        ev.preventDefault();
        Application.language.current= ev.currentTarget.dataset["lang"];
        
   }));

   
}



const generateNavigationMenu=(lang)=>{

    let loc={"home":"home",
                    "wifi":"wifi",
                    "printers":"stampanti",
                    "webmail":"webmail",
                    "Tier2":"Tier2",
                    "Support":"Supporto",
                    "PC Technician & Device":"Tecnico PC & Device",
                    "Account e Network":"Account e Rete",
                    "VPN":"VPN",
                    "Staff":"Staff"
                    }
            
    let baseUrl=`http://www.roma1.infn.it/conference/wwwsicr/`
    let items=Object.values(loc);
    if(lang=="ENG")
    {
        baseUrl+="en"
        items=Object.keys(loc);
    }
    

    let html=`<ul id="ulprimo">
      		<li class="liprimo" id="primavoce" name="primavoce"><a href="${baseUrl}/${items[0].toLowerCase()}.html">${items[0]}</a></li>
			<li class="liprimo"><a href="${baseUrl}/${items[1].toLowerCase()}.html">${items[1]}</a></li>
			<li class="liprimo"><a href="${baseUrl}/${items[2].toLowerCase()}.html">${items[2]}</a></li>
			<li class="liprimo"><a href="${baseUrl}/${items[3].toLowerCase()}.html">${items[3]}</a></li>
			<li class="liprimo"><a href="${baseUrl}/${items[4].toLowerCase()}.html">${items[4]}</a></li>
			<li class="liprimo_sel"><a href="#">${items[5]} &nabla;</a>
				<ul class="ulsecondo">
					<li class="lisecondo" id="primavoce_sub" name="primavoce_sub"><a href="https://osticket.roma1.infn.it/support/index.php" target="_blank">${items[6]}</a></li>
					<li class="lisecondo"><a href="#">${items[7]}</a></li>
				</ul>
			</li>
			<li class="liprimo"><a href="${baseUrl}/${items[8].toLowerCase()}.html">${items[8]}</a></li>
			<li class="liprimo"><a href="${baseUrl}/${items[9].toLowerCase()}.html">${items[9]}</a></li>
        </ul>`
    
        document.querySelector("#menu").innerHTML=html;

}


const buildMenu=()=>{
    
    var menu=document.querySelector("#col_sin_menu")
    new NavMenu(menu);
   
}

const UserIsValid=()=>{
    
    var isValid=false;
    var user=window.Application && window.Application.user
   
    if(user)
    {
        isValid = user.isAuthorized && user.policies;
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
            let url=location.href;
       
            url=url.match("/en/") ? url.replace("wwwsicr/en/","wwwsicr/") : url.replace("wwwsicr/","wwwsicr/en/")
            history.pushState("","",url);

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
        if(window.Application && window.Application.user)
            window.Application.user=null;
    }
}

const Application={
    Init,
    generateNavigationMenu,
    buildMenu,
    UserIsValid,
    SaveRequest,
    EmitEvent,
    RequestTypes,
    language,
    user
}

export {Application}





