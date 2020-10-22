const {getUserLDAP} = require('./ldap.js') 


//ritorna UTENTE LDAP
const getUser=async function(uid)
{
        
    //GUARDA NEL RAMO NAZIONALE perchè utenti con account di posta appena creato NON hanno is member of ROMA 1
    var queryLDAP =`(infnUUID=${uid})`
    
    var user=null;

    try{

            
            //LDAP
            var users_ldap=await getUserLDAP(queryLDAP);

           
            //console.log("users:",users_ldap);
            user=parseLDAPUserInfo(users_ldap[0])
           
            delete user['isMemberOf']
            delete user["schacUserStatus"];


        }
        catch(exc){
            console.log("exc:",exc);
            throw exc;
        }

    return user;
   
};


var parseLDAPUserInfo=function (user) {
    
    var cuser=Object.assign({}, user);

    
    var minTime="01/01/1900"
    var userStatus=user.schacUserStatus;
    
    //rimuove dall'alternateMailAddress se esiste mail principale per evitare duplicati
    cuser.mailAlternates=cuser.mailAlternates.map(e=>e.toLowerCase())
                                             .filter(e=>e.indexOf(cuser.email.toLowerCase())<0).sort()
    

    let ma=cuser.mailAlternates;
    
    cuser.mailAlternates=ma.filter(e=>e.match(/\w+\.\w+@/)).sort()
                        .concat(ma.filter(e=>!e.match(/\w+\.\w+@/)).sort())


    var isMemberOf=user.isMemberOf;
    var policies="" //disciplinare
    var itsec="" //corso sicurezza informatica
 
    //REGEXP
    //var roleReg=/^i:infn:\w+\::(\w)/ //Role
    var policiesReg=/disciplinareict:approvato\+on=(\S+)/  //Disciplinare
    var itsecReg=/sicurezzainformatica-base:superato\+on=(\S+)/ //corso sicurezza informatica
    var ttlReg=/\+ttl\=(\S+)/ //TTL
   
    cuser["isAuthorized"]=false;
    cuser["role"]=""
    //cuser["isAdmin"]=false; //è del centro calcolo
    
    if(userStatus && Array.isArray(userStatus)){
        for(let i=0;i<userStatus.length;i++){

            let ttl=ttlReg.exec(userStatus[i]);
            policies=policiesReg.exec(userStatus[i]) || policies
            itsec=itsecReg.exec(userStatus[i]) || itsec

            if(ttl && minTime!="nolimit"){
                curTime=ttl[1];
                if(curTime=="nolimit")
                {
                    minTime=curTime;
                }
                else{
                    if(curTime>minTime)
                    {
                        minTime=curTime;
                    } 
                }
            }
         
        }

        
        cuser["policies"]=policies[1] || "";
        cuser["itsec"]=itsec[1] || "";
        cuser["expiration"]=minTime;
    }

    
    if(isMemberOf){

        let role="";
        let isAdmin=false
        //controllo se autorizzato
        _isMemberOf = !Array.isArray(isMemberOf) ? [isMemberOf] : isMemberOf;
        

        _isMemberOf.forEach(e=>{
            //console.log(e);
            
            if(e.indexOf("i:infn:roma1:servizio_calcolo_e_reti")>-1)
            {
                isAdmin=true;
            }

            let match=e.match(/i:infn:roma1::([d|o|a|v])\:(\w+)/);
            
            if(match)
            {
                console.log(match)
                role=match[2]
            }
        })


        cuser["isAuthorized"]=role!=""
        cuser["role"]=role;
        cuser["isAdmin"]=isAdmin;

       
        

    }

    delete cuser["isMemberOf"]
    delete cuser["schacUserStatus"];


    
    return cuser;

}



module.exports={getUser}


