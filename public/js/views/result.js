const template=`
   

    <p class="res-content"></p>

    <style scoped>
        .error h4{
            color:#E00;
        }

        .res-content{
           padding:10px 0;
         
        }
    </stle>
`

import {Base,UI} from './base.js'

export class Result extends Base{
    
    constructor(target,args)
    {
       
        super(target,args);
        var {status,data}=args;
        this.$cont=this.target.querySelector(".res-content");
       
       
        if(!status)
        {
            this.$cont.classList.add('error');
            this.$cont.innerHTML=`<h4>Si è verificato un errore.</h4><u>Contattare il Centro di Calcolo</u>`
        }
        else{
            if(data)
            {
                this.$cont.innerHTML=`<h4>La sua richiesta è stata inserita correttamente.</h4>A breve riceverà una mail di riepilogo con i dati inseriti.`
            }
            else{
                this.$cont.innerHTML=`<h4>Non ci sono state modifiche, la sua richiesta non è stata inserita.</h4>`
            }
        }

       

    }

    

    getContent(){
        return template;
    }
}