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
						  <label for="mac">[MAC]</label><br>
                          <input type="text" name="mac" data-attr="formdata" autocomplete="off" maxlength="17"  placeholder="[MAC]">
                          <small></small>		
						</div>
						<div class="form_col">
							<label for="config">[CONFIG]</label>
							<br> 
							<select id="config" name="config" data-attr="formdata">
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
                          <small></small>
						</div>
						<div class="form_col">
						  <label for="domain">[DOMAIN]</label><br>
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
    

    .form_col input.success{
        border:1px solid green;
        border-left:5px solid green
    }

    .form_col input.error{
        border:1px solid red;
        border-left:5px solid red
    }

    .form_col select.success{
        border:1px solid green;
    }

    .form_col select.error{
        border:1px solid red;
    }

    small{
        color:#EE0000;
    }


    .form_col.pending small{
        visibility:visible;
        color:#AAAA00;
    }

    .form_col input,.form_col select{
        border:1px solid #F0F0F0;
        display:block;
        padding:10px;
        width:70%;
        border-radius:0;
        outline:none;
    }
    /*.form_col input[type="text"]:focus{
        outline:1px solid #CCC
    }
    

    .form_col input[type="text"].error:focus{
        outline:none;
    }
   
    .form_col input[type="text"].success:focus{
        outline:1px solid green;
    }*/

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

export class IP extends Abstract{
  
    timeOutID={"mac":null,"name":null}
    currentValue={}
    validationSet=new Set()
    
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

    currentLanguage()
    {
        return Application.language.current
    }

