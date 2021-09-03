
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
    
      testUUID='d4595f93-51e8-473d-a47b-f5d70d355024'
      //testUUID='577cc87f-d431-4a8e-80dd-b29b9e0d57e5'
      
      //testUUID='b9abec6d-4ab1-4011-b344-682433ccead1'
      //testUUID="9228ab75-d9b0-4573-93af-cfd1a6f44848"
      
      
      var uid=req.headers["x-uuid"] || testUUID;

      if(!uid){
        return res.sendStatus(401)
      }
    
      req.userid=uid;

      next();

  }

module.exports={authToken,forceLDAPSync};