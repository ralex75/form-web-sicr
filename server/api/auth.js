
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

    res.locals.syncResultMessage={"status":response.status,"message":response.data ? response.data.message :response}

    //timeout 5000 quando il sync è andato bene --- diamo tempo al db Godiva di sistemarsi...
    let timeout= response.status!=200 ? 1 : 5000;

    setTimeout(()=>{
      next();
    },timeout)
    
}


function authToken(req,res,next){
  
   //Davide Vincenzo Biuso Rizzo
   //var testUUID="6c536aa5-da10-4416-8a6e-7efb2da13ddf"

    //fasanelli
    //var testUUID='f8d35e28-2532-43c8-989c-3faa58f5cba4';

    //mio
    var testUUID='50699576-15eb-49c6-a645-c07c0de9c402'

    //testUUID='33ad801a-39e0-405c-8abb-ed4b871d7ef7'
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