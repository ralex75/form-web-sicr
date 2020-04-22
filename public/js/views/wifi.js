const template=`
   <form>
      <div class="form_sez" style="height:200px;">
        <div class="form_intest">
          Periodo di navigazione
        </div>
        <div class="form_riga">
          <div class="form_col">
            <label for="fromdate">Inizio</label><br>
            <input class="datet" id="datef" name="from" required type="date" />  
          </div>
          <div class="form_col">
            <label for="todate">Fine</label><br>
            <input class="datet" name="to" required  type="date" />  
          </div>
     
        </div>
      </div>
      <div class="form_sez">
					<div class="form_pied cbutton">
					  <input type="submit" class="button_m" value="INVIA" />
					</div>	
			</div>		
  </form> 
       
        <style scoped>
        
        .datet{
            padding: 10px;
            font-size: 16px;
            border: 1px solid #DDD;
            width:260px;
            color:#999;
            text-align:center;
            box-sizing: border-box;

          }
          input::-webkit-inner-spin-button,input::-webkit-clear-button
          {
            opacity: 0;
          }
        /*
          input::-webkit-inner-spin-button,input::-webkit-clear-button
          {
            opacity: 0;
          }
          
          
          input::-webkit-calendar-picker-indicator{
           
            color: rgba(0, 0, 0, 0);
            
            width:30px;
            height:30px;
           
            z-index:1;
            opacity: 1;
         
            
           
            background-image: url('img/calendar.png');
            
            background-repeat: no-repeat;
            background-size: cover;
            
          }*/

          input[type="date"]::-webkit-calendar-picker-indicator {
            background: transparent;
           
            color: transparent;
            cursor: default;
            height: 20px;
           
            position: absolute;
            
            width: 260px;
        }
        
   /*     
        
          div.cal img{
            position: absolute;
            top:10px;
            right:14px;
            width: 40px;
            height: 40px;
            opacity: 0;
          }
*/
         

          .form_pied.cbutton{
            
          }

          .form_pied.cbutton:hover{
              border-color:#DD0;
          }

          .form_pied input[type=submit]{
              width:100%;
              
              color:#DDD;
              font-size:21px;
          } 
      </style>

`

import {Base,UI} from './base.js'

export class WIFI extends Base {

    constructor(target,args)
    {
       super(target,args);

       this.$from=this.target.querySelector("[name=from]");
       this.$to=this.target.querySelector("[name=to]");

       this.$form=this.target.querySelector("form");

        var date=moment().format('YYYY-MM-DD');
     
        this.$from.min=date;
        this.$from.value=date;
        this.$to.min=date;
        this.$to.value=date;
       
        this.target.querySelectorAll('[type=date]').forEach(el=>{
          el.addEventListener('click',ev=>{
            ev.target.blur();
          })
        })

       this.$from.addEventListener("input",ev=>{
          if(ev.target.value)
          {
            this.$to.min=ev.target.value;
            this.$to.value=ev.target.value;
          }
        });

        
        this.$form.addEventListener('submit',ev=>{
          ev.preventDefault()
          this.submitForm();
        })
       
      

    }

    submitForm(){

      var data={
        from:this.$from.value,
        to:this.$to.value,
      }
      
      UI.EmitSaveRequest("WIFI",data);
    }

    getContent()
    {
       
        return template;

    }

}