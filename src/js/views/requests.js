const template=`
    
    <div class="req-actions">
        <input type="text" placeholder="[search]" id="search" autocomplete="off" />
        <label for="selreqtypes">[filter]:</label>&nbsp;
        <select id="selreqtypes">
            <option selected value="ANY">[option-all]</option>
            <option  value="ACCOUNT">ACCOUNT</option>
            <option  value="IP">IP</option>
            <option value="WIFI">WIFI</option>
        </select>
    </div>
    
    <table id="tbreq" style="width:100%">
    <thead>
        <tr id="table_intest">
            <td>ID</td>
            <td>[reqdate]</td>
            <td>[reqdesc]</td>
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

import {Base} from './base.js'
import services from '../services.js'
import {Router} from '../router.js'
import {Application} from '../app.js'
import moment from 'moment'


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
            },0)
        })

        this.$types.addEventListener('change',ev=>{
            this.getRequests();
        })

      

        this.getRequests();
    }

    getContent(){
        let tmp=template;
        var loc=this.locale()[Application.language.current];
        for(var k in loc.form)
        {
            console.log(k)
            tmp=tmp.replace(`[${k}]`,loc.form[k]);
        }
       
        return tmp;
    }

    locale(){
        return {
                "ITA":{"wifi":{"desc":"WIFI temporaneo","format":"DD/MM/YYYY"},
                        "ip":{"create":"Nuovo nodo","update":"Aggiornamento dati del nodo","delete":"Cancellazione nodo"},
                        "account":{"desc":"Creazione Account di Posta INFN"},
                        "form":{"search":"ricerca","filter":"visualizza","option-all":"Tutti","reqdate":"Data richiesta","reqdesc":"Descrizione"}},
                "ENG":{"wifi":{"desc":"WIFI temporary","format":"YYYY/MM/DD"},
                        "ip":{"create":"New host","update":"Update host data","delete":"Delete host"},
                        "account":{"desc":"Create INFN E-mail Account"},
                        "form":{"search":"search","filter":"view","option-all":"All","reqdate":"Request Date","reqdesc":"Description"}}
               }
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
        var loc=this.locale()[Application.language.current];
        var types=Application.RequestTypes;
        var items=[];
        list.forEach(item => {
            
            var desc=""
            switch (item.rtype)
            {
                case types.WIFI:
                 //var format=DATE_FORMAT.split(" ")[0];
                 desc=`${loc["wifi"]["desc"]} ${moment(item.data.from).format(`${loc["wifi"]["format"]}`)} - ${moment(item.data.to).format(`${loc["wifi"]["format"]}`)}`;
                break;
                case types.IP:
                    var d=item.data;
                    var action={"create":`${loc["ip"]["create"]}`,"update":`${loc["ip"]["update"]}`,"delete":`${loc["ip"]["delete"]}`}
                    desc=`${action[d.action]}:  ` 
                    var h=d.from || d.to;
                    desc+= h.name ? h.name+"."+h.domain : "DHCP - "+h.mac
                break;
                case types.ACCOUNT:
                  var d=item.data;
                  desc=`${loc["account"]["desc"]}:<br>${d.email}`;
                break;

            }
            
            
            var i={
              "id":item.id,
              "reqdate":moment(item.req_date).format(loc.wifi.format+" HH:mm"),
              "desc": desc,
              "type":item.rtype
            }

            if(desc!="")
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
                <td>${i.type=='IP' ? `<a href="#requests" data-rid="${i.id}">${i.desc}</a>` : `${i.desc}`}</td>`;
            this.$tbody.appendChild(tr);

        })

        this.$tbody.querySelectorAll("[data-rid]").forEach(el=>{
            el.addEventListener('click',()=>{
                //window.Application.rid=el.dataset.rid;
                Router.go('reqdetails',{"rid":el.dataset.rid})
            });
        })

        var className=items && items.length>0 ? '' :'hide';
        this.$table.className=className;

    }


    
}

