const template=`
<input type="text" class="search" placeholder="ricerca" />
<h3 id="feedback">Nessun risultato</h3>
<table>
<thead>
    <tr id="table_intest">
        <td>Nome</td>
        <td>IP</td>
        <td>Mac Address</td>
        <td>Porta</td>
        <!--<td>Locazione</td>-->
        <td><a href="#" data-edit='{"mac":"","action":"edit"}'>Aggiungi</a></td>
    </tr>
</thead>
<tbody id="tb-body">
      
</tbody>
</table> 
<style scoped>
 input.search{
     padding:10px;
     margin:10px 0;
     width:260px;
 }
 thead a{
     color:#FFFFFF;
 }
</style>
`


import {Base,UI} from './base.js'
import services from '../services.js'

export class HostList extends Base{

    constructor(target)
    {
        super(target);
        this.init();
    }

    async init(){
        
        this.hosts=await this.getHosts();
       
        this.$tbody=this.target.querySelector("#tb-body");
        this.$tbody=this.target.querySelector("#tb-body");
        this.$table=this.$tbody.parentElement;
        this.$addlnk=this.$table.querySelector("thead > tr > td > a");
        this.$addlnk.addEventListener('click',ev=>{this.editItemHanlder(ev.target.dataset['edit'])})

       
        this.$search=this.target.querySelector("input[type=text]");
         
        

        this.$search.addEventListener('keyup',ev=>{
            
            if(this.hosts.length>0)
            {
                var items=this.hosts.filter(i=>{
                                                    return Object.values(i).join(',')
                                                        .toLowerCase()
                                                        .indexOf(ev.target.value.toLowerCase())>-1
                                                    })
                this.buildTableRows(items);
            }
        })

        
        this.buildTableRows(this.hosts);

    }

    getContent(){
        return template;
    }

    buildTableRows(list){
        
        var rows="";

        list.forEach(h=>{
            var hostName='DHCP';
            if(h.name)
            {
                hostName=h.name+"."+h.domain;
                if(h.config=="STATICVM")
                {
                    hostName+="<br>VIRTUALE"
                }
            }
            rows+=`<tr>
                    <td>${hostName}</td>
                    <td>${h.ip ? h.ip :'DHCP'}</td>
                    <td>${h.mac}</td>
                    <td>${h.port_alias}</td>
                    <td><a href="#" data-edit='{"mac":"${h.mac}","action":"edit"}'>Modifica</a> 
                        <a href="#" data-edit='{"mac":"${h.mac}","action":"del"}'>Elimina</a>
                   </tr>`
        })




        this.$tbody.innerHTML=rows;
        //this.$table.style.display= rows.length>0 ? 'block' : 'none';
        this.target.querySelector('#feedback').style.display = rows.length>0 ? 'none' : 'block';
        this.$tbody.querySelectorAll("a").forEach(el=>{
            el.addEventListener('click',ev=>{
                ev.preventDefault();
               
                this.editItemHanlder(ev.target.dataset['edit']);
            } )
        })
    }

    editItemHanlder(args){

      
        var {mac,action}=JSON.parse(args);

        if(!action) return;
        
        if(action=='edit')
        {
           
            var h=this.hosts.filter(h=>{return h.mac==mac});
            var maclist=this.hosts.map(i=>i.mac);
            
            h=h[0] || null;

            UI.EmitChangeView('ip',{"maclist":maclist,"eHost":h});
           // this.target.dispatchEvent(new CustomEvent('changeView',{'detail':{"view":'ip','args':{"maclist":maclist,"eHost":h}},'bubbles':true}))
        }

        if(action=='del')
        {
            console.log("Delete item:",mac);
        }
    }

    getHosts(){

        //var uinfo=JSON.parse(localStorage.getItem("uinfo"));
        //if(!uinfo) return;
        //this.pending=true;
        return new Promise((resolve,reject)=>{
        services.net.getHostList('RGGLSN75M17H501N').then(res=>{
            var _hosts=[];
            
            res.data.map(h=>{
                var host={

                    "name":h.host_name ? h.host_name : "",
                    "domain":h.host_domain ? h.host_domain : "roma1.infn.it",
                    "ip":h.host_ip ? h.host_ip : "",
                    "mac":h.host_mac,
                    "port":h.pp_port_code,
                    "port_alias":h.pp_port_alias,
                    "config": h.host_ip ? 'STATIC' : 'DHCP',
                    "location":{"build":h.build,"floor":h.floor,"id":h.loc_id,"room":h.loc_name,"port":h.pp_port_code,"vlanid":h.vlanid},
                    
                    }
                    
                    //se è virtuale
                    host['config']= h.host_vm ? "STATICVM" : host['config'];
                   

                _hosts.push(host);

            })
            
            resolve(_hosts);

        }).finally(res=>{
                //this.pending=false;
        });
        })
    }

}