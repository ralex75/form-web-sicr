const template=
`   
    <div class="form_intest">
    Locazione Presa
    </div>
    <div class="form_riga">
        <div class="form_col">
            <label for="build">Edificio</label><br>
            <select id="build" name="build"></select>
        </div>
        <div class="form_col">
            <label for="floor">Piano</label><br>
            <select id="floor" name="floor"></select>
        </div>
    </div> 
    <div class="form_riga">
        <div class="form_col">
            <label for="room">Stanza</label><br>
            <select id="room" name="room"></select>
        </div>
        <div class="form_col">
            <label for="port">Porta</label><br>
            <select id="port" name="port"></select>
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
    </style>
   
`
import {Base,UI} from './base.js'
import services from '../services.js'

export class Location extends Base {
    
    

    init(){

        this.$builds=document.querySelector("#build");
        this.$floors=document.querySelector("#floor")
        this.$rooms=document.querySelector("#room")
        this.$ports=document.querySelector("#port")
        
        this.$location=document.querySelector("#location")
        
        this.defaultOption={'build':"<option selected value='' disabled hidden> --- Seleziona Edificio --- </option>",
                                  'floor':"<option selected value='' disabled hidden> --- Seleziona Piano --- </option>",
                                  'room':"<option selected value='' disabled hidden> --- Seleziona Stanza --- </option>",
                                  'port':"<option selected value='' disabled hidden> --- Seleziona Porta --- </option>"}
        

        this.$location.querySelectorAll('select').forEach(el=>{
           
                el.addEventListener('change',ev=>{this.selectChanged(ev.target)});
                this.buildOptions(el)
            }
            
        )

        this.buildOptions(this.$builds,[{'txt':'Marconi','value':'MARCONI'},{'txt':'Fermi','value':'Fermi'}])

        document.addEventListener('ConfigChanged',ev=>{
            this.configChangedArgs=ev.detail;
           
            this.enableDisablePorts();
        })

        if(this.args)
        {
            
           this.initLocation();
           
        }

       
    }

    async initLocation()
    {
        this.$builds.value=this.args.build;
        await this.getFloors();
        this.$floors.value=this.args.floor;
        await this.getRooms();
        this.$rooms.value=this.args.id;
        await this.getPorts();
        this.$ports.value=this.args.port;
        this.$ports.dispatchEvent(new Event('change'))
    }

    getPortRef(){
        return this.$ports;
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

       
       this.$ports.disabled= (disabledCount==(this.$ports.options.length-1));
       
       if(this.$ports.disabled)
       {
           UI.EmitEvent("NoFreePorts");
       }
        
    }

    isDisabled(o){

        
        if(!o || !o.value) return;

        var port=this.ports.filter(p=>p.port_code==o.value)
     
        port=port && port[0];

        var _invalid=port.vlanid==null;
        
        var {config,mac}=this.configChangedArgs;
        
        if(!_invalid)
        {
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
                   "value":d.port_code,
                   "txt": `${d.port_alias} ${d.vlanid=='113' ? ' - DHCP':''}`
                    }
         
            ports.push(p);
        })
        return ports;
    }
    

    selectChanged(select){
          
      
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

        this.$ports.dispatchEvent(new CustomEvent("selectedPort",{detail:p,bubbles:true}))
    }

    getContent(){
       return template;
    }

}