const bodyParser = require('body-parser')
const {getUser} = require('./api/user')
const location = require('./api/location')
const network = require('./api/network')
const requests = require('./api/requests')
const {ReadRequests}=require('./dispatcher/dispatcher');
const {authToken} =require('./api/auth')


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


 app.use('/auth/:uid?',authToken, async (req,res,next)=>{
  
  var user=null;

  try{
   
    var user = await getUser(req.user);
  
  }
  catch(exc)
  {
    console.log("exc:",exc)
    return res.status(500).json("Auth Server Error")
  }

  res.header('uid',req.user);
  //console.log(res.headers["uid"]);

  res.send(user)


  //res.json(user)

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