    validateField=async (input)=>{
   
      

        //check mac address duplicato
        const checkDuplicatedMacAddress=(input)=>{
            let value=input.value
            this.validationSet.add('mac')
            this.showWaiting(input)
            return new Promise(resolve=>{
                this.timeOutID['mac']=setTimeout(()=>{
                        services.net.exists(value).then(resp=>{
                            console.log(resp.data)
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
            this.showWaiting(input)
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
                if(!value) return {'message':"value cannot be empty"}
                if(!value.match(/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/)) return {'message':'value is invalid'}
                if(isMacAddressVM(value) && this.hostConfig.value!='STATICVM') return {'message':'value is for VM'}
                if(!isMacAddressVM(value) && this.hostConfig.value=='STATICVM') return {'message':'value is not for VM'}
                if(this.currentValue['mac']==value) return null;
                let isDuplicated=await checkDuplicatedMacAddress(input)
                if (!isDuplicated) {
                    this.currentValue['mac']=value;  
                    return null 
                }
                if(this.eHost && this.eHost.mac.toLowerCase()==value.toLowerCase()) return null;
                return {'message':'value is duplicated'}
            },
            
            "name":async (value)=>{
                
                clearTimeout(this.timeOutID["name"])
                if(!value) return {'message':"value cannot be empty"}
                if(value.length<4) return {'message':'value is too short (minlength=4)'}
                if(!value.match(/^([a-zA-Z0-9]+)(-[a-zA-Z0-9]+)*$/)) return {'message':'value is invalid'}
                let name=value;
                let domain=this.hostDomain.value;
                if(this.currentValue['name']==name && this.currentValue['domain']==domain) return null
               
                let hostName=`${name}.${domain}`
                let isDuplicated=await checkDuplicateHostName(input,hostName)
                
                if (!isDuplicated) {
                    this.currentValue['name']=name
                    this.currentValue['domain']=domain
                    return null
                }

                if(this.eHost) {
                    let curHostName=`${this.eHost.name}.${this.eHost.domain}`
                    if(curHostName.toLowerCase()==hostName.toLowerCase()) return null
                }
                
                return {'message':'value is duplicated'}
                
            }
            
        }

        let {name,value}=input;
       
        let res=await validationRules[name](value)
        
        res==null ? this.validationSet.delete(name):this.validationSet.add(name);
    
        return res
    }


    showWaiting =(input)=>{
        input.nextElementSibling.innerText="Sto controllando..."
    }
    
    showResult=(input,res)=>{
        let msg = res?.message || ''
        input.className = msg ? 'error' : 'success';
        input.nextElementSibling.innerText=msg
    }
    
    cleanResult=(input)=>{
        input.className = "";
        input.nextElementSibling.innerText=""
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
            
            if(["build","floor","room"].some(e=>e.indexOf(name)>-1))
            {
                return this.cleanResult(this.hostPort)
            }

            const actions={
                "config":async ()=>{
                        this.hostName.disabled = value=='DHCP'
                        this.hostDomain.disabled=this.hostName.disabled
                        
                        if(this.hostName.disabled)
                        {
                            //this.hostName.value=this.eHost?.name || ''
                            this.validationSet.delete('name')
                            this.cleanResult(this.hostName)
                        }
                        else
                        {
                            let res=await this.validateField(this.hostName)
                            this.showResult(this.hostName,res)
                        }
                    
                        if(this.hostMac.value!="")
                        {
                            let res=await this.validateField(this.hostMac)
                            this.showResult(this.hostMac,res)
                        }
                },
                "domain":async ()=>{
                    if(!this.hostName.value) return;
                    let res=await this.validateField(this.hostName)
                    this.showResult(this.hostName,res)
                },
                "port":()=>{
                    this.validationSet.delete('port')
                    this.showResult(this.hostPort,null)
                }

            }

            return await actions[name]()
          
        }
       

        const validateFormInput=async function(ev){
            
            let target=ev.target
            let tag=ev.target.tagName
            
            if(tag=='INPUT')
            {

                target.value=valueReplace(target)
                let res=await this.validateField(target)
                this.showResult(target,res)
            }
           
        }

        const validateForm=async function(ev){
           
            ev.preventDefault()
            
            let elements=Array.from(document.querySelectorAll("input[type='text']"))
            
            for(let e of elements)
            {
                if(!e.value && !e.disabled)
                {
                    this.validationSet.add(e.name)
                    this.showResult(e,{'message':"value cannot be empty"})
                }
            }

            if(!this.hostPort.value){
                this.validationSet.add("port")
                this.showResult(this.hostPort,{'message':"port is not selected"})
            }

            let formIsValid=this.validationSet.size==0
            

            console.log("Form is valid:",formIsValid)
            
            
           
        }

        const locationFreePorts=function(ev){
            console.log(ev)
            let freePorts=ev.detail
            this.hostPort.disabled=!freePorts
            if(!freePorts)
            {
                this.validationSet.add("port")
                this.showResult(this.hostPort,{"message":"No free ports"})
            }
        }

        let loc=this.locale();

         //il nodo di edit
        this.eHost=this.args ? this.args.eHost : null;

        //form
        this.form=document.querySelector("form")

        //istanzia oggetto location
        this.location=new Location(this.form.querySelector("#location"),{"config":'DHCP',"mac":""});

        //se si tratta di modifica di un nodo setta i valori di default
        if(this.eHost)
        {
            
            
            let ctrl=document.querySelector("#isUpdate")
            let name= (this.eHost.name ? `${this.eHost.name}.${this.eHost.domain}` : 'DHCP') + `- ${this.eHost.mac}`;
          
            ctrl.innerHTML=`<div class="divisione_title">${loc['form']["host-edit-info"]}:<br><span style="padding:5px">-- ${name} --</span></div>`
            
            //imposta i dati del nodo nel form
            for(let e of Array.from(this.form.elements))
            {
                if(!e.name || ['build','floor','room','port'].some(k=>k==e.id)) continue
                this.form[e.name].value=(this.eHost[e.name] || "")
                this.currentValue[e.name]=this.form[e.name].value
            }

            //imposta edificio piano stanza porta
            let merge=Object.assign({},this.eHost.location,{"config":this.eHost.config,"mac":this.eHost.mac})
            await this.location.setDefault(merge);
            
        }
 

        this.hostConfig=document.querySelector("#config");

        this.hostMac=document.querySelector("input[name='mac']");
        this.hostName=document.querySelector("input[name='name']");
        this.hostDomain=document.querySelector("#domain");
        this.hostPort=document.querySelector("#port");

        this.hostName.disabled=this.hostConfig.value=='DHCP';
        this.hostDomain.disabled=this.hostName.disabled;

        
        
        this.form.addEventListener("keyup",validateFormInput.bind(this))

        this.form.addEventListener("change",validateFormSelect.bind(this))

        this.form.addEventListener("submit",validateForm.bind(this))

        //questo messaggio viene inviato dal componente Location per informare del numero di porte
        //libere nella configurazione selezionata (DHCP,Static o Static VM)
        this.form.addEventListener("freePorts",locationFreePorts.bind(this))
       

       
    }


}