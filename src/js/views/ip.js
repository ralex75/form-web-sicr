const template=`
<div id="dialogPlaceHolder"></div>
<a href="#hostlist" id="goBack" style="text-decoration:underline;">Torna indietro</a>
<form>
				<div class="form_sez">
					<div class="form_intest">
					  Identificativo Nodo
					</div>
				 	<div class="form_riga">
						<div class="form_col">
						  <label for="mac">Mac Address</label><br>
                          <input type="text" name="mac" data-attr="formdata" autocomplete="off" placeholder="mac address">
                          <small>Error Message</small>		
						</div>
						<div class="form_col">
							<label for="config">Modalità</label>
							<br> 
							<select name="config" data-attr="formdata">
                                <option  value="STATIC">STATICO</option>
                                <option  value="STATICVM">STATICO - Virtuale</option>
								<option selected value="DHCP">DHCP</option>
							</select>
						</div> 
					</div>
					<div class="form_riga">
						<div class="form_col">
						  <label for="name">Nome</label><br>
                          <input type="text" name="name" data-attr="formdata" autocomplete="off" placeholder="nome">
                          <small>Error Message</small>
						</div>
						<div class="form_col">
						  <label for="domain">Dominio</label><br>
						  <select name="domain" data-attr="formdata">
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
						  <label for="notes">Note</label><br>
						  <textarea name="notes" data-attr="formdata" rows="5" value=""></textarea>		
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

div.grid div.c2{
    color:#4697b8;
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
    

    configMode(){
        return this.formdata['config'].value;
    }

    modeIsDHCP(){
        return this.configMode()=='DHCP';
    }

    validateHostName()
    {
        var err="";
        var value=this.formdata['name'].value.trim();
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
        var value=this.formdata['mac'].value.trim();

        if(!value.match(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/))
        {
            err="Il campo non è valido.";
        }
        else{
            
          
            //controlla che il mac inserito non sia già un nodo dell'utente
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
        this.handleFieldError(this.formdata['mac'],err);
      
        //host name 
        if(!this.modeIsDHCP())
        {
            err = this.validateHostName();
            this.handleFieldError(this.formdata['name'],err);
        }
        else{
            this.reset(this.formdata['name']);
        }
 
       
        //errore porta non selezionata
        if(!this.selectedPort)
        {
            this.setError(this.formdata['port'],"Porta non selezionata.")
        }
        else
        {
            //controllo porta occupata
            var isBusy=this.checkPortBusy();

            if(isBusy)
            {
                this.setError(this.formdata['port'],"La porta selezionata risulta occupata")
            }

        }

        //check errori

        var errors=[];
       
        //legge tutti i campi errore che sono stati settati
        this.$form.querySelectorAll("small").forEach(e=>{
            if(e.parentElement.className.indexOf('error')>-1)
            {
                errors.push(e.innerText);
            }
        })

        console.log("Form errors first level is valid:",errors.length==0);

      
        return errors.length==0;
    }


    setSuccess(input,msg)
    {
       var parent= input.parentElement;
       const small=parent.querySelector("small")
       small.innerText=msg;
       parent.className='form_col success';
    }

    setError(input,msg)
    {
       var parent= input.parentElement;
       const small=parent.querySelector("small")
       small.innerText=msg;
       parent.className='form_col error';
    }

    reset(input)
    {
      
       var parent= input.parentElement;
       const small=parent.querySelector("small")
       small.innerText="";
       parent.className='form_col';

    }


    submitForm(){
       
        var curr={}

        for(var k in this.formdata)
        {
            curr[k]=this.formdata[k].value.trim();
        }

        curr.useMacBusy=this.useMacBusy;

        if(this.modeIsDHCP())
        {
            delete curr['name'];
            delete curr['domain'];
        }
     
       
        var from=null;
        var action='create';

        if(this.eHost)
        {
            from=Object.assign({},this.eHost);
            action='update';
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

        this.showDialog("Richiesta di Conferma",html,()=>{
            console.log("Send FOrm:",data)
            UI.EmitSaveRequest('IP',data);
        },()=>{});
        //UI.EmitSaveRequest('IP',data);
    }

    getReport(data)
    {
        var config={"STATIC":"Indirizzo IP fisso",
                    "STATICVM":"Indirizzo IP per macchina virtuale",
                    "DHCP":"Indirizzo IP dinamico"}

        var html=`
                    <div class="grid">
                    <div>Configurazione:</div><div class="c2">${config[data.config]}</div>
                    <div>Mac Address:</div><div class="c2">${data.mac}</div>`
        
                   
        if(data.config!='DHCP')
          html+=`<div>Nome:</div><div class="c2">${data.name}.${data.domain}</div>`
                    
                    
                   
        html+=`<div>Porta:</div><div class="c2">${data.port}</div>`
        
        if(data.notes)
        {
            html+=`<div>Note:</div><div class="c2">${data.notes.slice(0,100)+"..."}</div>`
        }

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

        

       
        trg.querySelector("#goBack").style.display = window.location.hash=='#hosts' ? 'block' : 'none';

        this.$form=trg.querySelector("form");

        this.formdata={};

        trg.querySelectorAll("[data-attr='formdata']").forEach(el=>{
           
            this.formdata[el.name]=el;

        })

       
        
        //il nodo di edit se si tratta di modifica
        this.eHost=null;

        //porta selezionata
        this.selectedPort=null;
        
        //lista di nodi gestiti dall'utente
        
        this.usermaclist=await this.getHosts();
        //console.log("maclist:",this.usermaclist);
        
        //il nodo di edit
        this.eHost=this.args ? this.args.eHost : null;

        
        this.useMacBusy=false;
       
      
        var location = null;

        if(this.eHost)
        {
            location=this.eHost.location;

            for(var k in this.formdata)
            {
                this.formdata[k].value=(this.eHost[k] || "")
            }
        }

        location=new Location(trg.querySelector("#location"),location);

        this.formdata.port=location.getPortRef();
    
        document.addEventListener("NoFreePorts",ev=>{
            this.setError(this.formdata.port,"Non ci sono porte libere selezionabili.")
        })

        //registrazione eventi form

        //cambio configurazione
        this.formdata['config'].addEventListener('change',ev=>{
           
            var disabled=this.modeIsDHCP();
            this.formdata['name'].disabled=disabled;
            this.formdata['domain'].disabled=disabled;
            this.reset(this.formdata['name']);
            this.reset(this.formdata['port']);

            var mac= this.eHost ? this.eHost.mac : null;
            UI.EmitEvent('ConfigChanged',{"config":ev.target.value,"mac":mac});
        })

        //cambio mac 
        this.formdata['mac'].addEventListener('change',ev=>{
            this.useMacBusy=false;
            this.formdata['mac'].value=ev.target.value.toUpperCase();
            this.handleFieldError(this.formdata['mac'],this.validateHostMac());
        })

         //cambia nome 
        this.formdata['name'].addEventListener('change',ev=>{
            this.handleFieldError(this.formdata['name'],this.validateHostName());
        })
        

        //selezione porta
        this.$form.addEventListener("selectedPort",e=>{
            this.selectedPort=e.detail;
            this.reset(this.formdata['port']);
        })

          //invio form
        this.$form.addEventListener('submit',ev=>{
            ev.preventDefault();
            this.handleSubmit();
        })


        //trigger evento Change sulla configurazione
        this.formdata['config'].dispatchEvent(new Event('change'));


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
    showDialog(title,message,okCallback=null,noCallback=null)
    {
 
        var dlgplace=this.target.querySelector("#dialogPlaceHolder")
        var dlg=new Dialog(dlgplace);
        //callback anonymous function non serve il .bind(this)
        dlg.showYesButton(okCallback)
            .showNoButton(noCallback)
            .setTitle(title)
            .setMessage(message)
            .showHide();

    }

    dataIsChanged(){
        
        var isChanged=this.eHost ? false : true;

        if(this.eHost)
        {
            for(var k in this.formdata)
            {
                
                if(this.eHost[k] && (this.formdata[k].value.toLowerCase()!=this.eHost[k].toLowerCase()))
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

        //controllo se dati sono cambiati 
        var _dataIsChanged=this.dataIsChanged();

        
        //Mostrare la dialog ?
        if(!_dataIsChanged){

            //return this.showDialog("Richiesta di Conferma","<h4>Non ci sono state modifiche</h4><h3>La sua richiesta non verrà inserita.<h3><br>Si desidera procedere?");
            //richiesta senza dati non salva
            return UI.EmitSaveRequest("IP");
        }
      
        //check nome duplicato
        if(!this.modeIsDHCP())
        {
            var hostFullName=`${this.formdata['name'].value}.${this.formdata['domain'].value}`;

            var eHostFullName= this.eHost ? `${this.eHost.name}.${this.eHost.domain}` : "";

            //nome del nodo è diverso da quello di edit
            if(eHostFullName!=hostFullName)
            {
                var duplicateName=await this.checkDuplicateName(hostFullName);

                if(duplicateName)
                {
                    return this.setError(this.formdata['name'],"Il nome scelto risulta già registrato.")
                }
            }
        }

        

      
        var duplicateMac=false;

        if(!this.useMacBusy)
        {
            var mac=this.formdata['mac'].value;
            var checkForDuplicate=(this.eHost ? this.eHost.mac!=mac : true);
            
            if(checkForDuplicate)
            {
                
                var duplicateMac=await this.checkDuplicatedMacAddress(mac);
               
                if(duplicateMac)
                {
                    //controlla che il macaddress inserito non sia uno di quelli dell'utente
                    //this.setError(this.$hostmac,"Il mac address risulta già registrato.")
                    var okCb=()=>{this.useMacBusy=true; this.handleSubmit()};
                    var noCb=()=>{this.setError(this.formdata['mac'],"Il mac address risulta già registrato.")};
                    var msg="<b>Il mac address inserito risulta già registrato</b>. <br><br> Si intende utilizzarlo?"
                    //this.showDialog('<h3>Attenzione</h3>Il mac address risulta già registrato. Si intende utilizzarlo?')
                    return this.showDialog('Richiesta conferma',msg,okCb,noCb)
                }
            }

        }
        
        //if(duplicateMac) return;

        this.submitForm();

    
    }

}
