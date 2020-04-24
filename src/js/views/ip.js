const template=`
<div id="dialogPlaceHolder"></div>
<form>
				<div class="form_sez">
					<div class="form_intest">
					  Identificativo Nodo
					</div>
				 	<div class="form_riga">
						<div class="form_col">
						  <label for="macAddress">Mac Address</label><br>
                          <input type="text" id="macAddress" autocomplete="off" placeholder="mac address">
                          <small>Error Message</small>		
						</div>
						<div class="form_col">
							<label for="hostName">Modalità</label>
							<br> 
							<select id="config">
                                <option  value="STATIC">STATICO</option>
                                <option  value="STATICVM">STATICO - Virtuale</option>
								<option selected value="DHCP">DHCP</option>
							</select>
						</div> 
					</div>
					<div class="form_riga">
						<div class="form_col">
						  <label for="hostName">Nome</label><br>
                          <input type="text" id="hostName" autocomplete="off" placeholder="nome">
                          <small>Error Message</small>
						</div>
						<div class="form_col">
						  <label for="hostDomain">Dominio</label><br>
						  <select id="hostDomain">
							<option selected  value="roma1.infn.it">roma1.infn.it</option>
							<option value="phys.uniroma1.it">phys.uniroma1.it</option>
						  </select>
						</div>
                    </div> 
                    
                </div>
                <div class="form_sez" id="location">
                      
                <h1>Location selection</h1>
                        
                </div>
                <div class="form_sez">
					<div class="form_intest">
					  Ulteriori informazioni
					</div>
				 	<div class="form_riga">
						<div class="form_col_long">
						  <label for="note">Note</label><br>
							<textarea id="notes" name="notes" rows="5" >
							</textarea>		
						</div>
					</div>	
				</div>	
				<div class="form_sez">
					<div class="form_pied cbutton">
					  <input type="submit" class="button_m" value="INVIA" />
					</div>	
				</div>		
</form>  

<style scoped>
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
    
    .form_col small{
        position:absolute;
        visibility:hidden;
    }
    .form_col.success input{
        border-color:#2ecc71
    }
    .form_col.error input,.form_col.error select{
        border-color:#e74c3c
    }

    .form_col.error small{
        visibility:visible;
        color:#e74c3c;
    }

    .form_col input,.form_col select{
        border:2px solid #F0F0F0;
        display:block;
        padding:10px;
        width:70%;
        border-radius:0;
    }

   form.opacity{
       opacity:0.2;
   }
   div.waiting{
    
     
     font-size:30px;
     z-index:1000;
     position:absolute;
     top:50%;
     left:50%;
     transform:translate(-50%,-50%);

   }

  
</style>
`

import {Base, UI} from './base.js'
import {Location} from './location.js'
import {Dialog} from './dialog.js'
import services from '../services.js'

export class IP extends Base{
  
    getContent(){
        return template;
    }
    

    modeIsDHCP(){
        return this.$config.value=='DHCP';
    }


    validateFields()
    {
        this.$form.querySelectorAll("small").forEach(e=>{
           
            e.innerText="";
            e.parentElement.className='form_col';
        })
        
        var value=this.$hostmac.value.trim();

        if(!value.match(this.validators['mac']))
        {
            this.setError(this.$hostmac,"Il campo non è valido.")
        }
        else{
            if(this.usermaclist.indexOf(value)>-1)
            {
                var eValue=this.eHost ? this.eHost.mac : "";
                if(value!=eValue)
                {
                    this.setError(this.$hostmac,"Il mac inserito appartiene ad un altro tuo nodo.")
                }
                else{
                    this.reset(this.$hostmac);
                }
            }
            else{
                this.reset(this.$hostmac);
            }
       
        }
       
        if(!this.modeIsDHCP())
        {
            
            value=this.$hostname.value;
            console.log(value);
            if(!value.match(/^([0-9A-Za-z_-])+$/))
            {
               this.setError(this.$hostname,"Il campo non è valido.")
            }
            else{
               this.reset(this.$hostname);
            }
        }
        else{
            this.reset(this.$hostname);
        }
 
        //errore porta non selezionata
       
        if(!this.selectedPort)
        {
            this.setError(this.$location.getPortRef(),"Porta non selezionata.")
        }
        else
        {
            //controllo porta occupata
            var isBusy=this.checkPortBusy();

            if(isBusy)
            {
                this.setError(this.$location.getPortRef(),"La porta selezionata risulta occupata")
            }
        }


        var errors=[];
       
        this.$form.querySelectorAll("small").forEach(e=>{
            if(e.innerText)
            {
                errors.push(e.innerText);
            }
        })

        console.log("Form errors first level is valid:",errors.length==0);

        //this.$form.querySelector("input[type='submit']").disabled=errors.length>0;

        return errors.length==0;
    }

