
//questo middleware invoca lo script di sincronizzazione per settare 
async function forceLDAPSync(req,res,next)
{
    var axios =require("axios");

    const env="test"
    const url=`http://ds.roma1.infn.it/cgi-bin/fix_roles.cgi?infnUUID=${req.userid}&env=${env}`
 
    console.log("Force SYNC");
   
    let response=null;

    try {
      response = await axios.get(url)
      console.log("DONE SYNC");
    } catch (err) {
      console.log(err);
      console.log("ERROR SYNC");
      response=err.response;
    }

    res.locals.syncResultMessage=response.data ? response.data.message :response;

    setTimeout(()=>{
      next();
    },2000)
    
}


function authToken(req,res,next){
  
   //Davide Vincenzo Biuso Rizzo
   //var testUUID="6c536aa5-da10-4416-8a6e-7efb2da13ddf"

    //fasanelli
    //var testUUID='f8d35e28-2532-43c8-989c-3faa58f5cba4';

    //mio
    var testUUID='50699576-15eb-49c6-a645-c07c0de9c402'

    //testUUID='e0589a86-9b55-48b9-84dc-1324750a4237'  //zicoschi
    //testUUID='9693b1cc-2c24-4a33-b0d2-40b03db16285' //diko
    
    var uid=req.headers["x-uuid"] || testUUID;

    if(!uid){
      return res.sendStatus(401)
    }
  
    req.userid=uid;
  

    next();
  }

module.exports={authToken,forceLDAPSync};