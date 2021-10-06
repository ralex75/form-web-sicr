const template=
`   
    <div class="form_intest" id="subtitle">
    [HEADER-PORT]
   
    </div>
    
    <div class="form_riga">
        
        <div class="form_col">
            <label for="build">[BUILD]</label>
        </div>
        <div class="form_col test">
            <select id="build" name="build"></select>
            <small></small>
        </div>
    </div> 
    <div class="form_riga">
        <div class="form_col">
            <label for="floor">[FLOOR]</label>
        </div>
        <div class="form_col test">
            <select id="floor" name="floor"></select>
            <small></small>
        </div>
    </div> 
    <div class="form_riga">
        <div class="form_col">
            <label for="room">[ROOM]</label>
        </div>
        <div class="form_col">
            <select id="room" name="room"></select>
            <small></small>
        </div>
    </div> 
    <div class="form_riga">
        <div class="form_col">
            <label for="port">[PORT]</label>
        </div>
        <div class="form_col">
            <select id="port" class="ports" name="port" data-attr='formdata'></select>
            <small></small>
        </div>
    </div> 
  

    <style>

    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }
    select {
        background: transparent;
        outline:0;
       
    }

   
    select option:disabled  {
        color: #CCC;
     }
     
     
    
    </style>
`

import services from '../services.js'
import {Application} from '../app';



export class Location{
    
    constructor(target,args)
    {
        this.target=target;
        this.args=args

        this.target.innerHTML=this.getContent();
        this.mounted()
    }

    mounted(){

        this.$builds=document.querySelector("#build");
        this.$floors=document.querySelector("#floor")
        this.$rooms=document.querySelector("#room")
        this.$ports=document.querySelector("#port")
       
        
        this.$location=document.querySelector("#location")
        
       
        
        var loc=this.locale()[Application.language.current].options;

        this.defaultOption={'build':`<option selected value='' disabled hidden> --- ${loc["build"]} --- </option>`,
                                  'floor':`<option selected value='' disabled hidden> --- ${loc["floor"]} --- </option>`,
                                  'room':`<option selected value='' disabled hidden> --- ${loc["room"]} --- </option>`,
                                  'port':`<option selected value='' disabled hidden> --- ${loc["port"]} --- </option>`}
        

        this.$location.querySelectorAll('select').forEach(el=>{
           
                el.addEventListener('change',ev=>{ 
                                this.selectChanged(ev.target);
                            });
                
                this.buildOptions(el)
            }
            
        )

        this.buildOptions(this.$builds,[{'txt':'Marconi','value':'MARCONI'},{'txt':'Fermi','value':'FERMI'},{'txt':'Segre','value':'SEGRE'}])

        if(this.args.subtitle){
            this.$location.querySelector("#subtitle").innerText=this.args.subtitle
        }

    }
    

    //aggiorna lista porte libere selezionabili
    updateFreePorts(args){

        
        this.args=args;
        console.log("UpdateFreePorts")
        //Abilita o Disabilita le porte
        this.enableDisablePorts();

    }
    


    //Imposta il default con i parametri di Modifica di un nodo
    async setDefault({build,floor,id,port,config,mac})
    {
        this.args={"config":config,"mac":mac}

        this.$builds.value=build;
        await this.getFloors();
        this.$floors.value=floor;
        await this.getRooms();
        this.$rooms.value=id;
        await this.getPorts();
        this.$ports.value=port;
      
    }

   

    locale(){

        return {"ITA":{"template":{"build":"Edificio","floor":"Piano","room":"Stanza","port":"Porta",
                               "header-port":"LOCAZIONE PRESA"},
                               "options":{"build":"Seleziona Edificio","floor":"Seleziona Piano","room":"Seleziona Stanza",
                                          "port":"Seleziona Porta","port-broken":"GUASTA"}},
                "ENG":{"template":{"build":"Building","floor":"Floor","room":"Room","port":"Port",
                                "header-port":"PORT LOCATION"},
                                "options":{"build":"Select Building","floor":"Select Floor","room":"Select Room","port":"Select Port",
                                "port-broken":"BROKEN"}},
            }
    }

    enableDisablePorts()
    {
       
      
        if(!this.ports || this.ports.length==0) return;

       
        var options=this.$ports.options;
        var disabledCount=0;
        
       for(var i=0;i<options.length;i++){
       
           var disabled=this.isDisabled(options[i]);
           options[i].disabled=disabled;
           if(disabled)
           {
              
               disabledCount++;
           }
       }

       //lasciamo la porta selezionata settata solo se non è disabilitata
       /*if(this.$ports.options[this.$ports.selectedIndex].disabled)
       {
           //this.$ports.value=""
       }*/
       
       var freePorts=(disabledCount!=(this.$ports.options.length-1));
      

       this.target.dispatchEvent(new CustomEvent('freePorts', { detail: freePorts, bubbles:true }));
        
    }

