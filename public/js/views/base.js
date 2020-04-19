export class Base{
    constructor(target,args)
    {
        this.args=args;
        this.target=target;
        
    }

    render(){
        this.target.innerHTML="<h1>NOT IMPLEMENTED</h1>"
    }
}