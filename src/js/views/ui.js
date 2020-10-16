import {Application} from '../main'
import { interval } from 'rxjs';

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

const loader=()=>{

    const cssLoaderClass=`.loader {
        border: 8px solid #f3f3f3; /* Light grey */
        border-top: 8px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .inline{
          display:flex;
          justify-content: left;
          align-items:center;
          padding:50px 50px;
         
      }
      div.inline p{
        margin-left:30px;
        
      }
      .timer{
          font-weight:bold;
      }
      `

    return `<style>${cssLoaderClass}</style><div class=\"inline\"><div class=\"loader\"></div>`
}

const showUserWaiting=(lang)=>{

    //Loader
    var cont= document.querySelector("#colonne_content");
    let html=`<div class=\"inline\">${loader()}\
                <p class=\"info\" style=\"opacity:0;transition:opacity 1s linear;\">`
                if(lang=="ITA")
                { 
                    html+="<b>Attendere prego, controllo identità in corso...</b>\
                            <br>L'operazione potrebbe richiedere qualche secondo...<span class=\"timer\"></span>"
                }
                else{
                    html+="<b>Please wait, identity checking...</b>\
                        <br>The operation may take some seconds...<span  class=\"timer\"></span>"
                }
                html+="</p></div>";

    //cont.innerHTML="<style>"+cssLoaderClass+"</style>"+html;
    cont.innerHTML=html;
    var countElem= document.querySelectorAll(".timer")

   
    let subscription=interval(1000).subscribe(
        next=>
        {
           
            if(next>2)
            {
                let info=cont.querySelector(".info")
                if (info)
                    info.style.opacity="1";
            }
            countElem.forEach(e=>e.innerText=`${next}s`)
        }
    )

    return subscription;

}


export const UI={
    generateLanguageSelection,
    generateNavigationMenu,
    showUserWaiting,
    loader
}