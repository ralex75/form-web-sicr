const template=`
   <form>
      <div class="form_sez" style="height:200px;">
        <div class="form_intest">
          Periodo di navigazione
        </div>
        <div class="form_riga row">
          <div class="form_col">
            <label>Inizio</label>
            <div class="cont">
                <input type="text" />
                <div class="calpick"></div>
                <input type="date" id="from">
            </div>
          </div>
          <div class="form_col">
          <label>Fine</label>
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
					  <input type="submit" class="button_m" value="INVIA" />
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

import {Base,UI} from './base.js'

export class WIFI extends Base {

    init()
    {
       this.$form=this.target.querySelector("form");
      
       this.$from=this.target.querySelector("#from");
       this.$to=this.target.querySelector("#to");

       var date=moment().format("YYYY-MM-DD");

       /*this.$from.min=date;
       this.$from.value=date;
      
       this.$to.min=date;
       this.$to.value=date;*/

       //this.$from.previousElementSibling.previousElementSibling.value=moment(date).format('DD-MM-YYYY');

       this.target.querySelectorAll('[type=date]').forEach(el=>{
          el.min=date;
          el.value=date;
          this.setDate(el,date);
          el.addEventListener('change',ev=>{
            if(ev.target.value)
            {
              this.setDate(el,ev.target.value);
            }
          })
        })

        //this.$from.previousElementSibling.previousElementSibling.value=moment(date).format('DD-MM-YYYY');
        //this.setDate(this.$from,moment(date).format('DD-MM-YYYY'));

       /*

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
        });*/

        
        this.$form.addEventListener('submit',ev=>{
          ev.preventDefault()
          this.submitForm();
        })
       
      

    }

    setDate(el,value)
    {
      
      var d_it=moment(value).format("DD-MM-YYYY");
      var d_en=moment(value).format("YYYY-MM-DD");
      el.parentElement.querySelector("input[type=text]").value=d_it;
      if(el.id=='from')
      {
        this.$to.parentElement.querySelector("input[type=text]").value=d_it;
        this.$to.min=d_en;
        this.$to.value=d_en;
      }
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