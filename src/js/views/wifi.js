const template=`
   <form>
      <div class="form_sez" style="height:200px;">
        <div class="form_intest">
          [header]
        </div>
        <div class="form_riga row">
          <div class="form_col">
            <label>[from]</label>
            <div class="cont">
                <input type="text" />
                <div class="calpick"></div>
                <input type="date" id="from">
            </div>
          </div>
          <div class="form_col">
          <label>[to]</label>
            <div class="cont">
                <input type="text" />
                <div class="calpick"></div>
                <input type="date" id="to">
            </div> 
          </div>
     
        </div>
      </div>
      <div class="form_sez">
					<div class="form_pied cbutton">
					  <input type="submit" class="button_m" value="[send]" />
					</div>	
			</div>		
  </form> 
       
<style scoped>
        
*{
  
  box-sizing: border-box;

}
.row{
  display: flex;
}
.calpick{

position: absolute;
width:30px;
height: 100%; 
background-image: url('img/calendar.png');
background-repeat: no-repeat;
background-position: center center;
right: 1px;

}
div.cont {
position: absolute;
display: flex;
align-items: center;
width:160px;
height: 30px;
padding:16px 1px;
border: 1px solid #DDD;
}

div.cont:hover{
    border-color:lightblue;
}

input[type=text] {
    position: absolute;
    border: 0;
    width: 99%;
    padding: 6px 0 6px 10px;
    margin:1px;
    outline: none;
    right: 0px;
}

input[type=date] {
 
 position: absolute;
 opacity: 0;
 width: 100%;
 height: 100%;
 right: 0px;

}

input::-webkit-calendar-picker-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    right: 0px;
    
}       
  
         

.form_pied{
  padding:1px;
}

.form_pied:hover > input[type=submit]{
  background-color:#FFF;
  color:#000;
  letter-spacing:10px;
 
}

  .form_pied input[type=submit]{
      width:100%;
      padding:10px;
      color:#FFF;
      font-size:21px;
      outline:0;
      transition: 0.5s ease-in-out;
  } 
  </style>

`


//import {Application} from '../app.js'
import Abstract from './abstract'
import { Application } from '../app'

import moment from 'moment'

export class WIFI extends Abstract {

  constructor(target,args){
    super(target,args)
  }

   mounted()
    {
       //const user=Application.user.current();
       let email=Application.user.current().roma1Email();
       if(email)
       {

          var loc=this.locale();
          var isEng=Application.language.current=='ENG';
          
          let html="<div class=\"form_sez\"><div class=\"form_intest\">"
          html+=loc.form.header
          html+="</div>"
          if(!isEng)
          {
            html+="<p style=\"width:80%;\">Attenzione, attualmente sei in possesso di un account roma1. \
                    <br>Per il WIFI puoi utilizzare le reti <b>eduroam</b> o <b>dot1x</b></p>"
          }
          else{
            html+="<p style=\"width:80%;\">Warning, you currently have a roma1 account. \
                    <br>Therefore you can use the <b>eduroam</b> or <b>dot1x</b> wifi.</p>"
          }
          html+="</div>"

          
          this.target.innerHTML=html;
          
          return;
       }

       this.$form=this.target.querySelector("form");
      
       this.$from=this.target.querySelector("#from");
       this.$to=this.target.querySelector("#to");

       var date=moment().format("YYYY-MM-DD");

       
       this.target.querySelectorAll('[type=date]').forEach(el=>{
        
          el.min=date;
          el.value=date;
          this.setDate(el,date);
          
          //serve in firefox per prevenire il keydown sul calendario
          el.addEventListener('keydown',ev=>{
            ev.preventDefault()
          })
          el.addEventListener('change',ev=>{
            if(ev.target.value)
            {
              this.setDate(el,ev.target.value);
            }
          })
        })

        
        
        this.$form.addEventListener('submit',ev=>{
          ev.preventDefault()
          this.submitForm();
        })
       
      

    }

    locale(){
      var loc= {
              "ITA":{"form":{"header":"Periodo di navigazione","from":"Inizio","to":"Fine","send":"Invia","format":"DD-MM-YYYY"}},
                    
              "ENG":{"form":{"header":"Browsing time","from":"From","to":"To","send":"Send","format":"YYYY-MM-DD"}},
                    
             }

      return loc[Application.language.current]
    }

    setDate(el,value)
    {
      
      var loc=this.locale();
      //var d_it=moment(value).format("DD-MM-YYYY");
      var d_en=moment(value).format("YYYY-MM-DD");
      var d=moment(value).format(loc["form"]["format"]);
      /*el.parentElement.querySelector("input[type=text]").value=d_it;
      if(el.id=='from')
      {
        this.$to.parentElement.querySelector("input[type=text]").value=d_it;
        this.$to.min=d_en;
        this.$to.value=d_en;
      }*/
      el.parentElement.querySelector("input[type=text]").value=d;
      if(el.id=='from')
      {
        this.$to.parentElement.querySelector("input[type=text]").value=d;
        this.$to.min=d_en;
        this.$to.value=d_en;
      }
    }

    submitForm(){

      var data={
        from:this.$from.value,
        to:this.$to.value,
      }
      
      this.SaveRequest(Application.requestTypes.WIFI,data);
    }

    getContent()
    {
       
       var tpl=template;
       var loc=this.locale().form;

       for(var k in loc)
       {
         tpl=tpl.replace(`[${k}]`,loc[k]);
       }

       
       
        return tpl;

    }

}