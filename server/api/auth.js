



function authToken(req,res,next){
    console.log(req.headers);
    var uid=req.headers["x-uuid"] || req.headers["uid"] || req.params.uid;

    if(!uid){
      return res.sendStatus(401)
    }
  
    req.user=uid;
  
    next();
  }

module.exports={authToken};