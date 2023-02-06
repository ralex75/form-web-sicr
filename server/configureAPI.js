const express = require('express')
const {getUser,getUsers} = require('./api/user')
const location = require('./api/location')
const network = require('./api/network')
const requests = require('./api/requests')
const mail = require('./api/mail');
const {ReadRequests}=require('./dispatcher/bundle');
const {authToken,forceLDAPSync} =require('./api/auth')
const logger=require('./api/logger')
const restore=require('./api/restore')
const snmpq=require('./api/snmpq')
const userdb=require('./api/userdb')


const cors=require('cors')

module.exports = app => {
  
  app.use(express.json())
  app.use(cors())

  
  app.use('/loc', location)
  app.use('/net', authToken, network)
  app.use('/requests', authToken, requests.router)
  app.use('/mail',authToken,mail)
  app.use('/status',logger)
  app.use('/restore', authToken, restore)
  app.use('/snmpquery',snmpq)
  app.use('/userdb',userdb)
  
  setInterval(()=>{
    //ReadRequests();
  },2000)

  //app.use('/auth/:uid?',authToken,forceLDAPSync, async (req,res,next)=>{
  app.use('/auth/:uid?',authToken, async (req,res,next)=>{
  
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

  
  res.json({"user":user,"syncResultMessage":syncResultMessage})

})

app.use("/user/sync/:uid",forceLDAPSync,async (req,res,next)=>{
  
  
  let {syncResultMessage}=res.locals || "";
  let {status,message}=syncResultMessage
  res.status(status).json(syncResultMessage)
})


 app.use('/user/list',async (req,res,next)=>{
  
  var users=[]
  var keywords=req.body.search;
  var onlyauth=req.body.onlyauth;
  
  try{
    
      users = await getUsers(keywords);
        
  }
  catch(exc)
  {
    console.log("exc:",exc)
    return res.status(500).json({"exc":exc})
  }

  res.json(users)

})


 

}

