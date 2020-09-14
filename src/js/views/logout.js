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
                <div class="loader"></div><p> Logging out...</p>
</div>
                       

`

import {Base} from './base.js'

export class Logout extends Base{
    
    init(){
        setTimeout(() => {
           window.location.replace("https://www.roma1.infn.it/Shibboleth.sso/Logout?return=http://www.roma1.infn.it/conference/wwwsicr/supporto");
        }, 200);
    }

    getContent(){
        return template;
    }
}