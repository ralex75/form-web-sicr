
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

    testUUID='0ebb4795-095f-4c18-b7ae-5beaec3f0334'
    //testUUID='6613182e-e87b-4041-8555-e8c1375e66e1'
    
    //testUUID='b9abec6d-4ab1-4011-b344-682433ccead1'

    //testUUID='6135a180-454a-4cb0-a917-1b0486d31e18'
    //testUUID='472afd6e-9c04-4561-990f-dbc9a2e7bb6a'
    
    //testUUID='fd4feca3-6520-424f-adfd-f4e482971ead'
    //testUUID='fd4feca3-6520-424f-adfd-f4e482971ead'

    //tirel
    //testUUID='7bbb4ccb-853d-4cdc-8849-a7072f2459bc'
    //fasanelli
    //testUUID='f8d35e28-2532-43c8-989c-3faa58f5cba4';

    //anzel
    //testUUID='c7da859d-0960-4fee-993d-917b9090620c'

    //brunengo
    //testUUID='0c792919-5d17-488d-b5df-bd66aea4ad22'

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