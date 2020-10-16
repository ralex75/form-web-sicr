import {Application} from '../main'
import {Result} from './result'
import services from '../services.js'

export default class {
    constructor(target,args)
    {
        this.target=target;
        this.args=args
    }

    mounted(){
        throw Error("Abstract component")
    }

    getContent(){
        return "<h1>Abstract Component</h1>"
    }

    SaveRequest=async (type,data)=>{
        
        var success=false;
       
        if(data)
        {
           
            try
            {
                await services.requests.save(type,data)
                success=true;
            }
            catch(exc)
            {
                console.log("exc:",exc);
            }

        }

        var result={"status":success, "reqdata":{'type':type,'data':data}, "next":"requests"};

        let res=new Result(result)
       
        /*setTimeout(()=>{
            Application.navigateTo(result.next)
        },5000);*/

        Application.navigateToWithDelay(result.next,5000)

        //Application.setContent(this.target,res.getContent())
        this.target.classList.remove("fade-in");
        void this.target.offsetWidth;
        this.target.classList.add("fade-in");
        this.target.innerHTML=res.getContent();

      
       
    }
}