
const valueOrDefault=(value)=>{
    return value || "---"
}

function userInfo(user){
   

    let userEmails=user.mailAlternates.filter(m=>m.indexOf(user.mail)<0).join(";")
    
    let txt=`
        
        Nome               : ${user.name} 
        Cognome            : ${user.surname}
        UID                : ${valueOrDefault(user.uid)}
        INFN UUID          : ${user.uuid}
        CF                 : ${(user.cf!=user.uid) ? valueOrDefault(user.cf) : "---"}
        Email              : ${valueOrDefault(user.email)}
        Email alternativi  : ${valueOrDefault(userEmails).split(";").join(`\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)}
        Telefono           : ${valueOrDefault(user.phone)}
        Ruolo              : ${valueOrDefault(user.role)}
        Scadenza           : ${valueOrDefault(user.expiration)}
       
    `
    return txt.trim().split("\n").map(e=>e.trim()).join("\n");

}

function completeUserInfo(user){
   
    let txt=`${templates.userInfo(user)}
            -----------------------------------------------------------------
            Afferenza Roma1    : ${user.roma1 ? 'SI' : 'NO'}
            LOA2               : ${user.loa2 ? 'SI' : 'NO'}
            Disciplinare       : ${user.policies ? 'SI' : 'NO'}
            Corso sicurezza    : ${user.itsec ? 'SI' : 'NO'}
            GraceTime          : ${user.gracetime ? 'SI' : 'NO'}
            -----------------------------------------------------------------
            Autorizzato        : ${user.isAuthorized ? 'SI': 'NO'}`
            
    
    return txt.trim().split("\n").map(e=>e.trim()).join("\n");
}

const templates={
    userInfo,
    completeUserInfo
}


module.exports = {templates}
