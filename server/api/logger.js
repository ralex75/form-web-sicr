const fs=require("fs")
const moment = require('moment')
const express = require('express');
const router = express.Router();
const {sendMail} =require("./mailer")


const dump=(fileName,data)=>{

    let path=__dirname+`/../logs/${fileName}.txt`
    let content="==================================\n"
    content+=moment().format("DD/MM/YYYY HH:MM")+"\n";
    content+="=====================================\n"
    content+=data+"\n"
    
    fs.appendFileSync(path,content)

}

router.post("/",(req,res)=>{
    let user=req.body.user;
        

    let txt=`
    
        <pre>
        Nominativo      : ${user.name} ${user.surname}
        uid             : ${user.uid || '---'}
        infnUUID        : ${user.uuid}
        -----------------------------------------------------------------
        Autorizzato     : ${user.isAuthorized ? 'SI': 'NO'}    
        -----------------------------------------------------------------
        Ruolo roma1     : ${user.role ? 'SI' : 'NO'}
        LOA2            : ${user.loa2 ? 'SI' : 'NO'}
        Disciplinare    : ${user.policies ? 'SI' : 'NO'}
        Corso sicurezza : ${user.itsec ? 'SI' : 'NO'}
        GraceTime       : ${user.gracetime ? 'SI' : 'NO'}
        </pre>
        
    `
        
    sendMail('supporto@roma1.infn.it','supporto@roma1.infn.it',	`form-web - user: ${user.name} ${user.surname} - bad status`,txt).then(res=>{
        console.log(`${user.name} ${user.surname} missing login requirements`)
    }).catch(err=>{
        console.log(err);
    }).finally(_=>{
        res.json({"txt":`Notification sent`})
    })

  

})


module.exports=router;