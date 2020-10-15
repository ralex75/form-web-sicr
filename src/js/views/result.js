const template=`
   

    <div class="res-content">[CONTENT]</div>

    <style scoped>
        .error{
            color:#E00;
        }

        h3.error{
            padding:20px;
            text-align:center;
        }

        .res-content{
           padding:20px;
         
        }
    </stle>
`


import {Application} from '../main'


export class Result {
        
    constructor(args){
        this.args=args;
    }

    displayUserRequestIPFeedback(data)
    {
       
        var content=""
        var lang=Application.language.current;
        
        if(data)
        {
            if(lang=="ITA")
                content=`<h4>La sua richiesta è stata inserita.</h4>A breve riceverà una mail di riepilogo con i dati inseriti.`
            else
                content=`<h4>You request has been submitted.</h4>You will shortly receive a summary email with the data entered.`

            //o è aggiornamento o è un nuovo nodo
            var host=data.to || data.from;
            if(host.useMacBusy)
            {
                if(lang=="ITA")

                    content+=`<br><br><h4>Come gia' segnalato nel form di richiesta:</h4>
                            il mac address selezionato ${ host.mac } è già in uso.
                            <h4><u>Seguira' pertanto comunicazione del Servizio Impianti Calcolo e Reti</u></h4>
                            `
                else
                    content+=`<br><br><h4>Come gia' segnalato nel form di richiesta:</h4>
                              il mac address selezionato ${ host.mac } è già in uso.
                                <h4><u>Seguira' pertanto comunicazione del Servizio Impianti Calcolo e Reti</u></h4>
                            `
            }

        }
        /*
        else{
            if(lang=="ITA")
                content=`<h4>Non ci sono state modifiche, la sua richiesta non è stata inserita.</h4>`
            else
                content=`<h4>Non ci sono state modifiche, la sua richiesta non è stata inserita.</h4>`
        }*/
    
        return content
    }

    displayUserRequestWiFiFeedback(data)
    {
        var content=`<h4>La sua richiesta è stata inserita correttamente.</h4>A breve riceverà una mail di riepilogo con i dati inseriti.`
        return content
    }

    displayUserAccountFeedback(user)
    {
        var content=`<h4>La sua richiesta è stata inserita correttamente.</h4>A breve riceverà una mail di riepilogo con i dati inseriti.`
        return content
    }


    getContent(){

       
        var {status, reqdata}=this.args; 
        var content="";

      

        if(!status)
        {
        
            var url=`<a href="mailto:support@roma1.infn.it">support@roma1.infn.it </a>`
            var loc={'ITA':`Spiacenti, si è verificato un problema, prego contattaci: ${url}`,
                      'ENG':`Sorry, an error has occurred, please contact us: ${url}`
                    }
           
           content=`<h3 class="error">${loc[Application.language.current]}<h3>`

        }
        else{

       
            var {type,data} = reqdata;
            var types=Application.requestTypes;

            switch(type)
            {
                case types.ACCOUNT:
                    content=this.displayUserAccountFeedback(data);
                break;
                case types.IP:
                    content=this.displayUserRequestIPFeedback(data);
                break;
                case types.WIFI:
                    content=this.displayUserRequestWiFiFeedback(data);
                break;
            }
         
        }


        var tmp=template.replace('[CONTENT]',content);
        return tmp;
    }
}