const template=`
    <section class='dialog'>
        <div class="dlg-content">
            <a href="#" class="dlg-close">&#x2573;</a>
            <h3 class="dlg-title"></h3>
            <div class="dlg-message">
                DIALOG
            </div>
           
            <div class="dlg-actions">
                <a href="#" name="yes" data-value="true" class="yes"><span>&#10003;</span>[YES]</a>
                <a href="#" name="no" data-value="false" class="no"><span>&#215;</span>No</a>
            </div>
        </div>
    </section>

<style scoped>


  small.error{
      color:red;
  }
  small.check{
      color:green;
  }

  .dialog::before{
    content:'';
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    
    
    background-color:rgba(100,100,100,0.5);
    z-index:1;

   
  }

  .dlg-content{
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
    z-index:10;
   
  }

  .dialog .dlg-content,.dialog::before{
    display:none;
  }

  .dialog.show .dlg-content,.dialog.show::before{
    display:block;
  }

  h3.dlg-title{
      
    border-bottom:1px solid #ADD;
    padding:6px 0;
      
  }

.dlg-message{
    padding-top:10px;
    min-height:100px;
    padding-bottom:20px;
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

  .dlg-actions
  {
      display:block;
      min-height:50px;
      align-items:center;
      justify-content:space-around;
      border:0px solid #DDD;
      border-top:1px solid #ADD;
      padding-top:20px
     
      
  }


  .dlg-actions a{
      display:none;
      border:1px solid #DDD;
      padding:6px 20px;
      width:120px;
      text-align:center;
  }

  .dlg-actions a:hover{
      border-color:#4697b8;
  }

  .dlg-actions a.show{
    display:flex;
    align-items:center;
    justify-content: center;
    
  }

  a.yes span{
      color:#0D0;
      font-size:36px;
      margin:0 3px;
     
  }
  a.no span{
    color:#D00;
    font-size:36px;
    margin:0 6px;
   
 }
  

</style>
`

import {Application} from '../app'

export class Dialog{
   
    constructor(target,args)
    {
        this.target=target;
        this.args=args;
        this.target.innerHTML=this.getContent();
        this.mounted();
    }

    showYesButton(cb=null)
    {
        if(cb)
        this.showButton('yes',cb);

        return this;
    }

    showNoButton(cb=null,title=null)
    {
        if(cb)
        this.showButton('no',cb,title);
 
        return this;
    }

    

    showButton(butName,cb,txt)
    {
        var el=this.$dlg.querySelector(`a.${butName}`);
        this.callback[butName]=cb;
        el.className=`${butName} show`;
        el.parentElement.style.display='flex';
        if(txt)
        {
            el.innerText=txt;
        }
    }

    showHide()
    {
        this.$dlg.classList.toggle('show');
    }
    

    setTitle(text)
    {
        this.$dlg.querySelector(".dlg-title").innerHTML=text;

        return this;
    }

    setMessage(text)
    {
        this.$dlg.querySelector(".dlg-message").innerHTML=text;
        return this;
    }

    setContext(ctx){
        this.ctx=ctx;
        return this;
    }
   

    getContent(){
        var tpl=template;
        var lang=Application.language.current;
        var yesText= lang=="ITA" ? "Si" : "Yes"
        tpl=tpl.replace("\[YES\]",yesText)
        return tpl;
    }
    
    mounted()
    {
        
        this.callback={"yes":null,"no":null};

        this.$dlg=this.target.querySelector(".dialog")
        this.$dlg.querySelector(".dlg-close").addEventListener('click',ev=>{
            ev.preventDefault();
            this.showHide();
        })

        this.$dlg.querySelectorAll(".dlg-actions > a").forEach(el => {
           
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

                this.showHide();
            })
        });
        
    }
}

export class DialogWrapper{

      constructor(dialogPlaceHolder){
          this.dlg=new Dialog(dialogPlaceHolder);
      }
      //DIALOG PROMPT
      showDialog(title,message,okCallback=null,noCallback=null)
      {
  
          //var dlgplace=this.target.querySelector("#dialogPlaceHolder")
          //let dlg=new Dialog(this.dlg);
          
          //callback anonymous function non serve il .bind(this)
          this.dlg.showYesButton(okCallback)
              .showNoButton(noCallback)
              .setTitle(title)
              .setMessage(message)
              .showHide();
  
      }
      closeDialog(){
        this.dlg.showHide();
      }

      get nativeDialog(){
        return this.dlg;
      }
}