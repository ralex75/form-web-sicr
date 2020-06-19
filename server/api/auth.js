



function authToken(req,res,next){
  
    var uid=req.headers["x-uuid"] || '50699576-15eb-49c6-a645-c07c0de9c402';
    //fasanelli
    //var uid=req.headers["x-uuid"] || 'f8d35e28-2532-43c8-989c-3faa58f5cba4';

    if(!uid){
      return res.sendStatus(401)
    }
  
    req.userid=uid;
  
    next();
  }

module.exports={authToken};