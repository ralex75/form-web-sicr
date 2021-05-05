import {Application} from '../app'
import { interval } from 'rxjs';

const generateLanguageSelection=(lang)=>
{
    
    let cl=document.querySelector("#ling")
    if(!cl) return;
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

    let menu=document.querySelector("#menu")
    if(!menu) return
    
    let loc={"home":"home",
                    "wifi":"wifi",
                    "printers":"stampanti",
                    "webmail":"webmail",
                    "Tier2":"Tier2",
                    "Useful Info":"Info Utiliti",
                    "Support":"Supporto",
                    "PC Technician & Device":"Tecnico PC & Device",
                    "Account e Network":"Account e Rete",
                    "VPN":"VPN",
                    "Staff":"Staff"
                    }

    let subLoc={"Software Licenses":"Licenze Software",
                 "Printers Configuration":"Configurazione Stampanti",
                 "Email Configuration":"Configurazione client Email",
                 "Webmail Configuration (outside the Dep.)":"Configurazione Webmail(dall' esterno del Dip.)",
                 "Antivirus":"Antivirus",
                 "Certificates 509":"Certificati 509",
                 "Certificates 509 Server":"Certificati 509 Server",
                 "VPN Configuration":"Configurazione VPN",
                 "Password change": "Cambio password"
                }
            
    //let baseUrl=`http://www.roma1.infn.it/conference/wwwsicr/`
    let baseUrl=`/sicr`
    let items=Object.values(loc);
    let suItems=Object.values(subLoc);
    if(lang=="ENG")
    {
        baseUrl+="/en"
        items=Object.keys(loc);
        suItems=Object.keys(subLoc);
    }
    

    let html=`<ul id="ulprimo">
      		<li class="liprimo" id="primavoce" name="primavoce"><a href="${baseUrl}/${items[0].toLowerCase()}.html">${items[0]}</a></li>
			<li class="liprimo"><a href="${baseUrl}/${items[1].toLowerCase()}.html">${items[1]}</a></li>
			<li class="liprimo"><a href="${baseUrl}/${items[2].toLowerCase()}.html">${items[2]}</a></li>
			<li class="liprimo"><a href="${baseUrl}/${items[3].toLowerCase()}.html">${items[3]}</a></li>
            <li class="liprimo"><a href="${baseUrl}/${items[4].toLowerCase()}.html">${items[4]}</a></li>
            
            <li class="liprimo"><a href="tier2.html">${items[5]} &nabla;</a>
				<ul class="ulsecondo">
					<li class="lisecondo"><a href="https://web.infn.it/CCR/index.php/it/sito-utenti-del-calcolo/licenze" target="_blank">${suItems[0]}</a></li>
					<li class="lisecondo"><a href="https://www.roma1.infn.it/sicr-old/stampanti-pubbliche/stampanti-pubbliche.htm" target="_blank">${suItems[1]}</a></li>
					<li class="lisecondo"><a href="https://www.roma1.infn.it/sicr-old/come-si-fa-per/configurare-MUA.htm"  target="_blank">${suItems[2]}</a></li>
					<li class="lisecondo"><a href="https://www.roma1.infn.it/sicr-old/come-si-fa-per/mail-da-esterno-dipartimento/mail-da-esterno-dipartimento.htm"  target="_blank">${suItems[3]}</a></li>
					<li class="lisecondo"><a href="https://www.roma1.infn.it/sicr-old/area-download/common/trend-micro-antivirus/trend-micro-antivirus.htm"  target="_blank">${suItems[4]}</a></li>
					<li class="lisecondo"><a href="https://www.roma1.infn.it/sicr-old/moduli-di-richiesta/certificato-x-509/certificato-x-509.htm"  target="_blank">${suItems[5]}</a></li>
					<li class="lisecondo"><a href="https://www.roma1.infn.it/sicr-old/moduli-di-richiesta/certificato-x-509/server-x-509.htm"  target="_blank">${suItems[6]}</a></li>
					<li class="lisecondo"><a href="${baseUrl}/${items[9].toLowerCase()}.html">${suItems[7]}</a></li>
					<li class="lisecondo"><a href="https://www.roma1.infn.it/cgi-bin/sicr/cambio-password/cambio-password.cgi"  target="_blank">${suItems[8]}</a></li>
				</ul>
			</li>


			<li class="liprimo_sel"><a href="#">${items[6]} &nabla;</a>
				<ul class="ulsecondo">
					<li class="lisecondo" id="primavoce_sub" name="primavoce_sub"><a href="https://osticket.roma1.infn.it/support/index.php" target="_blank">${items[7]}</a></li>
					<li class="lisecondo"><a href="#">${items[8]}</a></li>
				</ul>
			</li>
			<li class="liprimo"><a href="${baseUrl}/${items[9].toLowerCase()}.html">${items[9]}</a></li>
			<li class="liprimo"><a href="${baseUrl}/${items[10].toLowerCase()}.html">${items[10]}</a></li>
        </ul>`
    
    menu.innerHTML=html;

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