    setSuccess(input)
    {
       var parent= input.parentElement;
       const small=parent.querySelector("small")
       small.innerText="";
       parent.className='form_col success';
      
    }

    setError(input,message)
    {
       var parent= input.parentElement;
       const small=parent.querySelector("small")
       small.innerText=message;
       parent.className='form_col error';
    }

    reset(input)
    {
      
       var parent= input.parentElement;
       const small=parent.querySelector("small")
       small.innerText="";
       parent.className='form_col';

    }

    configMode(){
        return this.$config.value;
    }

    submitForm(useMacBusy){
       
  
        var curr={}
        curr.mac=this.$hostmac.value.trim();
        curr.config=this.$config.value;
        curr.port=this.selectedPort.port_code;
        curr.notes=this.$notes.value.trim();
        curr.useMacBusy=useMacBusy;

        if(!this.modeIsDHCP())
        {
            curr.name=this.$hostname.value.trim();
            curr.domain=this.$hostdomain.value;
        }
        
       
        var from=null;
        var action='create';

        if(this.eHost)
        {
            from=Object.assign({},this.eHost);
            action='update';
        }

        if(from)
        {
            delete from['location'];
            delete from['port_alias'];
        }

        
       
        var data={
                from:from,
                to:curr,
                action:action
            }


        UI.EmitSaveRequest('IP',data);
    }

    getHosts(){
        return new Promise((resolve)=>{
            services.net.getHostList().then(res=>{
                var list=res.data;
                
                resolve(list.map(e=>e.host_mac));
            })
        })
       
    }

    async init(){

        var trg=this.target;

        
        this.eHost=null;
        this.selectedPort=null;
        
        this.usermaclist=await this.getHosts();
        this.validators={"mac": /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/}

        //il nodo di edit
        this.eHost=this.args ? this.args.eHost : null;
       
        this.$form=trg.querySelector("form");
        this.$hostmac=trg.querySelector("#macAddress")
        this.$hostname=trg.querySelector("#hostName")
        this.$config=trg.querySelector("#config")
        this.$hostdomain=trg.querySelector("#hostDomain")
        this.$location=trg.querySelector("#location")
        this.$notes=trg.querySelector("#notes")
      
        var location= null;

        if(this.eHost)
        {
            console.log(this.eHost)
            this.$hostmac.value=this.eHost.mac;
            this.$hostname.value=this.eHost.name;
            this.$hostdomain.value=this.eHost.domain;
            this.$config.value=this.eHost.config;
            location=this.eHost.location;
        }


        this.$location=new Location(this.$location,location);
    

        this.$config.addEventListener('change',ev=>{
           
            this.$hostname.disabled=this.modeIsDHCP();
            this.$hostdomain.disabled=this.$hostname.disabled;
            this.reset(this.$hostname);
            this.reset(this.$location.getPortRef());
        })

        
        this.$hostmac.addEventListener('change',ev=>{
            this.$hostmac.value=this.$hostmac.value.toUpperCase();
            if(!ev.target.value.match(this.validators['mac'])){
                this.setError(this.$hostmac,"Il campo non è valido.");
            }
            else{
                this.setSuccess(this.$hostmac);
            }
        })
        

        this.$form.addEventListener('submit',ev=>{
            ev.preventDefault();
            this.handleSubmit();
        })


        this.$form.addEventListener("selectedPort",e=>{

            console.log("Selected port");
            this.selectedPort=e.detail;
            this.reset(this.$location.getPortRef());
        })


        this.$config.dispatchEvent(new Event('change'));


    }

  

