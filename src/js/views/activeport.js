const template=`
<div id="dialogPlaceHolder"></div>
<h4>In questa pagina puoi richiedere l'attivazione di una presa di rete in DHCP.</h4>
<h5><u>I tuoi nodi già registrati in DHCP funzioneranno su qualsiasi presa attiva ed in configurazione DHCP.</u></h5>
<form id="form">
                <div class="form_sez">
		
                    <div class="form_intest">
                            Lista tuoi nodi registrati in DHCP
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
import loc from '../locale/ip.loc'

export class ActivePort extends Abstract{

    submitForm=(ev)=>{
       
        ev.preventDefault()
        if(!this.hostLoc) return;
        if(!this.currSelectedPort){return}

        let html=`<h3>La presa di rete ${this.currSelectedPort.port_alias} è già attiva in DHCP</h3>`
        let title=""
        let lang='ITA'
        console.log(this.currSelectedPort)
        let callack_yes=null;
        let callack_no=null;
        if(this.currSelectedPort.vlanid!=113){
            html=`  <div class="grid">
            <div>${lang!='ITA' ? 'Network Plug' :'Presa di rete'}:</div><div class="c2">${this.currSelectedPort.port_alias}</div>
            <div>${lang!='ITA' ? 'Configuration':'Configurazione'}:</div><div class="c2">DHCP</div>
            </div>
            `

            callack_yes=()=>{
                let {port_code,port_alias}=this.currSelectedPort
                let data={"port":port_code,"port_alias":port_alias}
                
                this.SaveRequest(Application.requestTypes.DPORT,data);
            }
            callack_no=()=>{}
            title="Richiesta di conferma attivazione presa di rete"
            html+=`<h4>${lang!='ITA' ? "Do you want submit the request?" : "Si vuole procedere con l'invio della richiesta?"}</h4>`

        }
       

       

        this.dlg.showDialog(title,html,callack_yes,callack_no);
        
        console.log(this.currSelectedPort)
    }

    async mounted(){

        this.dlg = new DialogWrapper(this.target.querySelector("#dialogPlaceHolder"))
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
        this.messageContent.innerHTML=`
        <u>Se il mac address del nodo che intendi utilizzare in DHCP non è nell'elenco,<br> puoi procedere alla sua registrazione utilizzando
        la voce di menu <h3 style="display:inline;"><a href="#ip">Richiesta Indirizzo IP</a></h3></u></h5>`
     
       
        if(dhcpHosts.length==0) 
        {
            this.messageContent.innerHTML="Non hai nodi registrati in DHCP.<br>"+this.messageContent.innerHTML
       
            return;
        }
 
        this.hostList.innerHTML=dhcpHosts.map(h=>`<li>${h.host_mac}</li>`).join("")
        this.location=new Location(this.form.querySelector("#location"),
                                        {"config":'DHCP',"mac":"","subtitle":"Locazione presa da attivare in DHCP"});
        
                                      
            
        this.hostLoc={
            "build":document.querySelector("#build"),
            "floor":document.querySelector("#floor"),
            "room":document.querySelector("#room"),
            "port":document.querySelector("#port")
        }
       
       

    }

    getContent(){
        return template;
    }
}