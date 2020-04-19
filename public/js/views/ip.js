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
                          <input type="text" id="macAddress" placeholder="mac address">
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
                          <input type="text" id="hostName" placeholder="nome">
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
							<textarea name="note" rows="5" >
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
.form_pied.cbutton{
    
}
.form_pied.cbutton:hover{
    border-color:#DD0;
}
    .form_pied input[type=submit]{
        width:100%;
        
        color:#DDD;
        font-size:21px;
    } 
    
    .form_col small{
        position:absolute;
        visibility:hidden;
    }
    .form_col.success input{
        border-color:#2ecc71
    }
    .form_col.error input{
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

import {Base} from './base.js'
import {Location} from './location.js'
import {Dialog} from './dialog.js'
import services from '../services.js'

export class IP extends Base{
  
    
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
            if(this.eHost)
            {
                if(value!=this.eHost.mac && this.usermaclist.indexOf(value)>-1)
                {
                    this.setError(this.$hostmac,"Il mac inserito appartiene ad un altro tuo nodo.")
                }
                else{
                    this.setSuccess(this.$hostmac);
                }
            }
            else{
                this.setSuccess(this.$hostmac);
            }
       
        }
       
        if(!this.modeIsDHCP())
        {
            
            value=this.$hostname.value;
            console.log(value);
            if(!value.match(/^(\w+)$/))
            {
               this.setError(this.$hostname,"Il campo non è valido.")
            }
            else{
               this.setSuccess(this.$hostname);
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
       /*var parent= input.parentElement;
       const small=parent.querySelector("small")
       small.innerText="";
       parent.className='form_col success';*/
       this.reset(input)
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
        console.log("Submit")
    }

    async init(){

        var trg=this.target;

       
        this.eHost=null;
        this.usermaclist=null;
        this.selectedPort=null;
        this.validators={"mac": /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/}

        
        if(this.args)
        {
            //il nodo di edit
            this.eHost=this.args.eHost;
            
            //lista dei nodi utente
            this.usermaclist=this.args.maclist;
        }


        this.$form=trg.querySelector("form");
        this.$hostmac=trg.querySelector("#macAddress")
        this.$hostname=trg.querySelector("#hostName")
        this.$config=trg.querySelector("#config")
        this.$hostdomain=trg.querySelector("#hostDomain")
        this.$location=trg.querySelector("#location")
       

        this.showDialog('Richiesta conferma','<b>Il mac address inserito risulta già registrato</b>. <br><br> Si intende utilizzarlo?');
      
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
        this.$location.render();


        this.$config.addEventListener('change',ev=>{
           
            this.$hostname.disabled=this.modeIsDHCP();
            this.$hostdomain.disabled=this.$hostname.disabled;
            this.reset(this.$hostname);
            this.reset(this.$location.getPortRef());
        })

        
        this.$hostmac.addEventListener('change',ev=>{
            this.$hostmac.value=this.$hostmac.value.toUpperCase();
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

   

    render(){
        this.target.innerHTML=template;
        this.init();
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

    showDialog(title,message)
    {

        //DIALOGO PROMPT
        var dlgplace=this.target.querySelector("#dialogPlaceHolder")
        var dlg=new Dialog(dlgplace);
        dlg.showYesButton(this.submitForm)
        dlg.showNoButton()
        dlg.setTitle(title);
        dlg.setContent(message)
        dlg.show();

    }


    async handleSubmit(){
        
        //validazione primo livello, campi vuoti o non corretti
        var formIsValid=this.validateFields();

        if(!formIsValid) return;


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
       
        formIsValid=dataIsChanged;

        if(!formIsValid) return;

        debugger;

        //check nome duplicato
        if(!this.modeIsDHCP())
        {
            
            var duplicateName=await this.checkDuplicateName(`${this.$hostname.value}.${this.$hostdomain.value}`)

            if(duplicateName)
            {
                this.setError(this.$hostname,"Il nome risulta già registrato.")
            }

            formIsValid=!duplicateName
    

            if(!formIsValid) return;
        }

        
        var mac=this.$hostmac.value;
       
        //check macaddress duplicato
       
        var duplicateMac=await this.checkDuplicatedMacAddress(mac);

        if(duplicateMac)
        {
            //controlla che il macaddress inserito non sia uno di quelli dell'utente
           
            this.setError(this.$hostmac,"Il mac address risulta già registrato.")

            this.showDialog('<h3>Attenzione</h3>Il mac address risulta già registrato. Si intende utilizzarlo?')
            
        }


        console.log("FormIsValid:",!(duplicateMac || duplicateName))

        
    }
}
                