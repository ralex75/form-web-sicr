const bodyParser = require('body-parser')
const {getUser} = require('./api/user')
const location = require('./api/location')
const network = require('./api/network')
const requests = require('./api/requests')
const {ReadRequests}=require('./dispatcher/dispatcher');

//const {readAllRequests} = require('./handler');
//const history = require('connect-history-api-fallback');
const cors=require('cors')


module.exports = app => {
  
  app.use(bodyParser.json())
  app.use(cors())

  //app.use('/auth',auth.router)
  app.use('/loc',location)
  app.use('/net',network)
  app.use('/requests',requests)

  
  setInterval(()=>{
    //ReadRequests();
  },5000)


 app.use('/auth/:uid?',async (req,res,next)=>{
   
  
  var uid=req.headers["x-uuid"] || req.params.uid;
  
  if(!uid){
      return res.sendStatus(401)
  }

  var user=null;

  try{
   
    var user = await getUser(uid);
  
  }
  catch(exc)
  {
    console.log("exc:",exc)
    return res.status(500).json("Auth Server Error")
  }

  res.json(user)

})

 app.use('/user/list',async (req,res,next)=>{
  
  var users=[]
  var keywords=req.body.search;
  var onlyauth=req.body.onlyauth;

  try{

    if(keywords)
    {
      users = await getUserInfoByAny(keywords,onlyauth);
    }
    
  }
  catch(exc)
  {
    console.log("exc:",exc)
    return res.status(500).json({"exc":exc})
  }

  res.json(users)

})
 

}

