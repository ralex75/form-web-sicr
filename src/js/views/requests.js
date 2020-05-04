const template=`
    
    <div class="req-actions">
        <input type="text" placeholder="ricerca..." id="search" autocomplete="off" />
        <label for="selreqtypes">Visualizza:</label>&nbsp;
        <select id="selreqtypes">
            <option selected value="ANY">Tutti</option>
            <option  value="IP">IP</option>
            <option value="WIFI">WIFI</option>
        </select>
    </div>
    
    <table id="tbreq">
    <thead>
        <tr id="table_intest">
            <td>ID</td>
            <td>Data Richiesta</td>
            <td>Descrizione</td>
        </tr>
    </thead>
    <tbody class="tbreq-tbody">
    </tbody>
    </table>

    <style scoped>

   

    .req-actions{
        display:flex;
        align-items:center;
        width:100%;
        margin:10px 0;
        padding:10px 0;
    }
    .req-actions input[type=text], .req-actions select{
        border:1px solid #DDD;
        padding:10px;
        border-radius:0;
        outline:0;
    }
    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }

    .req-actions input[type=text]{
        width:200px;
        margin-right:20px;
    }

    .status{
        width:80%;
        padding:20px;
        color:#FFF;
        margin:10px;
    }

   

    .status.error{
        background-color:#CD6155; 
    }

    .status.info{
        background-color:#5DADE2; 
    }

    .hide{
        display:none;
    }


    </style>
`

import {Base,UI} from './base.js'
import services from '../services.js'


const DATE_FORMAT="DD/MM/YYYY HH:mm"

export class Requests extends Base{

    init()
    {
        var target=this.target;
        
        this.$table=target.querySelector('#tbreq');
        this.$tbody=this.$table.querySelector(".tbreq-tbody");
        this.$search=target.querySelector("#search")
        this.$types=target.querySelector("#selreqtypes")
        this.$status=target.querySelector(".status")
        this.timeoutid=null;
        this.$search.addEventListener('keyup',ev=>{
            clearTimeout(this.timeoutid)
            this.timeoutid=setTimeout(()=>{
            var items=this.items.filter(e=>{return Object.values(e).join().toLowerCase().indexOf(ev.target.value.toLowerCase())>-1})
            this.buildRows(items);
            },200)
        })

        this.$types.addEventListener('change',ev=>{
            this.getRequests();
        })

        this.getRequests();
    }

    getContent(){
        return template;
    }

    setFeedbackMessage(type="",message="")
    {
      
        var content=`<div class="status ${type}">${message}</div>`;
        var status=this.target.querySelector(".status")
        if(status) status.remove();
        this.$table.insertAdjacentHTML('beforebegin',content);
       
    }

    unsetFeedbackMessage()
    {
        var status=this.target.querySelector(".status")
        if(status) status.remove();
    }

    async getRequests()
    {
       this.items=[]
       

       //try{
            
            var resp=await services.requests.list(false,this.$types.value)
            this.items=this.mapItems(resp.data);
            //this.buildRows(this.items);
       /*}
       catch(exc)
       {
           this.setFeedbackMessage('error','si è verificato un errore...')
           console.log("Errore:",exc);
       }*/

        
       this.buildRows(this.items);

    }

    mapItems(list)
    {
       
        var items=[];
        list.forEach(item => {
                  
            var desc=""
            if(item.rtype=="WIFI")
            {
               var format=DATE_FORMAT.split(" ")[0];
               desc=`WiFi temporaneo dal ${moment(item.data.from).format(format)} al ${moment(item.data.to).format(format)}`;
            }
            if(item.rtype=="IP")
            {
              var d=item.data;
              var action={"create":"Nuovo nodo","update":"Aggiornamento dati del nodo","delete":"Cancellazione nodo"}
              
              desc=`${action[d.action]}:  ` 
              var h=d.from || d.to;
              desc+= h.name ? h.name+"."+h.domain : "DHCP - "+h.mac
               
            }
            var i={
              "id":item.id,
              "reqdate":moment(item.req_date).format(DATE_FORMAT),
              "desc": desc 
            }
            items.push(i);
          });

          return items;
    }

    buildRows(items)
    {
        this.$tbody.innerHTML="";

        items.forEach(i=>{
            var tr=document.createElement("tr")
            tr.innerHTML=`
                <td>${i.id}</td>
                <td>${i.reqdate}</td>
                <td><a href="#" data-rid="${i.id}">${i.desc}</a></td>`;
            this.$tbody.appendChild(tr);    
        })

        this.$tbody.querySelectorAll("[data-rid]").forEach(el=>{
            el.addEventListener('click',()=>{
                UI.EmitChangeView('reqdetails',{"rid":el.dataset.rid})
            });
        })

        var className=items && items.length>0 ? '' :'hide';
        this.$table.className=className;

    }


    
}

