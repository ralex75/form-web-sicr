var template=`

<style>
.loader {
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .inline{
      display:flex;
      justify-content: left;
      align-items:center;
      padding:50px 50px;
     
  }
  div.inline p{
      margin-left:30px;
  }
</style>


<div class="inline">
                <div class="loader"></div><p>[LOGOUT_MSG]...</p>
</div>
                       

`

import Abstract from './abstract'
import {Application} from '../app.js'

export class Logout extends Abstract{
    
    

    mounted(){
        
        let fragment = Application.language.current=="ENG" ? "/en/":"/";
        let returnUrl=`https://www.roma1.infn.it/Shibboleth.sso/Logout?return=https://www.roma1.infn.it/sicr${fragment}`
       
        setTimeout(() => {
           window.location.replace(returnUrl);
        }, 200);
    }

    getContent(){
        var loc={"ITA":"Disconnessione in corso","ENG":"Logging out"}
        var tpl=template.replace(/\[LOGOUT_MSG\]/,loc[Application.language.current])
        return tpl;
    }
}