var express = require('express');
var router = express.Router();
var {sendMail}=require('./mailer');
var {nqdb:db}=require("./db");
//var helper=require("./helper.js");

router.get("/:id",(req,res)=>{
    db.one("select * from user_requests where id=$1",req.params.id)
    .then(data=>{
        res.json(data);
    })
})

router.post('/list',(req,res)=>{
    
    var uid=req.body.uid;
    var type=req.body.type;
    var query=`select id, req_date, conf_date, notific_date, process_date, exc, rtype, data from user_requests`;
    var params={};


    if(uid || type)
    {
        
       
        var idx=0;
        
        if (uid)
        {
          params[`uid=$${++idx}`]=uid;
          
        }
        
        if (type)
        {
           params[`rtype=$${++idx}`]=type;
        }

        query+=" WHERE "+Object.keys(params).join(" and ")

        
    }

    
    
    query+=" order by id";

    /*console.log("query:",query)
    console.log("pars:",Object.values(params))*/

    db.query(query,Object.values(params)).then(data=>{
        res.json(data);
       
    }).catch(err=>{
        res.status(500).json({"err":err})
    })
});



router.post('/save', (req,res)=>{
    
    const moment = require('moment');

    const {uid,type,data}=req.body;
  
    const now=moment().format('YYYY-MM-DD:HH:mm:ss');
    
    //isValidData(type,data);

    db.one("insert into user_requests (uid, req_date, data, rtype,status) VALUES($1,$2,$3,$4,'SUBMITTED') RETURNING id",[uid,now,data,type])
    .then(data => {
        // success, COMMIT was executed

        res.json(data);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json(error);
    
    });

    
    
})

var isValidData=function(type,data)
{

    if(!type) return isvalid;
    
    var isvalid=true;

    switch(type.toLowerCase())
    {
        case "ip":
                var requiredFields=['action','from','to'];
                
            break;
        case "wifi":

            break;
    }
}




router.post("/notify",async (req,res)=>{
    
    var {email,token}=req.body;
    var usrreq=await helper.getRequest(token);
    
    var fs=require('fs');
    var path=__dirname+"/../text/confirm.html";
    var txt=fs.readFileSync(path,'utf-8');
    var url=req.protocol + '://' + req.get('host')+"/"+token+"/confirm";
    txt=txt.replace(/\[URL\]/gi,url);

    
    try{

        
        //console.log("type:",usrreq.data.usr);
      
        if(usrreq.rtype=="WIFI-LIMIT"){
            
            var uemail=usrreq.sdata.usr.email;
            //console.log("send to other user")
            var notEmailTxt=fs.readFileSync(__dirname+"/../text/notification.html",'utf-8');
            await sendMail(uemail,"Avviso di notifica",notEmailTxt);
    
        }
        
        await sendMail(email,"Confirm your request",txt);
      

    }
    catch(exc){
        console.log({"msg":"Error in notification mail","exc":exc});
        res.status(500).json({success:false})
    }

    res.status(200).json({success:true})
   
})




module.exports=router;