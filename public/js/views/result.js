const template=`
   

    <p class="res-content"></p>

    <style scoped>
        .error{
            color:#E00;
        }

        .res-content{
           padding:10px 0;
         
        }
    </stle>
`

import {Base,UI} from './base.js'
import services from '../services.js'

export class Result extends Base{
    
    constructor(target,args)
    {
       
        super(target,args);
       
        var {status, value, type}=args;
        this.$cont=this.target.querySelector(".res-content");
        
        if(status==undefined) status=true;
       
        if(!status)
        {
            //this.$cont.classList.add('error');
            this.$cont.innerHTML=`<h4>Si è verificato un errore.</h4><u>Contattare il Centro di Calcolo</u>`
        }
        else{

           
            switch(type)
            {
                case 'user':
                    this.displayUserProfileFeedback(value);
                break;
                case 'ip':
                    this.displayUserRequestIPFeedback(value);
                break;
                case 'wifi':
                    this.displayUserRequestWiFiFeedback(value);
                break;
            }
            
        }
    }
        
    displayUserRequestIPFeedback(value)
    {
        if(data)
        {
            this.$cont.innerHTML=`<h4>La sua richiesta è stata inserita correttamente.</h4>A breve riceverà una mail di riepilogo con i dati inseriti.`
        }
        else{
            this.$cont.innerHTML=`<h4>Non ci sono state modifiche, la sua richiesta non è stata inserita.</h4>`
        }
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

        this.$cont.innerHTML=content;
    }

   


    

    getContent(){
        return template;
    }
}