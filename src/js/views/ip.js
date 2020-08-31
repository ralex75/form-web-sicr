const template=`
<div id="dialogPlaceHolder"></div>
<a href="#hostlist"  id="goBack" style="text-decoration:underline;">[GOBACK]</a>
<form>
				<div class="form_sez">
					<div class="form_intest">
					  [HEADER-HOST]
					</div>
				 	<div class="form_riga">
						<div class="form_col">
						  <label for="mac">[MAC]</label><br>
                          <input type="text" name="mac" data-attr="formdata" autocomplete="off" maxlength="17"  placeholder="[MAC]">
                          <small>Error Message</small>		
						</div>
						<div class="form_col">
							<label for="config">[CONFIG]</label>
							<br> 
							<select name="config" data-attr="formdata">
                                <option  value="STATIC">[CONFIG-OPTION-STATIC]</option>
                                <option  value="STATICVM">[CONFIG-OPTION-STATICVM]</option>
								<option selected value="DHCP">[CONFIG-OPTION-DHCP]</option>
							</select>
						</div> 
					</div>
					<div class="form_riga">
						<div class="form_col">
						  <label for="name">[NAME]</label><br>
                          <input type="text" name="name" data-attr="formdata" autocomplete="off" placeholder="[NAME]">
                          <small>Error Message</small>
						</div>
						<div class="form_col">
						  <label for="domain">[DOMAIN]</label><br>
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
                    [HEADER-NOTES]
					</div>
				 	<div class="form_riga">
						<div class="form_col_long">
						  <label for="notes">[NOTES]</label><br>
						  <textarea name="notes" data-attr="formdata" rows="5" value=""></textarea>		
						</div>
					</div>	
				</div>	
				<div class="form_sez">
					<div class="form_pied cbutton">
					  <input type="submit" class="button_m" value="[SEND]" />
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
    .form_col.success input,.form_col.success select{
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

import {Base} from './base.js'
import {Application} from '../app.js'
import {Location} from './location.js'
import {Dialog} from '../components/dialog.js'
import services from '../services.js'
import { Router } from '../router.js'



export class IP extends Base{
  
    //restituisce il template
    getContent(){
        var tpl=template;
        var loc=this.locale();
        for(var k in loc.form)
        {
            tpl=tpl.replace(new RegExp("\\["+`${k.toUpperCase()}`+"\\]","g"),loc.form[k]);
        }
        return tpl;
    }
    

    configMode(){
        return this.formdata['config'].value;
    }

    modeIsDHCP(){
        return this.configMode()=='DHCP';
    }

    //loc è il locale per i messaggi di errore nella lingua corrente
    validateHostName(value)
    {
        var loc=this.locale().errors;
        var err="";
        if(!value.match(/^([0-9A-Za-z_-])+$/))
        {
            err=`${loc.invalid}.`;
        }
   
        return err;
    }

    validateHostMac(value)
    {
        
        
        var err="";
        var loc=this.locale().errors;
        
       
        if(!value.match(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/))
        {
            //err="Il campo non è valido.";
            err=`${loc.invalid}.`;
        }
        else{
            
          
            //controlla che il mac inserito non sia già un nodo dell'utente
            if(this.usermaclist.indexOf(value)>-1)
            {
                var eValue=this.eHost ? this.eHost.mac : "";
                if(value!=eValue)
                {
                    //err="Il mac inserito appartiene ad un altro tuo nodo."
                    err=`${loc.yourmac}.`;
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

    locale(){

        const loc= {"ITA":{"form":{"mac":"Indirizzo Mac","config":"Configurazione","name":"Nome","domain":"Dominio","send":"Invia","notes":"Note",
                               "header-host":"IDENTIFICATIVO NODO","header-notes":"ULTERIORI INFORMAZIONI","goback":"Torna Indietro",
                               "config-option-static":"STATICO","config-option-staticvm":"STATICO - Virtuale","config-option-dhcp":"DHCP"},
                        "errors":{"invalid":"Il campo non è valido","yourmac":"L'indirizzo MAC inserito appartiene ad un altro tuo nodo",
                                  "port-no-set":"La porta non è stata selezionata.","port-busy":"La porta selezionata risulta occupata.",
                                  "no-free-ports":"Non ci sono porte libere selezionabili"}},
                "ENG":{"form":{"mac":"Mac Address","config":"Configuration","name":"Name","domain":"Domain","send":"Send","notes":"Notes",
                                "header-host":"NODE IDENTIFIER","header-notes":"Additional Information","goback":"Go Back",
                                "config-option-static":"STATIC","config-option-staticvm":"STATIC - Virtual","config-option-dhcp":"DHCP"},
                        "errors":{"invalid":"Field is invalid","yourmac":"The MAC address you typed belongs to another node of yours",
                                    "port-no-set":"The port has not been selected.","port-busy":"Selected port is busy.",
                                    "no-free-ports":"No free ports"}}
            }

        return loc[Application.language.current];
    }


    //validazione di base
    async handleSubmit()
    {
        
         //controllo se dati sono cambiati 
         var _dataIsChanged=this.dataIsChanged();

         //dizionario messaggi di errore nella lingua selezionata
         var loc=this.locale().errors
 
         //Mostrare la dialog ?
         if(!_dataIsChanged){
           
 
             var lang=Application.language.current;
             var headerText= lang=="ITA" ? "Richiesta di Conferma" : "Confirmation Request"
             var contentText= lang=="ITA" ? "Attenzione: non ci sono modifiche ai dati. <br> <b>La sua richiesta non verrà inserita.</b><br><br>Si vuole procedere?":
                                        "Warning: no changes in data. <br> <b>Your request will not be submitted.</b><br><br>Do you want to proceed?"
                                        
                                   
 
 
             return this.showDialog(headerText,contentText,()=>{ Router.go("hosts")}, ()=>{});
            
         }
       
       
        Object.keys(this.formdata).forEach( async k=>{
             
             //host mac address
            if(["mac","name","port"].indexOf(k)>-1)
            {
                
                var fieldStatus=this.getFieldStatus(this.formdata[k]);
                if(!fieldStatus.err && fieldStatus.status!='success')
                {
                    //console.log("validate:",k);
                    await this.validate(this.formdata[k]);
                }
            }
        })

       
        //check errori

        var errors=[];
       
        //legge tutti i campi errore che sono stati settati
        this.$form.querySelectorAll("small").forEach(e=>{
            if(e.parentElement.className.indexOf('error')>-1)
            {
                errors.push(e.innerText);
            }
        })

        if(errors.length>0)
        {
            return;
        }

       

        if(!this.useMacBusy)
        {
            var mac=this.formdata['mac'].value;
            var checkForDuplicate=(this.eHost ? this.eHost.mac!=mac : true);
            
            if(checkForDuplicate)
            {
                
                var duplicateMac=await this.checkDuplicatedMacAddress(mac);
               
                if(duplicateMac)
                {
                    var lang=Application.language.current;
                    var errText=lang=="ITA" ? "Il mac address inserito risulta già registrato." : "The MAC address typed is already registered."
                    var question = lang=="ITA" ? "Si intende utilizzarlo comunque?" : "Do you want to use it anyway?"
                    var headerText= lang=="ITA" ? "Richiesta di conferma" : "Confirmation request"
                    //controlla che il macaddress inserito non sia uno di quelli dell'utente
                    //this.setError(this.$hostmac,"Il mac address risulta già registrato.")
                    var okCb=()=>{this.useMacBusy=true; this.submitForm()};
                    var noCb=()=>{this.setError(this.formdata['mac'],errText)};
                    var msg=`<b>${errText}</b>. <br><br>${question}`
                    //this.showDialog('<h3>Attenzione</h3>Il mac address risulta già registrato. Si intende utilizzarlo?')
                    return this.showDialog(headerText,msg,okCb,noCb)
                }
            }

        }
        
      

        this.submitForm();


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

    getFieldStatus(input)
    {
       var parent= input.parentElement;
       const small=parent.querySelector("small")
       var status= parent.className.split(" ")[1] || "";
       return {"status":status,"err":small.innerText};
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

           

        var lang=Application.language.current;

        var html=this.getReport(lang,data.to);

        this.showDialog(`${lang!='ITA' ? 'Confirmation Request' : 'Richiesta di Conferma'}`,html,()=>{
            console.log("Send Form:",data)
            Application.SaveRequest(Application.RequestTypes.IP,data);
            //UI.EmitSaveRequest('IP',data);
        },()=>{});
        //UI.EmitSaveRequest('IP',data);
    }

    getReport(lang,data)
    {
        
        
        var config={"STATIC":"Indirizzo IP fisso",
                    "STATICVM":"Indirizzo IP per macchina virtuale",
                    "DHCP":"Indirizzo IP dinamico"}
        
        if(lang!="ITA")
        {
            config["STATIC"]="Static IP address"
            config["STATICVM"]="Static IP address for virtual machine"
            config["DHCP"]="Dynamic IP address"
        }

        var html=`  <div class="grid">
                    <div>${lang!='ITA' ? 'Configuration':'Configurazione'}:</div><div class="c2">${config[data.config]}</div>
                    <div>${lang!='ITA' ? 'MAC Address' :'Indirizzo MAC'}:</div><div class="c2">${data.mac}</div>`
        
                   
        if(data.config!='DHCP')
          html+=`<div>${lang!='ITA' ? 'Name' : 'Nome'}:</div><div class="c2">${data.name}.${data.domain}</div>`
                    
        
        //var portAlias= this.formdata.port.selectedOptions[0].text           
                   
        html+=`<div>${lang!='ITA' ? 'Port' : 'Porta'}:</div><div class="c2">${data.port}</div>`
        
        if(data.notes)
        {
            html+=`<div>${lang!='ITA' ? 'Notes' : 'Note'}:</div><div class="c2">${data.notes.slice(0,100)+"..."}</div>`
        }

        html+="</div>"
        
        html+=`<h4>${lang!='ITA' ? "Do you want submit the request?" : "Si vuole procedere con l'invio della richiesta?"}</h4>`

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



    async validate(el){

       
        var hname=el.name;
        
        
        var err=""

        if(hname=='mac')
        {
            var value=el.value.trim();
            err=this.validateHostMac(value.toUpperCase());
            this.handleFieldError(el,err);
        }

        if(hname=='name' || hname=='domain')
        {
            
            if(this.modeIsDHCP())
            {
                return this.reset(this.formdata['name']);
            }
            
            var name=this.formdata['name'].value;
            var domain=this.formdata['domain'].value;
            err=this.validateHostName(name);
            if(!err)
            {
                var hostFullName=`${name}.${domain}`;
                err=await this.validateDuplicatedHostName(hostFullName)
            }

            this.handleFieldError(this.formdata['name'],err);
        }

       
        if(hname=='port')
        {
           
            var err=""
           
            
            if(!el.value)
            {
             
                    var loc=this.locale()
                    var err=loc.errors["port-no-set"];
                    if(this.freePorts!=undefined && !this.freePorts)
                    err=`${loc.errors['no-free-ports']}`;
            }
           
            this.handleFieldError(this.formdata['port'],err)
        }
       
        
        
    }
    

     async init(){

        
        var trg=this.target;
        
        var goBack=trg.querySelector("#goBack");
        goBack.style.display = window.location.hash=='#hosts' ? 'inline-block' : 'none';
        goBack.addEventListener('click',ev=>{
         
            ev.preventDefault();
            Router.go("hosts")
            
        })


        this.formdata={};
        this.$form=trg.querySelector("form");

        //istanzia oggetto location
        this.location=new Location(trg.querySelector("#location"));
        
        trg.querySelectorAll("[data-attr='formdata']").forEach(el=>{
           
            this.formdata[el.name]=el;
            if(["mac","name","port"].indexOf(el.name)>-1)
            {
                el.addEventListener('change',async ev=> await this.validate(ev.target))
            }
        })

        this.formdata["mac"].addEventListener("input",ev=>{
            ev.target.value=ev.target.value.replace("-",":")
        })

        //lista di nodi gestiti dall'utente per controllo su nodo di cui è proprietario
        this.usermaclist=await this.getHosts();
       
        //il nodo di edit
        this.eHost=this.args ? this.args.eHost : null;

    
        //setta i valori di default
        if(this.eHost)
        {
            //imposta edificio piano stanza porta
            await this.location.setDefault(this.eHost.location);
            for(var k in this.formdata)
            {
                this.formdata[k].value=(this.eHost[k] || "")
            }
        }

        //gestione di nodo occupato
        this.useMacBusy=false;
    

        //questo messaggio viene inviato dal componente Location per informare del numero di porte
        //libere nella configurazione selezionata (DHCP,Static o Static VM)
        this.$form.addEventListener("freePorts",ev=>{
            
           var loc=this.locale();
            //ritorna il numero di porte libere selezionabili
           
            this.freePorts=ev.detail;
          
            if(this.freePorts)
            {
                this.reset(this.formdata.port);
            }
            else{
                //this.setError(this.formdata.port,`${loc.errors['no-free-ports']}`)
                this.validate(this.formdata['port']);
            }
            
            //se non ci sono settiamo errore
            /*if(!this.freePorts)
            {
                this.selectedPort=null;
                this.setError(this.formdata.port,`${loc.errors['no-free-ports']}`)
            }else{
                this.reset(this.formdata.port);
            }*/

        })



        //cambio configurazione
        this.formdata['config'].addEventListener('change',ev=>{
           

            var disabled=this.modeIsDHCP();
            this.formdata['name'].disabled=disabled;
            this.formdata['domain'].disabled=disabled;
            if(disabled)
            {
               this.reset(this.formdata['name']);
            }

            
            var mac= this.eHost ? this.eHost.mac : null;

            //aggiorna la lista delle porte libere in base alla configurazione scelta
            this.location.updateFreePorts({"config":ev.target.value,"mac":mac})
            //this.refreshFreePorts();
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

    /*
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

    }*/

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


    async validateDuplicatedHostName(hostFullName)
    {
       
        
        var err=""
        
        if(!this.formdata['name'].value) return err;

        var hostFullName=`${this.formdata['name'].value}.${this.formdata['domain'].value}`;

        var eHostFullName= this.eHost ? `${this.eHost.name}.${this.eHost.domain}` : "";

        //nome del nodo è diverso da quello di edit
        if(eHostFullName!=hostFullName)
        {
            var duplicateName=await this.checkDuplicateName(hostFullName);
            var lang=Application.language.current;
            if(duplicateName)
            {
                err= (lang=="ITA") ? "Il nome inserito risulta già registrato." : "The name typed is already registered."
            }
            
        }

        return err;
        
    }


    

}
