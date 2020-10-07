const bodyParser = require('body-parser')
const {getUser} = require('./api/user')
const location = require('./api/location')
const network = require('./api/network')
const requests = require('./api/requests')
const mail = require('./api/mail');
const {ReadRequests}=require('./dispatcher/bundle');
const {authToken,forceLDAPSync} =require('./api/auth')


const cors=require('cors')

module.exports = app => {
  
  app.use(bodyParser.json())
  app.use(cors())

  //app.use('/auth',auth.router)
  app.use('/loc', location)
  app.use('/net', authToken, network)
  app.use('/requests', authToken, requests)
  app.use('/mail',authToken,mail)
  
  setInterval(()=>{
    ReadRequests();
  },5000)



 app.use('/auth/:uid?',authToken,forceLDAPSync, async (req,res,next)=>{
  
  let user=null;
  let {syncResultMessage}=res.locals || "";


  try{
     user = await getUser(req.userid);
  }
  catch(exc)
  {
    console.log("exc:",exc)
    return res.status(500).json("Auth Server Error")
  }

  console.log("Invio risposta al client");

  
  res.json({"user":user,"syncResultMessage":syncResultMessage})

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


/*app.use("/*",(req,res)=>{
  res.status(404).send("Not Found")
})*/
 

}

