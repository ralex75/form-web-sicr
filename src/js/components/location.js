const template=
`   
    <div class="form_intest">
    [HEADER-PORT]
    </div>
    <div class="form_riga">
        <div class="form_col">
            <label for="build">[BUILD]</label><br>
            <select id="build" name="build"></select>
        </div>
        <div class="form_col">
            <label for="floor">[FLOOR]</label><br>
            <select id="floor" name="floor"></select>
        </div>
    </div> 
    <div class="form_riga">
        <div class="form_col">
            <label for="room">[ROOM]</label><br>
            <select id="room" name="room"></select>
        </div>
        <div class="form_col">
            <label for="port">[PORT]</label><br>
            <select id="port" class="ports" name="port" data-attr='formdata'></select>
            <small>Error Message</small>
        </div>
    </div> 

    <style scoped>
    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }
    select {
        background: transparent;
        outline:0;
    }

    select.ports option:disabled {
        color: #DDD;
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
                                this.$ports.parentElement.className="form_col"     
                            });
                
                this.buildOptions(el)
            }
            
        )

        this.buildOptions(this.$builds,[{'txt':'Marconi','value':'MARCONI'},{'txt':'Fermi','value':'FERMI'},{'txt':'Segre','value':'SEGRE'}])

        

    }
    

    //aggiorna lista porte libere selezionabili
    updateFreePorts(args){

       
        this.configChangedArgs=args;
           
        console.log("UpdateFreePorts")
        //Abilita o Disabilita le porte
        this.enableDisablePorts();
    }
    


    //Imposta il default con i parametri di Modifica di un nodo
    async setDefault({build,floor,id,port})
    {
        this.$builds.value=build;
        await this.getFloors();
        this.$floors.value=floor;
        await this.getRooms();
        this.$rooms.value=id;
        await this.getPorts();
        this.$ports.value=port;
        //this.$ports.dispatchEvent(new Event('change'))
    }

   

    locale(){

        return {"ITA":{"template":{"build":"Edificio","floor":"Piano","room":"Stanza","port":"Porta",
                               "header-port":"LOCAZIONE PRESA"},
                               "options":{"build":"Seleziona Edificio","floor":"Seleziona Piano","room":"Seleziona Stanza","port":"Seleziona Porta"}},
                "ENG":{"template":{"build":"Building","floor":"Floor","room":"Room","port":"Port",
                                "header-port":"PORT LOCATION"},
                                "options":{"build":"Select Building","floor":"Select Floor","room":"Select Room","port":"Select Port"}},
            }
    }

    enableDisablePorts()
    {
       
        if(!this.ports) return;

       
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
       if(this.$ports.options[this.$ports.selectedIndex].disabled)
       {
           this.$ports.value=""
       }

       var freePorts=(disabledCount!=(this.$ports.options.length-1));
      

       this.target.dispatchEvent(new CustomEvent('freePorts', { detail: freePorts,bubbles:true }));
        
    }

    isDisabled(o){

        
        if(!o || !o.value) return;

        var port=this.ports.filter(p=>{return (p.port_code==o.value || p.port_alias==o.value)})
     
        port=port && port[0];

        var _unlinkedPort=port.vlanid==null;

        if(_unlinkedPort) return false;
        
        if(!this.configChangedArgs) return;
        var {config,mac}=this.configChangedArgs;
        
        var _invalid=false;
        
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
       
        var b=this.$builds.value;

        return services.locations.getFloors(b).then(res=>{
            this.buildOptions(this.$floors,res.data);
        })
     
    }

    getRooms(){
       
       
        var b=this.$builds.value;
        var f=this.$floors.value;

        return services.locations.getRooms(b,f).then(res=>{
            this.buildOptions(this.$rooms,res.data);
        })

    }

    getPorts(){
       
        var loc=this.$rooms.value;
       
        return services.locations.getPorts(loc).then(res=>{
            
            this.ports=res.data;
            var data=this.mapPortData(res.data)
            this.buildOptions(this.$ports,data);

        })

    }

    mapPortData(data){
        var ports=[];
        data.forEach(d=>{
            var p={
                   "value":d.port_alias,
                   "txt": `${d.port_alias} ${d.vlanid=='113' ? ' - DHCP':''}`
                    }
         
            ports.push(p);
        })
        return ports;
    }
    

    selectChanged(select){
          
       console.log("Changed");
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
            callback.bind(this)();
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

        //this.$ports.dispatchEvent(new CustomEvent("selectedPort",{detail:p,bubbles:true}))
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