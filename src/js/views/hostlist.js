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

 div.grid{
     display:grid;
     grid-template-columns: 100px auto;
     grid-gap: 10px;
 }
</style>
`


import {Base,UI} from './base.js'
import {Dialog} from './dialog.js'
import services from '../services.js'

export class HostList extends Base{

    

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
        
       

        this.$tbody.innerHTML="";

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
            var tr=document.createElement("tr");
            tr.innerHTML=`
                        <td>${hostName}</td>
                        <td>${h.ip ? h.ip :'DHCP'}</td>
                        <td>${h.mac}</td>
                        <td><a href="#" data-edit='{"mac":"${h.mac}","action":"view"}'>${h.port_alias}</a></td>
                        <td>
                            <a href="#" data-edit='{"mac":"${h.mac}","action":"edit"}'>Modifica</a> 
                            <a href="#" data-edit='{"mac":"${h.mac}","action":"del"}'>Elimina</a>
                        </td>
                        `
            this.$tbody.appendChild(tr);
        })




        //this.$tbody.innerHTML=rows;
        //this.$table.style.display= rows.length>0 ? 'block' : 'none';
        this.target.querySelector('#feedback').style.display = list.length>0 ? 'none' : 'block';
        this.$tbody.querySelectorAll("a").forEach(el=>{
            el.addEventListener('click',ev=>{
                ev.preventDefault();
               
                this.editItemHanlder(ev.target.dataset['edit']);
            })
        })
    }

    

    editItemHanlder(args){

      
        var {mac,action}=JSON.parse(args);

        if(!action) return;
        
        var h=this.hosts.filter(h=>{return h.mac==mac});
        h=h[0] || null;

        this.selectedHost=h;

        switch(action)
        {
            case 'edit':
                UI.EmitChangeView('ip',{"eHost":h});
            break;
            case 'del':
                this.showDialog(
                    'Richiesta di conferma',
                    `
                        Si desidera davvero inviare la richiesta di eliminare questo nodo?
                        <h4>${
                               h.config!='DHCP' ? h.name+"."+h.domain : 'DHCP - '+h.mac
                            }</h4>`,this.removeHost.bind(this),()=>{})
            break;
            case 'view':
                var title=`Locazione presa - ${h.port_alias}`
                var {build,floor,room} = h.location;

                var msg=`<div class="grid">
                         <div>Edificio:</div><div>${build}</div>
                         <div>Piano:</div><div>${floor}</div>
                         <div>Stanza:</div><div>${room}</div>
                         </div>
                        `
                this.showDialog(title,msg)
            break;

        }
       
    }

     //DIALOG PROMPT
     showDialog(title,message,yesCallback,noCallback)
     {
       
         var dlgplaceholder=this.target.querySelector(".dlg-placeholder");
         if(!dlgplaceholder)
         {
            var search=this.target.querySelector(".search")
            search.insertAdjacentHTML('afterend','<div class="dlg-placeholder"></div>');
            dlgplaceholder=this.target.querySelector(".dlg-placeholder");
         }
        
         var dlg=new Dialog(dlgplaceholder);
         
         if(yesCallback)
            dlg.showYesButton(yesCallback)
         
         if(noCallback)
            dlg.showNoButton(noCallback)

         dlg.setTitle(title);
         dlg.setMessage(message)
         dlg.show();
 
     }

     removeHost(){
         var data={'from':this.selectedHost,
                    'to':null,
                    'action':'delete'}

         UI.EmitSaveRequest('IP',data);
     }
    

    getHosts(){

        //var uinfo=JSON.parse(localStorage.getItem("uinfo"));
        //if(!uinfo) return;
        //this.pending=true;
        var usr=services.user.get();

        return new Promise((resolve,reject)=>{

        services.net.getHostList(usr.cf).then(res=>{
                var _hosts=[];
                
                res.data.map(h=>_hosts.push(services.host.map(h)));
                
                resolve(_hosts);

            });
        })
    }

}