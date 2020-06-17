



function authToken(req,res,next){
  
    var uid=req.headers["x-uuid"] || '50699576-15eb-49c6-a645-c07c0de9c402';
    //veca
    //var uid=req.headers["x-uuid"] || 'b4e656c7-bea6-457e-928a-7d0fed046dd4';

    if(!uid){
      return res.sendStatus(401)
    }
  
    req.userid=uid;
  
    next();
  }

module.exports={authToken};