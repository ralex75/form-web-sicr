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
    var isMemberOf=user.isMemberOf;
    var disciplinare="" //disciplinare
    var itsec="" //corso sicurezza informatica
 
    //REGEXP
    var roleReg=/^i:infn:\w+\::(\w)/ //Role
    var disciplinareReg=/disciplinareict:approvato\+on=(\S+)/  //Disciplinare
    var sicurezzaInfoReg=/sicurezzainformatica-base:superato\+on=(\S+)/ //corso sicurezza informatica
    var ttlReg=/\+ttl\=(\S+)/ //TTL
   
    cuser["isAuthorized"]=false;
    cuser["role"]=""
    //cuser["isAdmin"]=false; //è del centro calcolo
    
    if(userStatus && Array.isArray(userStatus)){
        for(let i=0;i<userStatus.length;i++){

            let ttl=ttlReg.exec(userStatus[i]);
            disciplinare=disciplinareReg.exec(userStatus[i]) || disciplinare
            itsec=sicurezzaInfoReg.exec(userStatus[i]) || itsec

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

        
        cuser["disciplinare"]=disciplinare[1] || "";
        cuser["itsec"]=itsec[1] || "";
        cuser["expiration"]=minTime;
    }

    
    if(isMemberOf){

        let role="";
        //controllo se autorizzato
        _isMemberOf = !Array.isArray(isMemberOf) ? [isMemberOf] : isMemberOf;
        

        _isMemberOf.forEach(e=>{
            console.log(e);
            let match=e.match(/i:infn:roma1::([d|o|a|v])\:(\w+)/);
            if(match)
            {
                role=match[2]
            }
        })

        cuser["isAuthorized"]=role!=""
        cuser["role"]=role;

        /*
        var role=""

        //valid roles
        var roles={"d":"dipendente","o":"ospite","a":"associato"}
       
        

        //find user role 
        _isMemberOf.split(";").filter(r=>r.startsWith("i:infn:")).forEach(e=>{
            var match=roleReg.exec(e);
            if(match){
                role=roles[match[1]];
            }
            if(e.indexOf("servizio_calcolo_e_reti")>-1){
                cuser["isAdmin"]=true;
            }
        })*/
        
        //cuser["roma1Member"]=_isMemberOf.indexOf("roma1")>-1;
        //cuser["role"]=role
        //cuser["isAuthorized"]=cuser["role"]!="" && cuser["roma1Member"];
        

    }

    delete cuser["isMemberOf"]
    delete cuser["schacUserStatus"];


    
    return cuser;

}



module.exports={getUser}


