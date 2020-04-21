const template=`
    
    <div class="req-actions">
        <input type="text" placeholder="ricerca..." id="search" />
        <label for="selreqtypes">Tipo</label>&nbsp;
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
    
    <tr v-for="(item,index) in items" :key="index">
    <td>{{item.id}}</td>
    <td>{{item.reqdate}}</td>
    <td>{{item.desc}}</td>
    </tr>
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
    }

    .req-actions input[type=text]{
        width:200px;
        margin-right:20px;
    }

    </style>
`

import {Base,UI} from './base.js'
import services from '../services.js'



const DATE_FORMAT="DD/MM/YYYY HH:mm"

export class Requests extends Base{

    constructor(target,args)
    {
        super(target,args);

       
        this.$table=target.querySelector('#tbreq');
        this.$tbody=this.$table.querySelector(".tbreq-tbody");
        this.$search=target.querySelector("#search")
        this.$types=target.querySelector("#selreqtypes")
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

    async getRequests()
    {
       this.items=[]

       try{
            var resp=await services.requests.list(false,this.$types.value)
            this.items=this.mapItems(resp.data);
       }
       catch(exc)
       {
           console.log(exc);
       }

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
              var action={"create":"Nuovo nodo","update":"Aggiornamento dati del nodo","delete":"Eliminazione nodo"}
              
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
                <td>${i.desc}</td>`;
            this.$tbody.appendChild(tr);    
        })

    }

    initFeedback(status,text)
    {

    }


    getRequestsOLD(){
        this.feedback=this.initFeedback("warning","in aggiornamento...");
       
        var items=[];
       
            services.requests.list(false,this.$types.value).then(resp=>{
                
               
                var list=resp.data;
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
                    var action={"create":"Nuovo nodo","update":"Aggiornameno dati del nodo","delete":"Eliminazione nodo"}
                    
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
            }).catch(err=>{
                this.feedback=this.initFeedback("danger","Si è verificato un errore.");
                console.log(err);
            }).finally(val=>{
                if(this.feedback.status!='danger')
                {
                    this.feedback=this.initFeedback();
                }
            }).then(res=>{
                if(!this.feedback.text)
                {
                    
                    if(this.showByType=='WIFI' && this.WiFiRequests.length==0)
                        this.feedback=this.initFeedback("primary","Non ci sono richieste");
                    else if(this.showByType=="IP" && this.IPRequests.length==0)
                        this.feedback=this.initFeedback("primary","Non ci sono richieste");
                    else if (this.items.length==0)
                        this.feedback=this.initFeedback("primary","Non ci sono richieste");

                }

                return items;
            })
       
    }
}

