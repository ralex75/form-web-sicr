
//questo middleware invoca lo script di sincronizzazione per settare 
async function forceLDAPSync(req,res,next)
{
    var axios =require("axios");

    let uid=req.userid || req.params.uid

    const env="prod"
    const url=`http://ds.roma1.infn.it/cgi-bin/fix_roles.cgi?infnUUID=${uid}&env=${env}`
 
    //console.log("Force SYNC");
   
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
  
    var uid=req.headers["x-uuid"];
    
    if(!uid){
      return res.sendStatus(401)
    }
  
    req.userid=uid;

    next();

  }

module.exports={authToken,forceLDAPSync};