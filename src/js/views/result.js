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
        if(data.data)
        {
            content=`<h4>La sua richiesta è stata inserita correttamente.</h4>A breve riceverà una mail di riepilogo con i dati inseriti.`
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

       
        var {status, data}=this.args;
        
        var content="";
        
        if(status==undefined) status=true;
       
      
        if(!status)
        {
           content=`<h4 class="error">Si è verificato un errore.</h4><u>Contattare il Centro di Calcolo</u>`
        }
        else{

            
            switch(data.type)
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


        var tem=template.replace('[CONTENT]',content);
        console.log(tem);
        return tem;
    }
}