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
    
</style>

`


import Abstract from './abstract.js'
import {Location} from '../components/location.js'
import {Dialog, DialogWrapper} from '../components/dialog.js'
import services from '../services.js'
import { Application } from '../app'
import loc from '../locale/dport.loc'

export class ActivePort extends Abstract{

    submitForm=(ev)=>{
       
        ev.preventDefault()
        if(!this.hostLoc) return;
        if(!this.currSelectedPort){return}

        let loc=this.locale()
        let html=`<h3>${loc["PORT-ALREADY-DHCP"]}</h3>`.replace("PORT",this.currSelectedPort.port_alias)
        let title=""
        let lang=this.currentLanguage();
        console.log(this.currSelectedPort)
        let callack_yes=null;
        let callack_no=null;
        if(this.currSelectedPort.vlanid!=113){
            html=`  <div class="grid">
            <div>${lang!='ITA' ? 'Network Port' :'Porta di rete'}:</div><div class="c2">${this.currSelectedPort.port_alias}</div>
            <div>${lang!='ITA' ? 'Configuration':'Configurazione'}:</div><div class="c2">DHCP</div>
            </div>
            `

            callack_yes=()=>{
                let {port_code,port_alias}=this.currSelectedPort
                let data={"port":port_code,"port_alias":port_alias}
                
                this.SaveRequest(Application.requestTypes.DPORT,data);
            }
            callack_no=()=>{}
            title=lang=="ITA" ? "Richiesta di conferma" : "Confirmation Request"
            html+=`<h4>${lang!='ITA' ? "Do you want submit the request?" : "Si vuole procedere con l'invio della richiesta?"}</h4>`

        }
       
        this.dlg = new DialogWrapper(this.target.querySelector("#dialogPlaceHolder"))
       

        this.dlg.showDialog(title,html,callack_yes,callack_no);
        
        console.log(this.currSelectedPort)
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
                                        {"config":'DHCP',"mac":"","subtitle":loc["HEADER-LOCATION-PORT"]});
        
                                      
            
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