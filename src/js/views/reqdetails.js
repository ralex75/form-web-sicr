const template=`

   
    <h1>[request-header] - [ID]</h1>
    <!--<a href="#requests" id="goBack" style="text-decoration:underline;">[go-back]</a>-->
   
    
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
            /*justify-content:space-between;*/
        }
    </style>
`


import Abstract from './abstract'
import services from '../services.js'
import {Application} from '../app.js'

export class RequestDetails extends Abstract {

    constructor(target,args){
        super(target,args)
    }
    
    mounted(){

        var loc=this.locale()[Application.language.current]
        this.getRequest();
        this.configMAP={"STATIC":`${loc["configMAP"]["static"]}`,
                        "STATICVM":`${loc["configMAP"]["staticvm"]}`,
                        "DHCP":`${loc["configMAP"]["dhcp"]}`}

                        
       
    }

    


    async getRequest()
    {
        var req=null;
        try{
            var res=await services.requests.get(this.requestID);
            req=res.data;
        }
        catch(exc)
        {
           
            return document.location="#requests"
        }
       

        var html="";

        var loc=this.locale()[Application.language.current];
      
        if(req.rtype=="IP")
        {
           
            html+=`<h3>${loc.action[req.data.action]}</h3>`
            if(req.data.action=='update')
            {
                html+=this.changesTemplateIP(req.data);
            }
            else{
                html+=this.singleTemplateIP(req.data);
            }


            
            if(req.data.to && req.data.to.useMacBusy)
            {
                    if(Application.language.current=='ITA')
                    {
                    html+=`   <div class="alert-box">
                              <h4>Come gia' segnalato nel form di richiesta:</h4>
                              il mac address selezionato ${ req.data.to.mac } è già in uso.
                              <h4><u>Seguira' pertanto comunicazione del Servizio Impianti Calcolo e Reti</u></h4>
                              </div>
                              `
                    }
                    else{
                        html+=`<div class="alert-box">
                                <h4>Come gia' segnalato nel form di richiesta:</h4>
                                il mac address selezionato ${ req.data.to.mac } è già in uso.
                                <h4><u>Seguira' pertanto comunicazione del Servizio Impianti Calcolo e Reti</u></h4>
                            </div>
                            `
                    }
            }

        }
        else{
            html+=`<h3>Periodo di navigazione temporaneo</h3>`
            html+=this.singleTemplateWifi(req.data);
        }

        this.target.innerHTML+=html+style;

        /*this.target.querySelector("#goBack").addEventListener("click",(ev)=>{
            ev.preventDefault();
            Application.navigateTo("requests")
        })*/
        
       
    }

    fullName(h)
    {
        return h.config=='DHCP' ? "DHCP" : h.name+"."+h.domain;
    }

    locale(){
        return {
                "ITA":{"configMAP":{"static":"Indirizzo IP fisso","staticvm":"Indirizzo IP per macchina virtuale","dhcp":"Indirizzo IP dinamico (DHCP)"},
                       "template":{"request-header":"Dettagli della richiesta ID",
                                    "go-back":"Torna Indietro"},
                        "action":{"create":"Nuovo nodo","update":"Aggiornamento dati del nodo","delete":"Cancellazione nodo"},
                        "tableHeaders":{"from":"DA","to":"A",
                                           "config":"Configurazione",
                                           "name":"Nome",
                                           "mac":"Indirizzo MAC",
                                           "port":"Porta"},
                                },
                    
                "ENG":{"configMAP":{"static":"Static IP address","staticvm":"Virtual Machine Static IP Address","dhcp":"Dynamic IP Address (DHCP)"},
                        "template":{"request-header":"Request details ID",
                                     "go-back":"Go Back"},
                        "action":{"create":"New host","update":"Update host data","delete":"Delete host"},
                        "tableHeaders":{"from":"From","to":"To",
                        "config":"Configuration",
                        "name":"Name",
                        "mac":"MAC Address",
                        "port":"Port"},
                        }
               }
    }

    changesTemplateIP(data)
    {
        var loc=this.locale()[Application.language.current];
        var locTable=loc["tableHeaders"];

        var html=`
            <table>
                <thead id="table_intest">
                    <td id="table_intest"></td>
                    <td id="table_intest">${locTable["from"]}</td>
                    <td id="table_intest">${locTable["to"]}</td>
                </thead>
                <tbody>
                    <tr>
                        <td><div class="prof_lab">${locTable["config"]}</div></td>
                        <td>${this.configMAP[data.from.config]}</td>
                        <td>${this.configMAP[data.to.config]}</td>
                    </tr>
                    <tr>
                        <td><div class="prof_lab">${locTable["name"]}</div></td>
                        <td>${this.fullName(data.from)}</td>
                        <td>${this.fullName(data.to)}</td>
                    </tr>
                    <tr>
                        <td><div class="prof_lab" style="width:160px;">${locTable["mac"]}</div></td>
                        <td>${data.from.mac}</td>
                        <td>${data.to.mac}</td>
                    </tr>
                    <tr>
                        <td><div class="prof_lab">${locTable["port"]}</div></td>
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
        var loc=this.locale()[Application.language.current];
        var locTable=loc["tableHeaders"];

        var curr=data.to || data.from;
        var html=`
            <table>
            <thead id="table_intest">
                <td id="table_intest">&nbsp;</td>
                <td id="table_intest"></td>
           </thead>
                <tbody>
                    <tr>
                        <td><div class="prof_lab">${locTable["config"]}</div></td>
                        <td>${this.configMAP[curr.config]}</td>
                    </tr>
                    <tr>
                        <td><div class="prof_lab">${locTable["name"]}</div></td>
                        <td>${this.fullName(curr)}</td>
                     </tr>
                    <tr>
                        <td><div class="prof_lab" style="width:160px;">${locTable["mac"]}</div></td>
                        <td>${curr.mac}</td>
                    </tr>
                    <tr>
                        <td><div class="prof_lab">${locTable["port"]}</div></td>
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
                        <td id="table_intest">Inizio</td>
                        <td id="table_intest">Fine</td>
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
        
       
        this.requestID=this.args.rid;
        let tpl=template;
        
        var loc=this.locale()[Application.language.current].template;
        loc["ID"]=this.requestID;
        for(var k in loc)
        {
            tpl=tpl.replace(`[${k}]`,loc[k]);
        }

        return tpl;
      
    }

}