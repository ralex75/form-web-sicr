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
 
    cuser["isAuthorized"]=false;
    cuser["expiration"]=minTime;
    cuser["isAdmin"]=false; //è del centro calcolo
    
    var roleReg=/^i:infn:\w+\::(\w)/ //Role
    var disciplinareReg=/disciplinareict:approvato\+on=(\S+)/  //Disciplinare
    var ttlReg=/\+ttl\=(\S+)/ //Expiration

    
    if(userStatus && Array.isArray(userStatus)){
        for(var i=0;i<userStatus.length;i++){

            var ttl=ttlReg.exec(userStatus[i]);
            var disciplinare=disciplinareReg.exec(userStatus[i])
          
            if(disciplinare){
                cuser["disciplinare"]=disciplinare[1];
            }

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

        cuser["expiration"]=minTime;
    }

    
    if(isMemberOf){

       
        //controllo se autorizzato
        _isMemberOf = Array.isArray(isMemberOf) ? isMemberOf.join(";") : isMemberOf;
        if(_isMemberOf.indexOf("roma1")>-1)
        {
            cuser["isAuthorized"]=true;
        }

        var roles={"d":"dipendente","o":"ospite","a":"associato"}
        var role=""
        
        //trova il ruolo 
        _isMemberOf.split(";").filter(r=>r.startsWith("i:infn:")).forEach(e=>{
            var match=roleReg.exec(e);
            if(match){
                role=roles[match[1]];
            }
            if(e.indexOf("servizio_calcolo_e_reti")>-1){
                cuser["isAdmin"]=true;
            }
        })
        
        cuser["role"]=role

    }

    delete cuser["isMemberOf"]
    delete cuser["schacUserStatus"];


    
    return cuser;

}


/*getUserInfo('50699576-15eb-49c6-a645-c07c0de9c402').then(res=>{
    console.log(res);
})*/

module.exports={getUser}