    checkDuplicatedMacAddress(mac){
        return new Promise((resolve,reject)=>{
            //check mac address duplicato
            services.net.exists(mac).then(resp=>{
                resolve(resp.data)
            }).catch(err=>{
                resolve(true)
            })
        })
    }

    checkDuplicateName(val){
        return new Promise((resolve,reject)=>{
            services.net.lookup(val).then(resp=>{
                resolve(resp.data.length>0);
            }).catch(err=>{
                resolve(true)
            })
        });
    }

    checkPortBusy(){
        
        var port= this.selectedPort;
        var _invalid=!port;
        
        if(!_invalid)
        {
        
            //nodo e porta devono essere DHCP altrimenti controlla se è occupata (port.busy)
            if(!(port.vlanid==113 && this.modeIsDHCP()))
            {
                
                //non ci sono nodi sulla porta
                _invalid=!(port.auth_hosts.length==0);
            
                //se c'è 1 nodo deve essere quello corrente (quello di EDIT) altrimenti invalida
                if(_invalid && this.eHost)
                {
                    _invalid=!(port.auth_hosts.length==1 && port.auth_hosts[0]==this.eHost['mac'].toLowerCase());
                }
                
                //check se config virtuale e porta non è DHCP
                if(_invalid)
                {
                    if(this.configMode() == 'STATICVM')
                    {
                        if(port.vlanid!=113)
                        {
                            _invalid=false;
                        }
                    }
                }
            
    
            }
        
        }

        return _invalid;

    }

     //DIALOG PROMPT
    showDialog(title,message)
    {

       
        var dlgplace=this.target.querySelector("#dialogPlaceHolder")
        var dlg=new Dialog(dlgplace,this);
        dlg.showYesButton(this.submitForm)
        dlg.showNoButton(()=>{this.setError(this.$hostmac,"Il mac address risulta già registrato.")})
        dlg.setTitle(title);
        dlg.setMessage(message)
        dlg.show();

    }


    async handleSubmit(){
        
        //validazione primo livello, campi vuoti o non corretti
        var validFields=this.validateFields();

        if(!validFields) return;


        var dataIsChanged=this.eHost ? false :true;
        
        //verifica cambiamenti
        if(!dataIsChanged)
        {
            
            var data={}
            data.name=this.$hostname.value;
            data.domain=this.$hostdomain.value;
            data.mac=this.$hostmac.value;
            data.config=this.$config.value;
            data.port=this.selectedPort.port_code;

            for(var k in data)
            {
                if(data[k]!=this.eHost[k])
                {
                    dataIsChanged=true;
                }
            }
           
        }
       
        if(!dataIsChanged){
            return UI.ShowResultView(true,{"type":"IP"});
        }
       

        
        //check nome duplicato
        if(!this.modeIsDHCP())
        {
            var hostFullName=`${this.$hostname.value}.${this.$hostdomain.value}`;

            var eHostFullName= this.eHost ? `${this.eHost.name}.${this.eHost.domain}` : null;

            var duplicateName=await this.checkDuplicateName(hostFullName);

            if(duplicateName)
            {
                var setError=(eHostFullName ? eHostFullName!=hostFullName : true)
                if(setError)
                {
                    this.setError(this.$hostname,"Il nome risulta già registrato.")
                }
                duplicateName=setError;
            }

            if(duplicateName) return;
        }

         //check mac duplicato
        var mac=this.$hostmac.value;
        
        var duplicateMac = await this.checkDuplicatedMacAddress(mac);

        //se duplicato e non è quello di edit
        if(duplicateMac)
        {
            
            var setError=(this.eHost ? this.eHost.mac!=mac : true)
            
            duplicateMac=setError;
            
            if(setError)
            {
                
                //controlla che il macaddress inserito non sia uno di quelli dell'utente
                //this.setError(this.$hostmac,"Il mac address risulta già registrato.")

                //this.showDialog('<h3>Attenzione</h3>Il mac address risulta già registrato. Si intende utilizzarlo?')
                this.showDialog('Richiesta conferma','<b>Il mac address inserito risulta già registrato</b>. <br><br> Si intende utilizzarlo?');
            }
        }


        if(duplicateMac) return;

        console.log("FormIsValid:",!(duplicateMac || duplicateName))

        this.submitForm(false);
        
    }
}
                