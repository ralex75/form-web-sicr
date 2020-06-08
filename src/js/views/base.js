export class UI {

    static ApplicationEvents={'ChangeView':'ChangeView','SaveRequest':'SaveRequest'}

    static EmitChangeView(view,args=null,delay=0)
    {   
        UI.cancelTimeout();
        UI.timeout=setTimeout(()=>{
            document.dispatchEvent(new CustomEvent(UI.ApplicationEvents.ChangeView,{'detail':{'view':view,'args':args},bubbles:true}))
        },delay)
    }

    static EmitEvent(name,args=null,bubbles=true)
    {
        document.dispatchEvent(new CustomEvent(name,{'detail':args,bubbles:bubbles}))
    }


    static ShowResultView(status=true,data="")
    {   
        UI.EmitChangeView('result',{"status":status,"data":data});
    }

    static EmitSaveRequest(type,data)
    {
        document.dispatchEvent(new CustomEvent(UI.ApplicationEvents.SaveRequest,{'detail':{'type':type,'data':data},bubbles:true}))
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
        this.init();
    }


    init()
    {}

    getName(){
        return this.constructor.name;
    }

    getContent()
    {
        return "<h1>NOT IMPLEMENTED</h1>"
    }


    render(){
        this.target.innerHTML= this.getContent();
    }
}