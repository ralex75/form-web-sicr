const template=`
<div id="dialogPlaceHolder"></div>
<h4>[HEADER]</h4>
<h5><u>[SUB-HEADER]</u></h5>
<form id="form">
                <div class="form_sez">
		
                    <div class="form_intest">
                            [HEADER-HOST-LIST]
                        </div>
                        <div class="form_riga">  
                           
                           <ul id="hostList"></ul>
                           <h5 id="hostcont"></h5>
                        </div>
        
                    </div>
                    <div class="form_sez" id="location">
                    </div>
                    <div class="form_sez">
					<div class="form_pied cbutton">
					  <input type="submit" class="button_m" value="Invia" />
					</div>	
				</div>		
                    
</form>
<style>
.form_pied{
    padding:1px;
}

.form_pied:hover > input[type=submit]{
    background-color:#FFF;
    color:#000;
    letter-spacing:10px;
   
}

    .form_pied input[type=submit]{
        width:100%;
        padding:10px;
        color:#FFF;
        font-size:21px;
        outline:0;
        transition: 0.5s ease-in-out;
    } 
    #form div.form_col:first-child{
        padding-top:6px;
        width:250px;
        
    }
    div.grid{
        display:grid;
        grid-template-columns: 160px auto;
        grid-gap: 10px;
    }
    
    div.grid div.c2{
        color:#4697b8;
    }

    .loader {
        border: 5px solid #f3f3f3; /* Blue */
        border-top: 5px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    
</style>

`


import Abstract from './abstract.js'
import {Location} from '../components/location.js'
import {DialogWrapper} from '../components/dialog.js'
import services from '../services.js'
import { Application } from '../app'
import loc from '../locale/dport.loc'

export class ActivePort extends Abstract{

    submitForm=(ev)=>{
       
        ev.preventDefault()
        if(!this.hostLoc) return;
        if(!this.currSelectedPort){return}

        
        
        let lang=this.currentLanguage();
        //console.log(this.currSelectedPort)
      
       
        const showCancelPortRequestHTML=function(currPort){
            html=`  <div class="grid">
            <div>${lang!='ITA' ? 'Network Port' :'Porta di rete'}:</div><div class="c2">${currPort.port_alias}</div>
            <div>${lang!='ITA' ? 'Configuration':'Configurazione'}:</div><div class="c2">DHCP</div>
            </div>
            `

            title=lang=="ITA" ? "Notifica" : "Notification"
            html+=`<h4>${lang!='ITA' ? "The port is already enabled and in DHCP mode" : "La porta risulta già attiva ed in configurazione DHCP"}</h4>`

            return {"html":html,"title":title,"callback_yes":null,"callback_no":null}
        }

        const showActivatePortHTML=function(ctx,currPort){

          
            html=`  <div class="grid">
            <div>${lang!='ITA' ? 'Network Port' :'Porta di rete'}:</div><div class="c2">${currPort.port_alias}</div>
            <div>${lang!='ITA' ? 'Configuration':'Configurazione'}:</div><div class="c2">DHCP</div>
            </div>
            `

            const callback_yes=()=>{
                
                let {port_code,port_alias}=currPort
                let data={"port":port_code,"port_alias":port_alias}
               
                ctx.SaveRequest(Application.requestTypes.DPORT,data);
            }

                      

            const callback_no=()=>{}

            title=lang=="ITA" ? "Richiesta di conferma" : "Confirmation Request"
            html+=`<h4>${lang!='ITA' ? "Do you want submit the request?" : "Si vuole procedere con l'invio della richiesta?"}</h4>`

            return {"html":html,"title":title,"callback_yes":callback_yes,"callback_no":callback_no}
        }

                     
        this.dlg = new DialogWrapper(this.target.querySelector("#dialogPlaceHolder"))
        let title=lang=="ITA" ? "Attendere prego" : "Please wait"
        let html= lang=="ITA" ? "Controllo stato della porta..." : "Checking port status..."

        html=`<div class="grid" style="grid-template-columns:60px auto;align-items:center;justify-content:center;gap:1px;"><div class=\"loader\" ></div><div >${html}</div></div>`
        this.dlg.showDialog("",html,null,null);
        let nativeDlg=this.dlg.nativeDialog;
        

        const queryPortCode = function(port_code){
            return new Promise((res,rej)=>{
                setTimeout(async ()=>{
                    try{
                        let result=await services.snmp.query(port_code)
                        res(result)
                    }
                    catch(exc){
                        rej(exc)
                    }
                },2000)
            })
        }

        queryPortCode(this.currSelectedPort.port_code).then(result=>{
            let swp=result.data;
            let data= showCancelPortRequestHTML(this.currSelectedPort)
          
            if(!swp || !(swp.vlanid==113 && swp.status==1)){
                data=showActivatePortHTML(this,this.currSelectedPort)
            }
           
            let {html,title,callback_yes,callback_no}=data
            
            nativeDlg.setTitle(title)
            nativeDlg.setMessage(html)
            nativeDlg.showYesButton(callback_yes)
            nativeDlg.showNoButton(callback_no)
        }).catch(err=>{
            console.log(err)
            let error=lang=="ITA" ? "Spiacenti, si è verificato un errore.<br> La richiesta non può essere inviata." : "Sorry, an error has occurred.<br> The request cannot be sent."
            nativeDlg.setMessage(`<h4 class='error'>${error}</h4>`)
        })
          
       

        
        
        
    }

    async mounted(){

        
        //form
        this.form=document.querySelector("#form")

        //istanzia oggetto location
        this.form.addEventListener("submit",ev=>this.submitForm(ev))
        this.form.addEventListener("selectedPort",ev=>this.currSelectedPort=ev.detail)
        this.messageContent=this.form.querySelector("#hostcont")
                
        this.hostList=this.form.querySelector("#hostList");
        this.hostLoc=null;
        
        let hosts=await services.net.getHostList()
        let dhcpHosts=hosts.data.filter(h=>!h.host_ip)
        let loc=this.locale()
        this.messageContent.innerHTML=`
        ${loc["REGISTER-HOST"]}:&nbsp;&nbsp;&nbsp;&nbsp;<h3 style="display:inline"><a href="#ip">${loc["REQUEST-IP-MENU-ITEM"]}</a></h3>`
     
              
        if(dhcpHosts.length==0) 
        {
           this.form.querySelector("input[type=submit]").parentElement.style.display="none"
           return this.messageContent.innerHTML="<h3>"+loc["NO-DHCP-HOSTS-FEEDBACK"]+"</h3><br>"+this.messageContent.innerHTML
        }
 
        this.hostList.innerHTML=dhcpHosts.map(h=>`<li>${h.host_mac}</li>`).join("")
        this.location=new Location(this.form.querySelector("#location"),
                                        {"config":'DHCP',"mac":"","hidedhcp":true,"subtitle":loc["HEADER-LOCATION-PORT"]});
        
                                      
            
        this.hostLoc={
            "build":document.querySelector("#build"),
            "floor":document.querySelector("#floor"),
            "room":document.querySelector("#room"),
            "port":document.querySelector("#port")
        }
       
       

    }

    locale(){

        return loc[this.currentLanguage()];

    }

    
    
    getContent()
    {
       
       let tpl=template;
       let loc=this.locale();

       for(let k in loc)
       {
         tpl=tpl.replace(`[${k}]`,loc[k]);
       }
       
        return tpl;

    
    }
}