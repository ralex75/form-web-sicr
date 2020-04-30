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
						  <textarea id="notes" name="notes" rows="5" value=""></textarea>		
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

   textarea{
       padding:10px;
       border:2px solid #F0F0F0;
    }


 div.grid{
    display:grid;
    grid-template-columns: 160px auto;
    grid-gap: 10px;
}

  
</style>
`

import {Base, UI} from './base.js'
import {Location} from './location.js'
import {Dialog} from '../components/dialog.js'
import services from '../services.js'


export class IP extends Base{
  
    //restituisce il template
    getContent(){
        return template;
    }
    

    modeIsDHCP(){
        return this.$config.value=='DHCP';
    }

    validateHostName()
    {
        var err="";
        var value=this.$hostname.value.trim();
        if(!value.match(/^([0-9A-Za-z_-])+$/))
        {
            err="Il campo non è valido."
        }
       

        return err;
    }

    validateHostMac()
    {
        var err="";
        //legge valore macaddress
        var value=this.$hostmac.value.trim();

        if(!value.match(this.validators['mac']))
        {
            err="Il campo non è valido.";
        }
        else{
            
            if(this.usermaclist.indexOf(value)>-1)
            {
                var eValue=this.eHost ? this.eHost.mac : "";
                if(value!=eValue)
                {
                    err="Il mac inserito appartiene ad un altro tuo nodo."
                }
              
            }
        }

        return err;
    }

    handleFieldError(input,err)
    {
        if(err){
            this.setError(input,err);
        }
        else{
            this.setSuccess(input);
        }
    }

    validateFields()
    {
        //inizializza tutti i campi errore
        this.$form.querySelectorAll("small").forEach(e=>{
           
            e.innerText="";
            e.parentElement.className='form_col';

        })

        //host mac address
        var err=this.validateHostMac();
        this.handleFieldError(this.$hostmac,err);
      
        //host name 
        if(!this.modeIsDHCP())
        {
            err = this.validateHostName();
            this.handleFieldError(this.$hostname,err);
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
       
        //legge tutti i campi errore che sono stati settati
        this.$form.querySelectorAll("small").forEach(e=>{
            if(e.parentElement.className.indexOf('error')>-1)
            {
                errors.push(e.innerText);
            }
        })

      

        console.log("Form errors first level is valid:",errors.length==0);

        //this.$form.querySelector("input[type='submit']").disabled=errors.length>0;

        return errors.length==0;
    }

    setSuccess(input,msg)
    {
       
       var parent= input.parentElement;
       const small=parent.querySelector("small")
       small.innerText=msg;
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

    submitForm(){
       
  
        var curr={}
        curr.mac=this.$hostmac.value.trim();
        curr.config=this.$config.value;
        curr.port=this.selectedPort.port_code;
        curr.notes=this.$notes.value.trim();
        curr.useMacBusy=this.useMacBusy;

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

            console.log("Save")

        var html=this.getReport(data.to);

        this.showDialog("Richiesta di Conferma",html);
        //UI.EmitSaveRequest('IP',data);
    }

    getReport(data)
    {
        var html=`
                    <div class="grid">
                    <div>Mac Address:</div><div>${data.mac}</div>`
        
                   
        if(data.config!='DHCP')
          html+=`<div>Nome:</div><div>${data.name}</div>`
                    
                    
                   
        html+=`<div>Porta:</div><div>${data.port}</div>`
        html+=`</div>`
        
        html+="<h4>Si vuole procedere con l'invio della richiesta?</h4>"

        return html
    }


    getHosts(){
        return new Promise((resolve,reject)=>{
            services.net.getHostList().then(res=>{
                var list=res.data;
                
                resolve(list.map(e=>e.host_mac));
            }).catch(err=>{
                return reject(err);
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

        this.useMacBusy=false;
        /*if(this.args && this.args.mac)
        {
           
            var resp=await services.net.getHost(this.args.mac);
            this.eHost=services.host.map(resp.data);

        }*/
       
       
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

        this.$hostname.addEventListener('change',ev=>{
            this.validateHostName();
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

    acceptUseMacBusy(){
        this.useMacBusy=true;
        this.setSuccess(this.$hostmac,"Hai confermato l'intenzione di voler utilizzare questo mac address");
        //this.$hostmac.disabled=true;
    }

    
    

     //DIALOG PROMPT
    showDialog(title,message,okCallback=null,noCallback=null)
    {

       
        var dlgplace=this.target.querySelector("#dialogPlaceHolder")
        var dlg=new Dialog(dlgplace);
        //callback anonymous function non serve il .bind(this)
        dlg.showYesButton(okCallback);
        dlg.showNoButton(noCallback)
        dlg.setTitle(title);
        dlg.setMessage(message)
        dlg.showHide();

    }

    dataIsChanged(){
        
        var isChanged=this.eHost ? false : true;

        if(this.eHost)
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
                    isChanged=true;
                }
            }
        }

        return isChanged;
    }


    async handleSubmit(){
        
        //validazione primo livello, campi vuoti o non corretti
        var validFields=this.validateFields();

      
        if(!validFields) return;

        var _dataIsChanged=this.dataIsChanged();

       
        if(!_dataIsChanged){

            //richiesta senza dati non salva
            return UI.EmitSaveRequest("IP");
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

      
        var duplicateMac=false;

        if(!this.useMacBusy)
        {
            duplicateMac=await this.isMacDuplicated();
        }
       

        if(duplicateMac) return;

        console.log("FormIsValid:",!(duplicateMac || duplicateName))

        this.submitForm(false);

        

        
        

    
    }

    async isMacDuplicated(){
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
                var okCb=()=>{this.acceptUseMacBusy(); this.handleSubmit()};
                var noCb=()=>{this.setError(this.$hostmac,"Il mac address risulta già registrato.")};
                var msg="<b>Il mac address inserito risulta già registrato</b>. <br><br> Si intende utilizzarlo?"
                //this.showDialog('<h3>Attenzione</h3>Il mac address risulta già registrato. Si intende utilizzarlo?')
                this.showDialog('Richiesta conferma',msg,okCb,noCb)
            }
        }

        return duplicateMac;

    }
}
