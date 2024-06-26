var {userdb}=require("./db");
var moment=require('moment')
const {querydip} = require("./query.js");
const express = require('express');
const router = express.Router();

const getUserDBAll=async function(queryStr){
     
    return new Promise(function(resolve,reject){

        userdb.any(queryStr).then(data=>{
            resolve(data)
        }).catch(err=>{
            reject(err);
        })
    
    });

}

const getUsers=async function(keywords)
{
    let _keywords=keywords.trim().replace(/\'/g,"''")
    let AND=""

    var statoOSP = "'%'"
    var statoFIX = " like '%'"

    let queryOsp=`SELECT nome as \"name\", cognome as \"surname\", cdf as \"cf\", email, tel1 as \"phone\",'OSPITE' as \"role\",tipo as "qualifica","nomi_enti" as "ente", inizio_visita, fine_visita, tipo, gruppo, stato, referente,responsabile FROM (${querydip["ospiti"]}) x WHERE (nome || cognome || cdf || email || tel1) ilike '%${_keywords}%' OR (nome ||' ' || cognome) ilike '${_keywords}%' order by x.cognome`;
    let queryFix=`SELECT nome as \"name\", cognome as \"surname\", cdf as \"cf\", email, tel1 as \"phone\",'FISSO' as \"role\", qualifica, ente,expire_date, stato FROM (${querydip["fissi"]}) x WHERE (nome || cognome || cdf || email || tel1) ilike '%${_keywords}%' OR (nome ||' ' || cognome) ilike '${_keywords}%' order by x.cognome`;
    
    var users_osp_db=await getUserDBAll(queryOsp);
    var users_fix_db=await getUserDBAll(queryFix);
    users=users_fix_db.concat(users_osp_db)
    return users
}

router.post("/list",async (req,res)=>{
    
    let results=[]
    let exc=""
    try{
        results=await getUsers(req.body.search)
    }
    catch(exc){
        console.log(exc)
        exc=exc;
    }
    finally{
        res.json(results)
    }
   
    
})

module.exports=router;