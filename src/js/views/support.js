const template=`
   <form>
      <div class="form_sez">
        <div class="form_intest">
          [header]
        </div>
        <p id="text"></p>
      </div>
     		
  </form> 
       
<style scoped>
        
*{
  
  box-sizing: border-box;

}

.success textarea{
    border-color:#2ecc71
}
.error textarea{
    border-color:#e74c3c
}
        


.form_pied{
  padding:1px;
}

#text{
  padding:6px;
}

#text a
{
  padding:6px 0;
 
  font-weight:normal;
}

#text h5{
  margin:3px 0;
}


#text hr{
  border:0;
  border-top:1px solid #DDD;
  
}

  </style>

`



import Abstract from './abstract'
import { Application } from '../app'



export class Support extends Abstract {

  constructor(target,args){
    super(target,args)
  }

   mounted()
    {
       
       let user=Application.user.current();
       let lang=Application.language.current;
       lang= lang == 'ITA' ? 'it' : "en_GB";
       let mailto=`<a href="mailto:supporto@roma1.infn.it?subject=${this.locale().subject}">${this.locale().body_supp}</a>`
       let url=`<a href="https://servicedesk.infn.it/servicedesk/customer/portal/97" target="_blank">${this.locale().body_pcsupp}</a>`
       //let url=`<a href="https://osticket.roma1.infn.it/support/open.php?email=${user.email}&name=${user.name}&surname=${user.surname}&lang=${lang}" target="_blank">${this.locale().body_pcsupp}</a>`
       let info=this.locale().body_pcsupp_info
     
       this.$text=this.target.querySelector("#text");
       this.$text.innerHTML=`${url}<br>${info}<br><hr><br>${mailto}`;

    }

    currentUser(){
      let usr=Application.user.current();
      return `${usr.name} ${usr.surname}`
    }

    locale(){
      var loc= {

              "ITA":{"header":"Supporto e segnalazioni",
                     "subject":`Richiesta supporto e segnalazioni: ${this.currentUser()}`,
                     "body_pcsupp":`<b>Assistenza tecnica per personal computer e/o portatili installati nel Dipartimento di Fisica</b>`,
                     "body_pcsupp_info":"<h5>Il servizio è comune al Dipartimento di Fisica e alla sezione di Roma 1 dell'INFN.</h5>",
                     "body_supp":`<b>Segnalazioni di malfunzionamenti e/o disservizi`,
                },
                    
                "ENG":{"header":"Support and outages",
                  "subject":`Richiesta supporto e segnalazioni: ${this.currentUser()}`,
                  "body_pcsupp":`<b>Technical support for desktop/laptop computers installed in the Department of Physics</b>`,
                  "body_pcsupp_info":"<h5>The service is shared between the Dept. of Physics and the INFN Section of Rome 1.</h5>",
                  "body_supp":`<b>Notices of failures and service outages`,
                },
                    
             }



      return loc[Application.language.current]
    }

    
    

    getContent()
    {
       
       var tpl=template;
       var loc=this.locale();

       for(var k in loc)
       {
         tpl=tpl.replace(`[${k}]`,loc[k]);
       }

        return tpl;

    }

}