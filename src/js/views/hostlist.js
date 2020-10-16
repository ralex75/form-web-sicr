const template=`
<input type="text" class="search" placeholder="[SEARCH]" />
<h3 id="feedback"></h3>
<table>
<thead>
    <tr id="table_intest">
        <td>[NAME]</td>
        <td>IP</td>
        <td>[MAC]</td>
        <td>[PORT]</td>
        <!--<td>Locazione</td>-->
        <td><a href="#" data-edit='{"mac":"","action":"edit"}'>[ADD]</a></td>
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

 div.grid div.c2{
    color:#4697b8;
}

</style>
`


import Abstract from './abstract.js'
import {Dialog} from '../components/dialog.js'
import services from '../services.js'
import {Application} from './../main'
import { IP } from './ip.js'




export class HostList extends Abstract{

    constructor(target,params){
        super(target,params)
    }

    async mounted(){
        
        this.hosts=await this.getHosts();
       
        this.$tbody=this.target.querySelector("#tb-body");
        this.$table=this.$tbody.parentElement;
        
        this.$table.addEventListener("click",(ev)=>{
            
            ev.preventDefault();

            if(ev.target.matches("[data-edit]"))
            {

                this.editItemHanlder(ev.target.dataset['edit'])
            }
        })
      
       
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

    async getContent(){
       
        var tpl=template;
       
        //current lang
        var loc=this.locale();

        for(var k in loc)
        {
            tpl=tpl.replace(`[${k.toUpperCase()}]`,loc[k]);
        }
        
        return tpl;
       
    }

    localeIsEnglish(){
        return Application.language.current=="ENG";
    }

    buildTableRows(list){
        
        this.$tbody.innerHTML="";

        var eng=this.localeIsEnglish();

        var editText= !eng ? "Modifica" : "Edit"
        var delText= !eng ? "Elimina" : "Delete"

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
                            <a href="#" data-edit='{"mac":"${h.mac}","action":"edit"}'>${editText}</a> 
                            <a href="#" data-edit='{"mac":"${h.mac}","action":"del"}'>${delText}</a>
                        </td>
                        `
            this.$tbody.appendChild(tr);
        })




        this.target.querySelector('#feedback').style.display = list.length>0 ? 'none' : 'block';
       
    }

    locale(){
        const loc={"ITA":{"name":"Nome","port":"Porta","mac":"Indirizzo MAC","add":"Aggiungi","search":"ricerca"},
                "ENG":{"name":"Name","port":"Port","mac":"MAC Address","add":"Add","search":"search"},
            }

        return loc[Application.language.current];
        
    }

    editItemHanlder(args){

      
        var {mac,action}=JSON.parse(args);

        if(!action) return;
        
        var h=this.hosts.filter(h=>{return h.mac==mac});
        h=h[0] || null;

        this.selectedHost=h;

        var eng=this.localeIsEnglish();

        switch(action)
        {
            case 'edit':
                let url= h ? "hosts/edit" :"ip"
                Application.navigateTo(url,{"eHost":h});
            break;
            case 'del':
                this.showDialog(
                    `${eng ? `Confirmation request` : `Richiesta di conferma`}`,
                    `${eng ? `Do you really want to submit the request to delete this node/host?` : 
                             `Si desidera davvero inviare la richiesta di eliminare questo nodo?`}
                        
                        <h4>${
                               h.config!='DHCP' ? h.name+"."+h.domain : 'DHCP - '+h.mac
                            }</h4>`,this.removeHost.bind(this),()=>{})
            break;
            case 'view':

                var title= eng ? "Port Location" : "Locazione presa"
                title+= ` :  <b>${h.port_alias}</b>`
                var {build,floor,room} = h.location;
                var buildText=`${eng ? "Building" : "Edificio"}`
                var floorText=`${eng ? "Floor" : "Piano"}`
                var roomText=`${eng ? "Room" : "Stanza"}`

                var msg=`<div class="grid">
                         <div>${buildText}:</div><div class="c2">${build}</div>
                         <div>${floorText}:</div><div class="c2">${floor}</div>
                         <div>${roomText}:</div><div class="c2">${room}</div>
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
         dlg.showHide();
 
     }

     removeHost(){
         var data={'from':this.selectedHost,
                    'to':null,
                    'action':'delete'}

         this.SaveRequest('IP',data);
     }
    

    getHosts(){

        return new Promise((resolve,reject)=>{

        services.net.getHostList().then(res=>{
                var _hosts=[];
                
                res.data.map(h=>_hosts.push(services.host.map(h)));
                
                resolve(_hosts);

            });
        })
    }

}