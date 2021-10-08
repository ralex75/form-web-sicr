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

import Abstract from './abstract'
import {Application} from '../app'


export class Result extends Abstract{
        
    constructor(target,args){
        super(target,args)
       
    }

    


    /*displayUserRequestIPFeedback(data)
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
            if(host && host.useMacBusy)
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
    }*/

    getRequestFeedback(){
        let lang=this.currentLanguage()
        let content=`<h4>La sua richiesta è stata inserita.</h4>A breve riceverà una mail di riepilogo con i dati inseriti.`
        if(lang!="ITA")
        content=`<h4>You request has been submitted.</h4>You will shortly receive a summary email with the data entered.`

        return content;
    }


    getContent(){

       
        let {status, type, data, next}=this.args; 
        let html="";

        if(!status)
        {
        
            var url=`<a href="mailto:supporto@roma1.infn.it">supporto@roma1.infn.it </a>`
            var loc={'ITA':`Spiacenti, si è verificato un problema, prego contattaci: ${url}`,
                      'ENG':`Sorry, an error has occurred, please contact us: ${url}`
                    }
           
           html=`<h3 class="error">${loc[this.currentLanguage()]}<h3>`

        }
        else{
            
            html=this.getRequestFeedback()
            Application.navigateToWithDelay(next||'profile',3000);
         
        }


        let tmp=template.replace('[CONTENT]',html);
        return tmp;
    }
}