    isDisabled(o){

       
        
        if(!o || !o.value) return;

        var port=this.ports.filter(p=>{return (p.port_code==o.value || p.port_alias==o.value)})
    
        port=port && port[0];

        var _unlinkedPort=port.vlanid==null;
     
        //se porta guasta non può essere selezionata
        if(port.broken) return true;

        //se porta scollegata può essere selezionata
        if(_unlinkedPort) return false;
        
        if(!this.args) return;
        
        
        let {config,mac}=this.args;
        
        let _invalid=false;

        //nodo e porta devono essere DHCP altrimenti controlla se è occupata (port.busy)
        if(!(port.vlanid==113 && config=='DHCP'))
        {
            
            //non ci sono nodi sulla porta
            _invalid=!(port.auth_hosts.length==0);
        
            //se c'è 1 nodo deve essere quello corrente (quello di EDIT) altrimenti invalida
            if(_invalid && mac)
            {
                _invalid=!(port.auth_hosts.length==1 && port.auth_hosts[0]==mac.toLowerCase());
            }
            
            //check se config virtuale e porta non è DHCP
            if(_invalid)
            {
                if(config== 'STATICVM')
                {
                    if(port.vlanid!=113)
                    {
                        _invalid=false;
                    }
                }
            }
        

        }

    
        

        return _invalid;
    
        
        
    }

    buildOptions(select,data=[])
    {   
        
        select.innerHTML=this.defaultOption[select.name];
        select.className=""
        select.nextElementSibling.innerText=""

        var options="";
       
        data.forEach(d=>{

            options+=`<option  value='${d.value}'>${d.txt}</option>`;
        })

        select.innerHTML+=options;
        select.disabled = select.options.length<2;
     
        if(select.name=='port' && !select.disabled)
        {
            this.enableDisablePorts();
        }
 
    }

    

    getFloors(){
       
        this.ports=[]
        var b=this.$builds.value;

        return services.locations.getFloors(b).then(res=>{
            this.buildOptions(this.$floors,res.data);
        })
     
    }

    getRooms(){
       
        this.ports=[]
        var b=this.$builds.value;
        var f=this.$floors.value;

        return services.locations.getRooms(b,f).then(res=>{
            this.buildOptions(this.$rooms,res.data);
        })

    }

    getPorts(){
       
        this.ports=[]
        var loc=this.$rooms.value;
       
        return services.locations.getPorts(loc).then(res=>{
            
            this.ports=res.data;
            var data=this.mapPortData(res.data)
            this.buildOptions(this.$ports,data);

        })

    }

    mapPortData(data){
        var ports=[];
        var loc=this.locale()[Application.language.current]
        var pbroken=loc.options["port-broken"]
        data.forEach(d=>{
            var p={
                    "value": d.port_code,
                    "txt": `${d.port_code} ${d.vlanid=='113' ? ' - DHCP':''} ${d.broken ? pbroken : ''}`
                   }
         
            ports.push(p);
        })
        return ports;
    }

   

    async selectChanged(select){
          
      
        var callback=null;
        var {name}=select;

        switch(name){

            case "build":
              
                this.buildOptions(this.$floors)
                this.buildOptions(this.$rooms)
                this.buildOptions(this.$ports)
                callback=this.getFloors;
            break;
            case "floor":
                this.buildOptions(this.$rooms)
                this.buildOptions(this.$ports)
                callback=this.getRooms;
            break;
            case "room":
                this.buildOptions(this.$ports)
                callback=this.getPorts;
            break;
            case "port":
                callback=this.selectedPort;
            break;
    

        }


        if(callback){
            await callback.bind(this)();
            if(callback!=this.selectedPort)
            {
                this.selectedPort();
            }
        }

     

    }

    selectedPort(){
        
        var p=null;

        if(this.ports && this.ports.length>1)
        {
            p=this.ports.filter(p=>p.port_code==this.$ports.value)
            p=(p && p[0]);
        }

        this.$ports.dispatchEvent(new CustomEvent("selectedPort",{detail:p,bubbles:true}))
    }

    getContent(){
        var tmp=template;
        var loc=this.locale()[Application.language.current]
        for(var k in loc.template)
        {
            tmp=tmp.replace(`[${k.toUpperCase()}]`,loc.template[k])
        }
       return tmp;
    }

}