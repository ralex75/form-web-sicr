const template=`
    <div class='overlay'>
        <div class="dialog">
            <a href="#" class="dlg-close">&#x2573;</a>
            <h3 class="dlg-title"></h3>
            <div id="dlgcontent" >
                DIALOG
            </div>
            <div class="actions">
                <a href="#" name="yes" data-value="true" class="yes"><span>&#10003;</span> Si</a>
                <a href="#" name="no" data-value="false" class="no"><span>&#215;</span> No</a>
            </div>
        </div>
    </div>

<style scoped>
  div.dialog{
    width:600px;
    min-height:100px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background-color:#FFF;
    border:0px solid #DDD;
    padding:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  h3.dlg-title{
      
    border-bottom:1px solid #ADD;
    padding:6px 0;
      
  }

  a.dlg-close{
     float:right;
     font-size:20px;
     color:#00A;
     opacity:0.7;
     
  }
  a.dlg-close:hover{
    opacity:1;
  }

  div.overlay.show{
      display:block;
  }

  div.overlay{
      position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background-color:rgba(10,10,10,0.5);
      z-index:1;
      display:none;
  }

  div.actions
  {
      display:none;
      align-items:flex-end;
      justify-content:space-around;
      border-top:1px solid #DDD;
      padding:20px 0 0 0;
     
  }
  a.yes,a.no{
      display:none;
      border:1px solid #DDD;
      padding:10px 20px;
      width:120px;
      text-align:center;
     
  }

  a.yes.show,a.no.show{
    display:flex;
    align-items:center;
    justify-content: center;
    
  }

  a.yes span{
      color:#0D0;
      font-size:30px;
      margin:0 6px;
  }
  a.no span{
    color:#D00;
    font-size:36px;
    margin:0 6px;
 }
  
  #dlgcontent{
      padding-top:10px;
      min-height:100px;
  }

</style>
`
import {Base} from './base.js'
export class Dialog extends Base{
   
    showYesButton(cb=null)
    {
        this.showButton('yes',cb);
    }
    showNoButton(cb=null)
    {
        this.showButton('no',cb);
    }

    showButton(butName,cb)
    {
        var el=this.$dlg.querySelector(`a.${butName}`);
        this.callback[butName]=cb;
        el.className=`${butName} show`;
        el.parentElement.style.display='flex';
    }

    

    show()
    {
        this.$dlg.className= 'overlay show';
    }
    hide()
    {
        this.$dlg.className='overlay';
    }

    setTitle(text)
    {
        this.$dlg.querySelector(".dlg-title").innerText=text;
    }

    setMessage(text)
    {
        this.$message.innerHTML=text;
    }

    setContext(ctx){
        this.ctx=ctx;
    }

    getContent(){
        return template;
    }
    
    init()
    {
        
        this.callback={"yes":null,"no":null};

        this.$dlg=this.target.querySelector(".overlay")
        this.$message=this.$dlg.querySelector('#dlgcontent');
        this.$dlg.querySelector(".dlg-close").addEventListener('click',ev=>{
            ev.preventDefault();
            this.hide();
        })

        

        this.$dlg.querySelectorAll("div.actions > a").forEach(el => {
           
            el.addEventListener('click',ev=>{
               
                ev.preventDefault();
             
                if(this.callback[el.name])
                {
                    var fn=this.callback[el.name]
                    if(this.ctx)
                    {
                        fn=fn.bind(this.ctx);
                    }
                    
                    fn(el.dataset.value)
                    
                   
                }

                this.hide();
            })
        });
        
    }
}