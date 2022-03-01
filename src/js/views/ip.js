const template=`
<div id="dialogPlaceHolder"></div>

<form id="ipform">
                <div class="form_sez" style="padding:20px 0 10px 0;" id="isUpdate">
                    
                </div>
				<div class="form_sez">
					<div class="form_intest">
					  [HEADER-HOST]
					</div>
				 	<div class="form_riga">
						<div class="form_col">
						  <label for="mac">[MAC]</label>
                    	</div>
						<div class="form_col">
						   <input type="text" name="mac" data-attr="formdata" autocomplete="off" maxlength="17"  placeholder="[MAC]">
                          <small></small>		
						</div>
					</div>
                    <div class="form_riga">
                        <div class="form_col">
                            <label for="config">[CONFIG]</label>
                        </div>
                        <div class="form_col">
                            <select id="config" name="config" data-attr="formdata">
                                <option  value="STATIC">[CONFIG-OPTION-STATIC]</option>
                                <option  value="STATICVM">[CONFIG-OPTION-STATICVM]</option>
                                <option selected value="DHCP">[CONFIG-OPTION-DHCP]</option>
                            </select>
                        </div> 
                    </div>
					<div class="form_riga">
						<div class="form_col">
						  <label for="name">[NAME]</label>
                		</div>
						<div class="form_col">
                            <input type="text" name="name" data-attr="formdata" autocomplete="off" placeholder="[NAME]">
                            <small></small>
            			</div>
                    </div> 
                    <div class="form_riga">
						<div class="form_col">
                            <label for="domain">[DOMAIN]</label>
						</div>
						<div class="form_col">
						  <select id="domain" name="domain" data-attr="formdata">
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
						  <textarea name="notes" id="notes" data-attr="formdata" rows="5" value=""></textarea>
                          <small></small>		
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

#ipform div.form_col:first-child{
    padding-top:6px;
    width:250px;
    
}


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
    

    .form_col input.success{
        border:1px solid green;
        border-left:5px solid green
    }

    .form_col input.pendings{
        border:1px solid orange;
        border-left:5px solid orange;
    }
    
    .form_col input.error{
        border:1px solid red;
        border-left:5px solid red;
        color:#000;
    }

    .form_col select.success{
        border:1px solid green;
        border-left:5px solid green;
    }

    .form_col select.error{
        border:1px solid red;
        border-left:5px solid red;
        color:#000;
    }

    small{
        color:#EE0000;
    }



    .form_col input,.form_col select{
        border:1px solid #DDD;
        display:block;
        padding:10px;
        width:70%;
        border-radius:0;
        outline:none;
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
import {Dialog, DialogWrapper} from '../components/dialog.js'
import services from '../services.js'
import { Application } from '../app'
import loc from '../locale/ip.loc'

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


export class IP extends Abstract{
  
    timeOutID={"mac":null,"name":null}
    validationSet=new Set()
    lastMacDuplicateResult={}
    lastNameDuplicateResult={}
    
    constructor(target,args){
        super(target,args)
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

        return loc[this.currentLanguage()];
    }

   
    validateField=async (input)=>{
   
      

        //check mac address duplicato
        const checkDuplicatedMacAddress=(input)=>{
            let value=input.value
            this.validationSet.add('mac')
            let loc=this.locale();
            this.showWaiting(input,loc.errors["hmac-pending"])
            return new Promise(resolve=>{
                this.timeOutID['mac']=setTimeout(()=>{
                        services.net.exists(value).then(resp=>{
                            resolve(resp.data)
                        }).catch(err=>{
                            resolve(true)
                        })
                    },500)
            })
        }
    
        //check hostname duplicato
        const checkDuplicateHostName=(input,value)=>{
           
            this.validationSet.add('name')
            let loc=this.locale();
            this.showWaiting(input,loc.errors["hname-pending"])
            return new Promise(resolve=>{
              
                this.timeOutID['name']=setTimeout(()=>{
                    services.net.lookup(value).then(resp=>{
                        resolve(resp.data.length>0);
                    }).catch(err=>{
                        resolve(false)
                    })
                },500)
            });
        }

    

        const isMacAddressVM=(value)=>{
            
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

        
    
        const validationRules={
    
            "mac":async (value)=> {
                clearTimeout(this.timeOutID["mac"])
                if(!value) return "empty"
                if(!value.match(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/)) return "invalid"
                if(isMacAddressVM(value) && this.hostConfig.value!='STATICVM') return 'invalid-mac-config'
                if(!isMacAddressVM(value) && this.hostConfig.value=='STATICVM') return 'invalid-mac-config'
                let isDuplicated= value in this.lastMacDuplicateResult ? this.lastMacDuplicateResult[value] : await checkDuplicatedMacAddress(input)
                this.lastMacDuplicateResult={}
                this.lastMacDuplicateResult[value]=isDuplicated
                if (!isDuplicated) {return null}
                if(this.eHost && this.eHost.mac.toLowerCase()==value.toLowerCase()) return null;
                return 'hmac-duplicated'
            },
            
            "name":async (value)=>{
                
                clearTimeout(this.timeOutID["name"])
                if(!value) return "empty"
                if(value.length<4) return 'invalid'
                if(!value.match(/^([a-zA-Z0-9]+)(-[a-zA-Z0-9]+)*$/)) return 'invalid'
                let name=value;
                let domain=this.hostDomain.value;
                
                let hostName=`${name}.${domain}`
                let isDuplicated= hostName in this.lastNameDuplicateResult ? this.lastNameDuplicateResult[hostName] : await checkDuplicateHostName(input,hostName)
                this.lastNameDuplicateResult={}
                this.lastNameDuplicateResult[hostName]=isDuplicated

                if (!isDuplicated) return null
                
                if(this.eHost) {
                    let curHostName=this.eHost.fqdn()
                    if(curHostName.toLowerCase()==hostName.toLowerCase()) return null
                }
                
                return 'hname-duplicated'
                
            },

            "notes":(value)=>{
                if(value && !value.match(/^[a-zA-Z0-9À-ÿ-,.:;!\s]+$/)) return 'invalid'
                return null
            }
            
        }

        let {name,value}=input;
        let loc=this.locale();
        let res=await validationRules[name](value)
        res ? this.validationSet.add(name) : this.validationSet.delete(name);
        /*console.log("res:",res)
        if(res && name=='mac' && res!='hmac-duplicated'){
            this.lastMacDuplicateResult={}
        }*/
        
        return loc.errors[res] || null
    }


    showWaiting =(input,message)=>{
       
        input.className="pendings"
        input.nextElementSibling.innerText=message
    }
    
    showResult=(input,message)=>{
       
        input.className = message ? 'error' : 'success';
        input.nextElementSibling.innerText=message
        
    }
    
    cleanResult=(input)=>{
        this.validationSet.delete(input.name)
        input.className = "";
        input.nextElementSibling.innerText=""
        
    }

    selectedHostName=()=>{
    
        return this.hostName.value+"."+this.hostDomain.value
    }

    async mounted(){

        
        const valueReplace=(input)=>{
             
            const macReplace=(value)=>{
                value=value.replace("-",":").toUpperCase()
                if(value[value.length-1]==":" && value[value.length-2]==value[value.length-1])
                {
                    value=value.substring(0,value.length-1);
                }
                return value;
            }

            const replace={
                "mac":macReplace
            }

            let {name,value}=input

            return replace[name] ? replace[name](value):value;

        }

        const validateFormSelect=async function(ev){
            
            
            let {tagName,name,value}=ev.target
            
            if(tagName!='SELECT') return;
            
            
            if(["build","floor","room","port"].some(e=>e.indexOf(name)>-1))
            {
               this.cleanResult(this.hostLoc[name])
               this.showResult(this.hostLoc[name],null)
               return;
            }

            const actions={

                "config":async ()=>{
                        this.hostName.disabled = value=='DHCP'
                        this.hostDomain.disabled=this.hostName.disabled
                        
                        let mac=this.eHost ? this.eHost.mac : this.hostMac.value
                        this.location.updateFreePorts({"config":value,"mac":mac})
                         
                        
                        for(let e of ["mac","name"]){
                            let el=this.form[e];
                            
                            if(el.disabled) {
                                
                                this.cleanResult(el) 
                                continue;
                            }
                             
                            
                            this.validateField(el).then(res=>{
                                this.showResult(el,res)
                            })
                                                  
                        }

                },

                "domain":async ()=>{
                    this.cleanResult(this.hostName)
                    let res=await this.validateField(this.hostName)
                    this.showResult(this.hostName,res)
                },
             

            }

            return await actions[name]()
          
        }
       

        const validateFormInput=async function(ev){
            
            let target=ev.target
            let tag=target.tagName
            
            /*if(ev.inputType=='insertFromPaste') 
            {
                target.value=""; return
            }*/

            if(tag!='INPUT' && tag!='TEXTAREA') return;
                       
            target.value=valueReplace(target)
            let res=await this.validateField(target)
            this.showResult(target,res)

           
        }

        const validateForm=async function(ev){
           
            if(ev) { ev.preventDefault() }
            
            let elements=Array.from(document.querySelectorAll("input[type='text']"))
            let loc=this.locale()
            for(let e of elements)
            {
                if(!e.value && !e.disabled)
                {
                    this.validationSet.add(e.name)
                    this.showResult(e,loc.errors["empty"])
                }
            }
          
            for(var k in this.hostLoc){
               
                if(this.hostLoc[k].disabled || this.hostLoc[k].value) continue;
               
                this.validationSet.add(k)
                this.showResult(this.hostLoc[k],loc.errors["selection-required"])
            }

            let formIsValid=this.validationSet.size==0


            if(!formIsValid) return;
            
            submitForm()
          
        }


        const submitForm=()=>{
       
            let curr={}
               
            curr['mac']=this.hostMac.value
            curr['config']=this.hostConfig.value
            curr['port']=this.hostLoc.port.value
            curr['notes']=this.hostNotes.value

            
            if(curr['config']!='DHCP')
            {
                curr['name']=this.hostName.value
                curr['domain']=this.hostDomain.value
            }
                     
            let from=null;
            let action='create';
    
            if(this.eHost)
            {
                let dataIsChanged=false;
                for(let k in curr){
                    
                    if(k=='notes') continue;
                    
                    if(curr[k].toLowerCase()!=this.eHost[k].toLowerCase())
                    {
                        dataIsChanged=true;
                    }
                }

                
                if(!dataIsChanged){
                    let lang=this.currentLanguage();
                    let headerText  = lang=="ITA" ? "Richiesta di Conferma" : "Confirmation Request"
                    let contentText = lang=="ITA" ? "Attenzione: non ci sono state modifiche ai dati. <br> <b>La sua richiesta non verrà inserita.</b><br><br>Si vuole procedere?":
                                               "Warning: no changes in data. <br> <b>Your request will not be submitted.</b><br><br>Do you want to proceed?"
                                               
               
                    return this.dlg.showDialog(headerText,contentText,()=>{ Application.navigateTo("hosts")}, ()=>{});
                }

                from=Object.assign({},this.eHost);
                action='update';
                delete from['fqdn'];
                delete from['location'];
                delete from['port_alias'];
            }
    
           
            let data={
                    from:from,
                    to:curr,
                    action:action
                }
    
            if(data.to){
                if(data.to["config"]!='STATIC'){
                    delete data.to["name"]
                    delete data.to["domain"]
                }
            }
           
            
            let lang=this.currentLanguage();
    
            let html=new Report("IP",lang,data.to).getReport()
    
            this.dlg.showDialog(`${lang!='ITA' ? 'Confirmation Request' : 'Richiesta di Conferma'}`,html,()=>{
               
                this.SaveRequest(Application.requestTypes.IP,data);
            },()=>{this.useMacBusy=false});
          
        }

        const locationFreePorts=function(ev){
           
         
            let freePorts=ev.detail
            let selPort=this.hostLoc["port"];
            this.cleanResult(selPort)
            selPort.disabled=!freePorts
            if(selPort.disabled)
            {
                this.validationSet.add("port")
                this.showResult(this.hostLoc["port"],this.locale().errors["no-free-ports"])
            }
            else{
                if(selPort.options[selPort.selectedIndex].disabled)
                {
                    this.validationSet.add("port")
                    this.showResult(this.hostLoc["port"],this.locale().errors["bad-port"])
                }
            }

            if(!this.validationSet.has('port') && selPort.value!=""){
                this.showResult(selPort,"")
            }
            
        }

        this.dlg = new DialogWrapper(this.target.querySelector("#dialogPlaceHolder"))

        let loc=this.locale();

         //il nodo di edit
        this.eHost=this.args ? Object.assign({},this.args.eHost) : null;
        
        //form
        this.form=document.querySelector("form")

        //istanzia oggetto location
        this.location=new Location(this.form.querySelector("#location"),{"config":'DHCP',"mac":""});


        this.hostConfig=document.querySelector("#config");
        this.hostMac=document.querySelector("input[name='mac']");
        this.hostName=document.querySelector("input[name='name']");
        this.hostDomain=document.querySelector("#domain");
      
        this.hostLoc={
            "build":document.querySelector("#build"),
            "floor":document.querySelector("#floor"),
            "room":document.querySelector("#room"),
            "port":document.querySelector("#port")
        }

        this.hostNotes=document.querySelector("#notes");
        this.hostName.disabled = this.hostConfig.value=='DHCP'
        this.hostDomain.disabled=this.hostName.disabled

        //eventi del form
        this.form.addEventListener("input",validateFormInput.bind(this))
        this.form.addEventListener("change",validateFormSelect.bind(this))
        this.form.addEventListener("submit",validateForm.bind(this))
        //questo messaggio viene inviato dal componente Location per informare del numero di porte
        //libere nella configurazione selezionata (DHCP,Static o Static VM)
        this.form.addEventListener("freePorts",locationFreePorts.bind(this))
       
        //se si tratta di modifica di un nodo setta i valori di default
        if(!this.eHost) return;
        
        //metodo ritorno hostname
        this.eHost.fqdn=function(){ return  this.name ? `${this.name}.${this.domain}` : 'DHCP' }
    
        let ctrl=document.querySelector("#isUpdate")
        let name= `${this.eHost.fqdn()} - ${this.eHost.mac}`;
        
        ctrl.innerHTML=`<div class="divisione_title">${loc['form']["host-edit-info"]}:<br><span style="padding:5px">-- ${name} --</span></div>`
        
        //imposta i dati del nodo nel form
        for(let e of Array.from(this.form.elements))
        {
            if(!e.name || ['build','floor','room','port'].some(k=>k==e.id)) continue
           
            this.form[e.name].value=(this.eHost[e.name] || "")
            //this.currentValue[e.name]=this.form[e.name].value
        }

        this.hostName.disabled=this.hostConfig.value=='DHCP';
        this.hostDomain.disabled=this.hostName.disabled;

        //imposta edificio piano stanza porta
        let merge=Object.assign({},this.eHost.location,{"config":this.eHost.config,"mac":this.eHost.mac})
        
        await this.location.setDefault(merge);
        
        
    }

    

   
}

const toFQDN=({name,domain})=>{
    return  name ? `${name}.${domain}` : 'DHCP'
}