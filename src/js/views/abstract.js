import {Application} from '../app'
//import {Result} from './result'
import services from '../services.js'

export default class {
    constructor(target,args)
    {
        this.target=target;
        this.args=args
    }

    mounted(){}

    getContent(){
        return "<h1>Abstract Component</h1>"
    }

    currentLanguage()
    {
        return Application.language.current
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

        
       
        Application.navigateTo("result",{'status':success,'type':type,'data':data,"next":"requests"})

      
       
    }
}