
//questo middleware invoca lo script di sincronizzazione per settare 
async function forceLDAPSync(req,res,next)
{
    var axios =require("axios");

    const env="prod"
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
  
      //mio
      var testUUID='50699576-15eb-49c6-a645-c07c0de9c402'
      testUUID='952c0240-f47f-42f8-9a1b-3d02f331e8d5'
            
      var uid=req.headers["x-uuid"] || testUUID;

      if(!uid){
        return res.sendStatus(401)
      }
    
      req.userid=uid;

      next();

  }

module.exports={authToken,forceLDAPSync};