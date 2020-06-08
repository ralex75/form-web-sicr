const template=`
   

    <div class="res-content">[CONTENT]</div>

    <style scoped>
        .error{
            color:#E00;
        }

        .res-content{
           padding:20px;
         
         
        }
    </stle>
`

import {Base} from './base.js'


export class Result extends Base{
        
    displayUserRequestIPFeedback(data)
    {
       
        var content=""
        
        if(data)
        {
            content=`<h4>La sua richiesta è stata inserita correttamente.</h4>A breve riceverà una mail di riepilogo con i dati inseriti.`

            //o è aggiornamento o è un nuovo nodo
            var host=data.to || data.from;
            if(host.useMacBusy)
            {
                content+=`<br><br><h4>Come gia' segnalato nel form di richiesta:</h4>
                          il mac address selezionato ${ host.mac } è già in uso.
                          <h4><u>Seguira' pertanto comunicazione del Servizio Impianti Calcolo e Reti</u></h4>
                          `
            }

        }
        else{
          content=`<h4>Non ci sono state modifiche, la sua richiesta non è stata inserita.</h4>`
        }
    
        return content
    }

    displayUserRequestWiFiFeedback(data)
    {
        var content=`<h4>La sua richiesta è stata inserita correttamente.</h4>A breve riceverà una mail di riepilogo con i dati inseriti.`
        return content
    }

    displayUserProfileFeedback(user)
    {
        var content="";
       
        if(!user.isAuthorized)
        {
            content=`<h4>Attenzione<h4> Il suo stato risulta: <b class="error">NON AUTORIZZATO.</b>`
        }
        else{
            if(!user.disciplinare)
            {
                content=`<h4>Attenzione<h4> Il disciplinare non è stato ancora accettato.`
                //TO DO
                //link al disciplinare
            }
        }

        return content;
        
    }


    getContent(){

       
        var {status, reqdata}=this.args; 
        var content="";
       
        if(!status)
        {
           
           content=`<h4 class="error">Si è verificato un errore.</h4><u>Contattare il Centro di Calcolo</u>`

        }
        else{

            var {type,data} = reqdata;

            switch(type)
            {
                case 'USER':
                    content=this.displayUserProfileFeedback(data);
                break;
                case 'IP':
                    content=this.displayUserRequestIPFeedback(data);
                break;
                case 'WIFI':
                    content=this.displayUserRequestWiFiFeedback(data);
                break;
            }
         
        }


        var tmp=template.replace('[CONTENT]',content);
        return tmp;
    }
}