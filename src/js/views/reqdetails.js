const template=`

    <div class='request-header'>
    <h1>Dettagli della richiesta ID - [ID]</h1><a href="#requests" id="goBack">&lt Indietro</a>
   <div>
    
`

const style=`
    <style scoped>
        div.alert-box{
            margin:0 auto;
            text-align:center;
            background-color: #ffbb33; /* Red */
            color:#FFF;
            padding:10px;
            line-height:13px;
        }
        .request-header{
            display:flex;
            align-items:center;
            justify-content:space-between;
        }
    </style>
`

/*class TemplateIPBuilder{
   
}
class TemplateWifiBuilder{
   
}

class TemplateBuilder{
   static initialize(type,data)
   {
        switch(type)
        {
            case "IP":
            return new TemplateIPBuilder(data);
            break;
            case "WIFI":
            return new TemplateIPBuilder(data);
            break;            
        }
   }
}*/



import {Base,UI} from './base.js'
import services from '../services.js'

export class RequestDetails extends Base {

   
    init(){


        this.getRequest();
        this.configMAP={"STATIC":"Indirizzo IP fisso",
                    "STATICVM":"Indirizzo IP per macchina virtuale",
                    "DHCP":"Indirizzo IP dinamico"}

       
    }

    goBack(){
       console.log("goback")     
    }

    async getRequest()
    {
        var req=null;
        try{
            var res=await services.requests.get(this.args.rid);
            req=res.data;
        }
        catch(exc)
        {
           
            return document.location="#requests"
        }
       

        
        /*if(!req){
            
            UI.EmitChangeView("requests");
        }*/
        //this.target.innerHTML+=JSON.stringify(req.data);
        var html="";
      
        if(req.rtype=="IP")
        {
            var action={"create":"Nuovo Nodo","update":"Aggiornamento dati del nodo","delete":"Rimozione Nodo"}

            html+=`<h3>${action[req.data.action]}</h3>`
            if(req.data.action=='update')
            {
                html+=this.changesTemplateIP(req.data);
            }
            else{
                html+=this.singleTemplateIP(req.data);
            }


            
            if(req.data.to && req.data.to.useMacBusy)
            {

                    html+=`   <div class="alert-box">
                              <h4>Come gia' segnalato nel form di richiesta:</h4>
                              il mac address selezionato ${ req.data.to.mac } è già in uso.
                              <h4><u>Seguira' pertanto comunicazione del Servizio Impianti Calcolo e Reti</u></h4>
                              </div>
                              `
            
            }

        }
        else{
            html+=`<h3>Periodo di navigazione temporaneo</h3>`
            html+=this.singleTemplateWifi(req.data);
        }

        this.target.innerHTML+=html+style;

        var goBack=this.target.querySelector("#goBack");
       
        goBack.addEventListener('click',ev=>{
         
            ev.preventDefault();
            UI.EmitChangeView("requests");
        })
    }

    fullName(h)
    {
        return h.config=='DHCP' ? "DHCP" : h.name+"."+h.domain;
    }

    changesTemplateIP(data)
    {
        var html=`
            <table>
                <thead>
                    <td></td>
                    <td>Da</td>
                    <td>A</td>
                </thead>
                <tbody>
                    <tr>
                        <td>Configurazione</td>
                        <td>${this.configMAP[data.from.config]}</td>
                        <td>${this.configMAP[data.to.config]}</td>
                    </tr>
                    <tr>
                        <td>Nome</td>
                        <td>${this.fullName(data.from)}</td>
                        <td>${this.fullName(data.to)}</td>
                    </tr>
                    <tr>
                        <td>Mac Address</td>
                        <td>${data.from.mac}</td>
                        <td>${data.to.mac}</td>
                    </tr>
                    <tr>
                        <td>Porta</td>
                        <td>${data.from.port}</td>
                        <td>${data.to.port}</td>
                    </tr>
                </tbody>
            </table>
        `

        return html;
    }

    singleTemplateIP(data)
    {
        var curr=data.to || data.from;
        var html=`
            <table>
                <tbody>
                    <tr>
                        <td>Configurazione</td>
                        <td>${this.configMAP[curr.config]}</td>
                    </tr>
                    <tr>
                        <td>Nome</td>
                        <td>${this.fullName(curr)}</td>
                     </tr>
                    <tr>
                        <td>Mac Address</td>
                        <td>${curr.mac}</td>
                    </tr>
                    <tr>
                        <td>Porta</td>
                        <td>${curr.port}</td>
                    </tr>
                </tbody>
            </table>
        `

        return html;
    }


    singleTemplateWifi(data)
    {
        var FORMAT="DD-MM-YYYY"
        var html=`<table>
                    <tr>
                        <td>Inizio</td>
                        <td>Fine</td>
                    </tr>
                    <tr>
                          
                            <td>
                                ${moment(data.from).format(FORMAT)}
                            </td>
                            <td>
                            ${moment(data.to).format(FORMAT)}
                        </td>
                    </tr>
                  </table>
        `

        return html;
    }


    getContent(){
       
        /*var {hash}=window.location;
        
        
        this.args={"rid":hash.split("/")[1]};
        if(!this.args.rid) UI.EmitChangeView("requests");*/
       
        return template.replace("[ID]",this.args.rid);
      
    }

}