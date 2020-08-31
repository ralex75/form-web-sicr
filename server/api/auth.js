
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
      console.log("ERROR SYNC");
      response=err.response;
    }

    res.locals.syncResultMessage=response.data ? response.data.message :response;

    next();
}


function authToken(req,res,next){
  
   //Davide Vincenzo Biuso Rizzo
   var testUUID="1a9c5151-0104-4875-ae07-f76efe1fff10"

    //fasanelli
    //var testUUID='f8d35e28-2532-43c8-989c-3faa58f5cba4';

    testUUID='50699576-15eb-49c6-a645-c07c0de9c402'
    
    var uid=req.headers["x-uuid"] || testUUID;

    if(!uid){
      return res.sendStatus(401)
    }
  
    req.userid=uid;
  
    next();
  }

module.exports={authToken,forceLDAPSync};