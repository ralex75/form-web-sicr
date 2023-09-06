
//questo middleware invoca lo script di sincronizzazione per settare 
async function forceLDAPSync(req,res,next)
{
    var axios =require("axios");

    let uid=req.userid || req.params.uid

    const env="prod"
    const url=`http://ds.roma1.infn.it/cgi-bin/fix_roles.cgi?infnUUID=${uid}&env=${env}`
 
    console.log("QUI")
       
    let response=null;

    try {
      response = await axios.get(url)
      console.log("DONE SYNC");
    } catch (err) {
      console.log("ERROR SYNC");
      response=err.response;
    }

    

    res.locals.syncResultMessage={"uid":uid,"status":response?.status || 500,"message":response?.data ? response.data?.message :"Error"}

   
    //timeout 5000 quando il sync è andato bene --- diamo tempo al db Godiva di sistemarsi...
    let timeout= res.locals.syncResultMessage!=200 ? 1 : 500;

    setTimeout(()=>{
      next();
    },timeout)
    
}


function authToken(req,res,next){
  
      //mio
      //var testUUID='3160f2fb-f0f1-489c-b56e-8ebfd4dbbeae'
      testUUID='50699576-15eb-49c6-a645-c07c0de9c402'
            
      var uid=req.headers["x-uuid"] || testUUID;

      if(!uid){
        return res.sendStatus(401)
      }
    
      req.userid=uid;

      next();

  }

module.exports={authToken,forceLDAPSync};