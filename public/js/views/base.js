

export class UI{
    static EventList={'ChangeView':'ChangeView','SaveRequest':'SaveRequest'}

    static EmitChangeView(view,args=null,delay=0)
    {   
        UI.cancelTimeout();
        UI.timeout=setTimeout(()=>{
            document.dispatchEvent(new CustomEvent(UI.EventList.ChangeView,{'detail':{'view':view,'args':args},bubbles:true}))
        },delay)
    }

    static ShowResultView(status=true,args="")
    {   
        UI.EmitChangeView('result',{"status":status,"args":args});
    }

    static EmitSaveRequest(type,args)
    {
        document.dispatchEvent(new CustomEvent(UI.EventList.SaveRequest,{'detail':{'type':type,'data':args},bubbles:true}))
    }

    static cancelTimeout()
    {
        clearTimeout(UI.timeout);
        UI.timeout=null;
    }


}


export class Base{
    constructor(target,args)
    {
        this.args=args;
        this.target=target;
        this.render();
    }

    getName(){
        return this.constructor.name;
    }

    getContent()
    {
        return "<h1>NOT IMPLEMENTED</h1>"
    }

    render(){
        this.target.innerHTML=this.getContent();
    }
}