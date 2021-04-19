const template=`
<div id="dialogPlaceHolder"></div>

<form>
                <div class="form_sez" style="padding:20px 0 10px 0;" id="isUpdate">
                    
                </div>
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

    .form_col.untouch small{
        visibility:visible;
        color:#AA0;
    }

    .form_col.pending small{
        visibility:visible;
        color:#AAAA00;
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

import Abstract from './abstract'
import {Location} from '../components/location.js'
import {Dialog} from '../components/dialog.js'
import services from '../services.js'
import { Application } from '../app'


class Report {

    constructor(type,lang,data)
    {
        this.lang=lang;
        this.type=type;
        this.data=data;
    }

    getReport()
    {
        switch(this.type)
        {
            case "IP":
                return this.getReportIP();
            default:
                throw Error("No report found")
        }
    }

    getReportIP()
    {
        let lang=this.lang;
        let data=this.data;

        
        var config={"STATIC":"Indirizzo IP fisso",
                    "STATICVM":"Indirizzo IP per macchina virtuale",
                    "DHCP":"Indirizzo IP dinamico (DHCP)"}
        
        if(lang!="ITA")
        {
            config["STATIC"]="Static IP address"
            config["STATICVM"]="Static IP address for virtual machine"
            config["DHCP"]="Dynamic IP address (DHCP)"
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
}

class StatusMessage{

    

    setStatus(target,status,msg="")
    {
        
        var parent= target.parentElement;
        const small=parent.querySelector("small")
        small.innerText=msg;
        parent.className=`form_col ${status}`;
       
    }

    setSuccess(target,msg)
    {
       this.setStatus(target,'success',msg)
    }

    setError(target,msg)
    {
       this.setStatus(target,'error',msg)
    }

    setPending(target,msg)
    {
       this.setStatus(target,'pending',msg)
    }

    setPristine(target,msg)
    {
      
        this.setStatus(target,'pristine',msg)
    }
   

}

class FormValidator {
    
    constructor(fields,errorsMsg)
    {
        this.errorsMsg=errorsMsg;
        this.fields=fields;
        this.statusMessage=new StatusMessage();
        this.initialize()

    }

    initialize(){
        let scope=this;
        this.fields.forEach(k=>{
          
            let el=document.querySelector(`[name="${k}"]`)
            scope.statusMessage.setPristine(el)
        })
    }

   

    validateMacAddress(value)
    {
        
        var err=""

        if(!value.toUpperCase().match(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/))
        {
            err='invalid';
        }
       
        return err;

    }

    

    validateHostName(value){
       
            
        var err="";
        
        if(value.length<2)
        {
            err='invalid'
        }

        //match A3A, A-3-A, 4B4
        if(!err && !value.match(/^([a-zA-Z0-9]+)(-[a-zA-Z0-9]+)*$/))
        {
            err='invalid';
        }
    
        return err;
    
    }

    checkDuplicatedMacAddress(mac){
        return new Promise(resolve=>{
            //check mac address duplicato
            setTimeout(()=>{
                services.net.exists(mac).then(resp=>{
                    resolve(resp.data)
                }).catch(err=>{
                    resolve(true)
                })
            },500)
        })
    }

    


    checkDuplicateHostName(val){
        return new Promise(resolve=>{
            setTimeout(()=>{
                services.net.lookup(val).then(resp=>{
                    resolve(resp.data.length>0);
                }).catch(err=>{
                    resolve(false)
                })
            },500)
        });
    }

    validate(target){

        
        let {name,value}=target;
        let err=""

        
        if(value=="")
        {
            if(name=="port")
            {
                err="port-no-set"
            }
            else
                err="invalid";
        }
      
        else{

            if(name=='mac')
            {
                err=this.validateMacAddress(value.trim());
            }

            if(name=='name')
            {
                err=this.validateHostName(value.trim());
            }
        }

        return err;
        
    }

   

    validateAll()
    {
        
        
        let scope=this;
       
        document.querySelectorAll(".pristine > input:not(:disabled),.pristine > select").forEach(el=>{
           
           
            let err=scope.validate(el)

            if(err)
            {
                let _err=this.errorsMsg[err] || err || ""
                scope.statusMessage.setError(el,_err)
            }
            else{
                scope.statusMessage.setSuccess(el)
            }

        })
     
        
        let pendings= document.querySelectorAll(".pending").length;
        let errors  = document.querySelectorAll(".error").length;

        return pendings==0 && errors==0;

    }

    
}

export class IP extends Abstract{
  
    constructor(target,args){
      
        super(target,args)
        this.statusMessage=new StatusMessage();
        this.needValidation={}
       
    }

    isMacAddressVM(value)
    {
        let isVM=false;
        let vmRangeAddr=[
                        {"from":"00:16:3E:00:00:00","to":"00:16:3E:FF:FF:FF"},
                        {"from":"00:1D:D8:B7:1C:00","to":"00:1D:D8:F4:1F:FF"},
                        {"from":"00:03:FF:00:00:00","to":"00:03:FF:FF:FF:FF"},
                        {"from":"00:18:51:00:00:00","to":"00:18:51:FF:FF:FF"},
                        {"from":"58:9C:FC:00:00:00","to":"58:9C:FC:FF:FF:FF"},
                        {"from":"50:6B:8D:00:00:00","to":"50:6B:8D:FF:FF:FF"},
                        {"from":"54:52:00:00:00:00","to":"54:52:FF:FF:FF:FF"},
                        {"from":"96:00:00:00:00:00","to":"96:00:FF:FF:FF:FF"}
                    ]
        for(var k=0;k<vmRangeAddr.length;k++)
        {
            let {from,to}=vmRangeAddr[k];
            if(value>=from && value<=to)
            {
                isVM=true;
            }
        }

        return isVM;
    }

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
    

    locale(){

        const loc= {"ITA":{"form":{"mac":"Indirizzo Mac","config":"Configurazione","name":"Nome","domain":"Dominio","send":"Invia","notes":"Note",
                               "header-host":"IDENTIFICATIVO NODO","header-notes":"ULTERIORI INFORMAZIONI","goback":"Torna Indietro",
                               "host-edit-info":"Richiesta di modifica dei dati del nodo",
                               "config-option-static":"STATICO","config-option-staticvm":"STATICO - Virtuale","config-option-dhcp":"DHCP"},
                        "errors":{"invalid":"Il campo non è valido","is-your-mac":"L'indirizzo MAC inserito appartiene ad un altro tuo nodo",
                                  "port-no-set":"La porta non è stata selezionata.","port-busy":"La porta selezionata risulta occupata.",
                                  "no-free-ports":"Non ci sono porte libere selezionabili nella configurazione scelta",
                                  "bad-port":"La porta selezionata non è utilizzabile nella configurazione scelta.",
                                  "hname-duplicated":"Il nome inserito risulta già registrato.",
                                  "hmac-duplicated":"Il mac address inserito risulta già registrato.",
                                  "pending-mac":"Verifica che il mac address inserito non sia già in uso...",
                                  "pending-name":"Verifica che il nome inserito non sia già in uso...",
                                  "invalid-mac-config":"Il mac address inserito non è conforme con la configurazione selezionata."
                                  }},
                "ENG":{"form":{"mac":"Mac Address","config":"Configuration","name":"Name","domain":"Domain","send":"Send","notes":"Notes",
                                "host-edit-info":"Edit request for node",
                                "header-host":"NODE IDENTIFIER","header-notes":"Additional Information","goback":"Go Back",
                                "config-option-static":"STATIC","config-option-staticvm":"STATIC - Virtual","config-option-dhcp":"DHCP"},
                        "errors":{"invalid":"Field is invalid","is-your-mac":"The MAC address you typed belongs to another node of yours.",
                                    "port-no-set":"The port has not been selected.","port-busy":"Selected port is busy.",
                                    "no-free-ports":"No free ports are available for the selected configuration.",
                                    "bad-port":"The selected port is not available for the selected configuration.",
                                    "hname-duplicated":"The typed host name is already registered.",
                                    "hmac-duplicated":"The typed mac adress is already registered.",
                                    "pending-mac":"Checking the typed mac address is not yet in use...",
                                    "pending-name":"Checking the the typed host name is not yet in use...",
                                    "invalid-mac-config":"The typed mac address is not compliant with the selected configuration."}}
            }

        return loc[this.currentLanguage()];
    }


    
    
    submit(ev){
       
        ev.preventDefault();
      
        let formIsValid=this.validator.validateAll();
        
        if(!formIsValid) return;

        let requiredFields=["mac","port"];

        if(this.formdata["config"]!='DHCP')
        {
            requiredFields.push("name")
        }
       
        requiredFields.forEach(k=>{
            if(this.formdata[k]=="")
            {
                throw Error("FORM ERROR")
            }
        });

        if(this.dataIsChanged())
        {
            this.submitForm();
        }
        else{
            
       
            var lang=this.currentLanguage();
            var headerText= lang=="ITA" ? "Richiesta di Conferma" : "Confirmation Request"
            var contentText= lang=="ITA" ? "Attenzione: non ci sono state modifiche ai dati. <br> <b>La sua richiesta non verrà inserita.</b><br><br>Si vuole procedere?":
                                       "Warning: no changes in data. <br> <b>Your request will not be submitted.</b><br><br>Do you want to proceed?"
                                       
       
            this.showDialog(headerText,contentText,()=>{ Application.navigateTo("hosts")}, ()=>{});
        
        }
    }


    

    currentLanguage()
    {
        return Application.language.current
    }


    submitForm(){
       
        var curr={}

        for(var k in this.formdata)
        {
            curr[k]=this.formdata[k].value.trim();
        }

        //curr.useMacBusy=this.useMacBusy;

        if(this.formdata['config'].value=='DHCP')
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

       

        var lang=this.currentLanguage();

        var html=new Report("IP",lang,data.to).getReport()

        this.showDialog(`${lang!='ITA' ? 'Confirmation Request' : 'Richiesta di Conferma'}`,html,()=>{
            //console.log("Send Form:",data)
            this.SaveRequest(Application.requestTypes.IP,data);
           
        },()=>{this.useMacBusy=false});
      
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

    

     async mounted(){

               
        this.formdata={}

        this.form=document.querySelector("form")

        //istanzia oggetto location
        this.location=new Location(this.form.querySelector("#location"),{"config":'DHCP',"mac":""});

        let scope=this;
        let loc=this.locale();
        
        
        this.form.querySelectorAll("[data-attr='formdata']").forEach(el=>{
            scope.formdata[el.name]=el;
        })


        this.formdata["mac"].addEventListener("input",ev=>scope.handleMacInput(ev.target))


        this.form.addEventListener("change",ev=>scope.handleElementDataChange(ev.target))

        /*this.form.addEventListener("input",async ev=>{
            ev.preventDefault();
            let isValid=scope.validator.validateAll()
            document.querySelector("input[type='submit']").style.opacity= isValid ? "1" : "0.5"
        })*/


        this.form.addEventListener("submit",ev=>scope.submit(ev))

        //questo messaggio viene inviato dal componente Location per informare del numero di porte
        //libere nella configurazione selezionata (DHCP,Static o Static VM)
        this.form.addEventListener("freePorts",ev=>scope.handleLocationFreePorts(ev.detail))

        //lista di nodi gestiti dall'utente per controllo su nodo di cui è proprietario
        this.usermaclist=await this.getHosts();
       
        //il nodo di edit
        this.eHost=this.args ? this.args.eHost : null;

    
        //setta i valori di default
        if(this.eHost)
        {
            var locForm=loc["form"];
            
            let ctrl=document.querySelector("#isUpdate")
            let name= this.eHost.name ? this.eHost.name+"."+this.eHost.domain : 'DHCP';
            name+=" - "+this.eHost.mac;
            ctrl.innerHTML=`<div class="divisione_title">${locForm["host-edit-info"]}:<br><span style="padding:5px">-- ${name} --</span></div>`
            
            //imposta edificio piano stanza porta
            let merge=Object.assign({},this.eHost.location,{"config":this.eHost.config,"mac":this.eHost.mac})
            await this.location.setDefault(merge);

            //imposta i dati del nodo nel form
            for(var k in this.formdata)
            {
                this.formdata[k].value=(this.eHost[k] || "")
                
            }
            
        }


        this.enableDisableControls(['name','domain'],this.formdata['config'].value=='DHCP')

        this.validator=new FormValidator(["mac","name","port"],loc.errors);
        
    }

    handleMacInput(target){

            let value=target.value.replace("-",":").toUpperCase()
            if(value[value.length-1]==":" && value[value.length-2]==value[value.length-1])
            {
                value=value.substring(0,value.length-1);
            }
            target.value=value;
        
    }

    async handleElementDataChange(target){
         
        var name=target.name;
            
        

        if(name=='mac')
        {
            this.validate(target)
        }
        
        if(name=='name' || name=='domain')
        {
            this.validate(this.formdata["name"]);
        }


        if(name=='config'){
            this.configIsChanged()
        }


        if(["build","floor"].some(k=>k==name))
        {
            this.statusMessage.setPristine(this.formdata["port"])
        }
       

        if(name=='port')
        {
            this.validate(this.formdata["port"])
        }
    
    }


    //metodo di gestione del messaggio freeports inviato dal componente Location per informare del numero di porte 
    //libere nella configurazione selezionata (DHCP,Static o Static VM)
    handleLocationFreePorts(ports){
         
       
        let loc=this.locale();
        let target=this.formdata['port']

        //ritorna il numero di porte libere selezionabili
        this.freePorts=ports;
       
        this.statusMessage.setPristine(target)

        if(!this.freePorts)
        {
            this.statusMessage.setError(target,loc.errors["no-free-ports"]);
        }
        else{
           this.checkPortSelection();
        }
    
    }

    isMacNotCompliantWithSelectedConfig(){
        let isVM=this.isMacAddressVM(this.formdata["mac"].value)
        let configIsVM=this.formdata["config"].value=='STATICVM';

        return (configIsVM && !isVM)||(!configIsVM && isVM)
    }


    async validate(target)
    {
        
            
        var err=this.validator.validate(target);
        var loc=this.locale().errors;

       
        if(!err)
        {
            if(target.name=='name')
            {
                let eValue=this.eHost ? `${this.eHost["name"]}.${this.eHost['domain']}` : ""
                let value=`${target.value}.${this.formdata['domain'].value}`
               
                if(eValue.toLowerCase()!=value.toLowerCase())
                {
                    err=await this.validateDuplicated(target,value,['name','domain','config'],this.validator.checkDuplicateHostName)
                }
               
            }

            if(target.name=='mac')
            {
                let eValue=this.eHost ? `${this.eHost["mac"]}` : ""
                let value=target.value;
                
               
                if(eValue!=value)
                {
                    
                    if(this.usermaclist && this.usermaclist.indexOf(value)>-1)
                    {
                        err=loc["is-your-mac"]
                        console.log("Err:",err)
                    }
                    else if(this.isMacNotCompliantWithSelectedConfig())
                    {
                        err=loc["invalid-mac-config"]
                    }
                    else{
                        err=await this.validateDuplicated(target,value,['mac'],this.validator.checkDuplicatedMacAddress)
                    }

                }
                else
                {
                    if(this.isMacNotCompliantWithSelectedConfig())
                    {
                        err=loc["invalid-mac-config"]
                    }
                }
                
              
            }

            if(target.name=='port')
            {
               
                var err=""
                               
                if(!target.value)
                {
                    if(this.freePorts!=undefined && !this.freePorts)
                    err=`${loc['no-free-ports']}`;
                }
               
               
            }

          
        }

        this.needValidation[target.name]=err!="";

        if(err)
        {
         
           
            if(target.name=='name' && this.formdata['config'].value=='DHCP') return;
           
            err= loc[err.toLowerCase()] || err || ""
            this.statusMessage.setError(target,err)
            

        }
        else{
          
            this.statusMessage.setSuccess(target);
      
        }

        
        return err;

    }

    
    async validateDuplicated(target,value,fieldsToDisable,validatorCallback){

        let loc=this.locale().errors;  
        this.statusMessage.setPending(target,loc[`pending-${target.name}`]);
       
        let exists=false;
        let err=""

        try{
            
            this.enableDisableControls(fieldsToDisable,true)
            exists=await validatorCallback(value)

        }
        catch(exc)
        {
            console.log(exc)
            throw exc;   
        }
        finally{
            this.enableDisableControls(fieldsToDisable,false)
        }
       

        if(exists)
        {
            
            err=`h${target.name}-duplicated`
          
        }

        return err
        
        
    }
    

    
    enableDisableControls(fields,disable)
    {
        let scope=this;
        fields.forEach(e=>scope.formdata[e].disabled=disable)
    }

    

    //gestione cambio configurazione del nodo DHCP-STATICO-STATICO VM
    configIsChanged()
    {
       
        var value=this.formdata['config'].value
        this.formdata["name"].disabled= value=='DHCP'
        this.formdata["domain"].disabled= value=='DHCP'

        if(value=='DHCP')
        {
            this.formdata['name'].value=""
            this.statusMessage.setPristine(this.formdata['name']);
        }
        else
        {
          
            if (this.eHost && this.eHost.config==value)
            {
                
                this.formdata['name'].value=this.eHost["name"]
                this.formdata['domain'].value=this.eHost["domain"]
                this.statusMessage.setSuccess(this.formdata['name'])
            }
        }
       


        if(this.formdata['mac'].value && this.isMacNotCompliantWithSelectedConfig())
        {
            this.statusMessage.setError(this.formdata['mac'],this.locale().errors["invalid-mac-config"])
        }
        else{

            var need=this.needValidation['mac'] 
            if(need==null || need)
                this.validate(this.formdata['mac'])
            else this.statusMessage.setSuccess(this.formdata['mac'])

        }
       
       
        //this.statusMessage.setPristine(this.formdata['mac'])
        
        //aggiorna la lista delle porte libere in base alla configurazione scelta
        this.location.updateFreePorts({"config":value,"mac":this.formdata["mac"].value})
       
        this.checkPortSelection();
      
    }

    checkPortSelection()
    {
        
        let select=this.formdata["port"];
        let loc=this.locale().errors;
                
        //se la porta è disabilita allora NON è utilizzabile
        if(select.options[select.selectedIndex].disabled && select.value!="")
        {
            this.statusMessage.setError(this.formdata["port"],loc['bad-port'])
        }
        else{
            if(select.value!="")
            this.statusMessage.setSuccess(this.formdata["port"])
        }
       
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


}
