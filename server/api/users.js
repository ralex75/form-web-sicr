//var express = require('express');
//var router = express.Router();
var {userdb}=require("../db");
var moment=require('moment')
var querydip = require("../query.js");


const usrMapper={
    
    
    map:function(data){

        var usr=null;
        var item=data || data[0];

        if(item)
        {
            usr=usrMapper.init();
            usr={...usr,...item}
        }


        return usr;
    },

    init:function(){
        return {"isAuthorized":false, "stato":"","name":"","surname":"","email":"","phone":"","source":"","expiration":"","role":"","mailAlternate":""}
    }
    
   
}


const getUserDB=async function(queryStr,mapper=null){
     
    return new Promise(function(resolve,reject){

        userdb.any(queryStr).then(data=>{
            var usr=(mapper ? mapper(data):data);
            resolve(usr)
        }).catch(err=>{
            reject(err);
        })
    
    });

}

const getUserDBAll=async function(queryStr){
     
    return new Promise(function(resolve,reject){

        userdb.any(queryStr).then(data=>{
            resolve(data)
        }).catch(err=>{
            reject(err);
        })
    
    });

}

const getUserInfoByAny=async function(keywords,onlyAuthorized=true)
{
    var AND=""
    var ldapFilter= "";

    if(!keywords) return [];

    
    keywords.split(" ").forEach(k=>{
        AND+=" AND (x.cdf ilike '"+k+"%' OR x.nome ilike '%"+k+"%' OR x.cognome ilike '%"+k+"%')"
        //ldapFilter+="(|(cn="+k+"*)(mail=*"+k+"*)(schacPersonalUniqueID=*:CF:"+k+"*)(uid="+k+"*))"
        ldapFilter+="(|(cn="+k+"*)(mail=*"+k+"*)(schacPersonalUniqueID=*:CF:"+k+"*)(uid="+k+"*))"
        //ldapFilter+="(|(cn="+k+"*)(uid="+k+"*))"
    })

    /*if(ldapFilter!="")
    {
        ldapFilter="("+ldapFilter+")";
    }*/

    //var queryOsp="SELECT x.cdf as cf,x.nome as first_name ,x.cognome as last_name,x.email,x.tel1 as phone, 'USERDB' as source FROM ("+qo+") x WHERE x.stato like '% - Autorizzato'"+AND;
    //var queryFix="SELECT x.cdf as cf,x.nome as first_name ,x.cognome as last_name,x.email,x.tel1 as phone,'USERDB' as source FROM ("+qf+") x WHERE x.stato='Attivo'"+AND;

    var statoOSP= onlyAuthorized ? "'% - Autorizzato'"  : "'%'"
    var statoFIX = onlyAuthorized ? "='Attivo'": " like '%'"

    var queryUsrOspDB=`SELECT nome as \"name\", cognome as \"surname\", cdf as \"cf\", email, tel1 as \"phone\",'OSPITE' as \"role\", \"fine_visita\" as \"expiration\",'USERDIP' as \"source\",stato FROM (${querydip["ospiti"]}) x WHERE x.stato like ${statoOSP} ${AND}`;
    var queryUsrFixDB=`SELECT nome as \"name\", cognome as \"surname\", cdf as \"cf\", email, tel1 as \"phone\",'FISSO' as \"role\", \"expire_date\" as \"expiration\",  'USERDIP' as \"source\",stato FROM (${querydip["fissi"]}) x WHERE x.stato ${statoFIX} ${AND}`;
    
    //console.log("queryUsrOspDB:",queryUsrOspDB)
    //console.log("queryUsrFixDB:",queryUsrFixDB)

    var queryLDAP= onlyAuthorized ? "(&(isMemberOf=*i:infn:roma1::*)"+ldapFilter+")" : ldapFilter;
    
    return queryPeople(queryUsrOspDB,queryUsrFixDB,queryLDAP)
}

const getUserInfoByUID=async function(uid)
{
    
    var queryUsrOspDB="SELECT nome as \"name\", cognome as \"surname\", cdf as \"cf\", email, tel1 as \"phone\",'OSPITE' as \"role\", \"fine_visita\" as \"expiration\",'USERDIP' as \"source\" FROM ("+querydip["ospiti"]+") x WHERE x.stato like '% - Autorizzato' AND (upper(x.cdf) in ('"+uid+"') OR x.email in ('"+uid+"'))";
    var queryUsrFixDB="SELECT nome as \"name\", cognome as \"surname\", cdf as \"cf\", email, tel1 as \"phone\",'FISSO' as \"role\", \"expire_date\" as \"expiration\",  'USERDIP' as \"source\" FROM ("+querydip["fissi"]+") x WHERE x.stato='Attivo' AND (upper(x.cdf) in ('"+uid+"') OR x.email in ('"+uid+"'))";
    
    //SOLO RAMO LOCALE
    //var queryLDAP="(&(isMemberOf=*i:infn:roma1::*)(|(schacPersonalUniqueID=*:CF:"+uid+")(mail="+uid+")))";

    //GUARDA NEL RAMO NAZIONALE perchè utenti con account di posta appena creato NON hanno is member of ROMA 1
    var queryLDAP="(|(schacPersonalUniqueID=*:CF:"+uid+")(mail="+uid+"))";

    return queryPeople(queryUsrOspDB,queryUsrFixDB,queryLDAP)

}

var queryPeople=async function(queryOsp,queryFix,queryLDAP){

   
    var userList=[];
    var dateFormat='YYYY-MM-DD'

    
    try{

        var users={}
        //USERDB
        var users_osp_db=await getUserDBAll(queryOsp);
        var users_fix_db=await getUserDBAll(queryFix);
        
        
        //LDAP
        var users_ldap=await getUserLDAP(queryLDAP);
      
        //console.log("queryLDAP:DONE")
        
        users_osp_db.forEach(u=>{
            users[u.cf]=usrMapper.map(u);
        })

        users_fix_db.forEach(u=>{
            users[u.cf]=usrMapper.map(u);
        })


        users_ldap.forEach(u=>{
           
            var user=parseLDAPUserInfo(u);
            var udb=users[u.cf];
         
           
            if(udb)
            {
                 //prende data di scadenza + lontana
                if(moment(user.expiration,dateFormat).isValid && moment(udb.expiration,dateFormat).isValid)
                {
                    
                    if(moment(user.expiration,dateFormat).isBefore(moment(udb.expiration,dateFormat)))
                    {
                        user.expiration=udb.expiration;
                    }
                }
                
                //prende telefono da UDB (In LDAP non c'è)
                user.phone=udb.phone;
            }

            users[u.cf]=user;
              
        })

        Object.keys(users).forEach(k=>{
            userList.push(users[k]);
        })
        
    }
    catch(exc){
        throw exc;
    }

    return userList;
    
};


const getUserInfo=async function(uid)
{
        
    var querydip = require("../query.js");
    
    //console.log("UID",uid)
    
    //query verso USERDB
    var queryUsrOspDB="SELECT nome as \"name\", cognome as \"surname\", cdf as \"cf\", email, tel1 as \"phone\",'OSPITE' as \"role\", \"fine_visita\" as \"expiration\",'USERDIP' as \"source\" FROM ("+querydip["ospiti"]+") x WHERE x.stato like '% - Autorizzato' AND (upper(x.cdf) in ('"+uid+"') OR x.email in ('"+uid+"'))";
    var queryUsrFixDB="SELECT nome as \"name\", cognome as \"surname\", cdf as \"cf\", email, tel1 as \"phone\",'FISSO' as \"role\", \"expire_date\" as \"expiration\",  'USERDIP' as \"source\" FROM ("+querydip["fissi"]+") x WHERE x.stato='Attivo' AND (upper(x.cdf) in ('"+uid+"') OR x.email in ('"+uid+"'))";
    
    //SOLO RAMO LOCALE
    //var queryLDAP="(&(isMemberOf=*i:infn:roma1::*)(|(schacPersonalUniqueID=*:CF:"+uid+")(mail="+uid+")))";

    //GUARDA NEL RAMO NAZIONALE perchè utenti con account di posta appena creato NON hanno is member of ROMA 1
    var queryLDAP="(|(schacPersonalUniqueID=*:CF:"+uid+")(mail="+uid+"))";
    
    var user=null;

    try{

            
            //USERDB
            var users_osp_db=await getUserDB(queryUsrOspDB,usrMapper.map);
            var users_fix_db=await getUserDB(queryUsrFixDB,usrMapper.map);
        
            //LDAP
            var users_ldap=await getUserLDAP(queryLDAP);
            
            if(users_osp_db){
                user = users_osp_db
            }
            
            if(users_fix_db){
                user = users_fix_db
            }

            //console.log("User:",user);

            if(user){
                user["isAuthorized"]=true;
            }
            else{
                user=usrMapper.init(); //empty
            }

            
            var ldapUser=parseLDAPUserInfo(users_ldap[0])
                
            //console.log("ldapUser:",ldapUser);

           
            //console.log("LDAP User:",ldapUser);

            //se è autorizzato in LDAP copia tutti gli attributi della persona
            if(ldapUser.isAuthorized){
                
                /*user.cf= ldapUser.cf;
                user.isAuthorized=true;
                user.name=ldapUser.name;
                user.surname=ldapUser.surname;
                user.source=ldapUser.source;
                user.expiration=ldapUser.expiration;
                user.role=ldapUser.role;
                
                //disciplinare approvato?
                if(ldapUser.disciplinare)
                {
                    user.disciplinare=ldapUser.disciplinare;
                }*/

                 //AlternateEmailAddress
                /*if(ldapUser.mailAlternate){

                    var mailAlternate=ldapUser.mailAlternate;
                    
                    if(Array.isArray(ldapUser.mailAlternate))
                    {
                        mailAlternate=ldapUser.mailAlternate.join(";");
                    }
                    
                    user.mailAlternate+=mailAlternate+";";
                    
                }*/

                delete ldapUser['isMemberOf']
                delete ldapUser["schacUserStatus"];

                user={...ldapUser};

                var udb=users_fix_db || users_osp_db;

                //prende data di scadenza + lontana
                if(user.expiration!="nolimit" && udb)
                {
                    if(moment(user.expiration).isBefore(udb.expiration))
                    {
                        user.expiration=udb.expiration;
                    }
                }

                //copia il telefono da userdb se esiste
                if(udb)
                {
                    user.phone=udb.phone;
                }

            }
            
            // 07-01-2020 MAIL ALTERNATE NON SERVE PER IL MOMENTO 
            //user.mailAlternate=user.mailAlternate.split(";");

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


const getUserLDAP=async function(query){

    
    const ldap=require('ldapjs');
    const usr_list=[];

    const ldap_conf={
             url: 'ldap://dsa.roma1.infn.it',
        username: 'cn=daemon,dc=roma1,dc=infn,dc=it',
         userpwd: 'B9B80BE8-CC98-4A6C-9A92-463A87A6B147',
    }
    
    const client=ldap.createClient({
        url: ldap_conf.url
    });
    

    return new Promise(function(resolve,reject){

            client.on('connect',function(){
                
                client.bind(ldap_conf.username, ldap_conf.userpwd, function(err){
                    
                    if(err){
                        console.log(err);
                        reject("bind error:",err);
                    }

                    var opts={

                        filter:query,
                        scope: 'sub',
                        attributes: ['infnUUID','schacpersonaluniqueid', 'givenname', 'sn', 'mail', 'schacUserStatus','mailAlternateAddress','isMemberOf'],
                        paged:{pageSize:500},
                        timeLimit: 2000, // 10 minutes in seconds or limit of your choice

                    };

               
                    client.search('dc=infn,dc=it',opts,function(err,res){
                        if(err){
                            console.log(err);
                            reject("Query error:",err);
                        }

                        res.on('searchEntry',function(entry){
                           
                            try{
                                var ejson=entry.object;
                                var usr={};
                                var schac=ejson.schacpersonaluniqueid;
                                schac= Array.isArray(schac) ? schac[schac.length-1] : schac;
                                schac = schac.split(":");
                                usr.uuid=ejson.infnUUID;
                                usr.isMemberOf=ejson.isMemberOf;
                                usr.cf=schac[schac.length-1];
                                usr.email=ejson.mail;
                                
                                usr.name=ejson.givenname;
                                usr.surname=ejson.sn;
                                usr.source="LDAP";
                                usr.phone="0000";
                                usr.schacUserStatus=ejson.schacUserStatus;
                                //usr.mailAlternate=ejson.mailAlternateAddress;
                                usr_list.push(usr);
                            }
                            catch(exc)
                            {
                                console.log("exc:",exc)
                            }
                            //console.log('Email entry: ' + JSON.stringify(entry.object));

                        });
                        
                        res.on('searchReference', function(referral) {
                            console.log('referral: ' + referral.uris.join());
                        });
                        
                        res.on('error', function(err) {
                            console.error('error: ' + err.message);
                        });
                        
                        res.on('page', function(result) {
                            //console.log('page end');
                        });

                        res.on('end', function(result) {
                            //console.log('status: ' + result.status);
                            resolve(usr_list);
                        });
                    });
                    
                });

            });

    })

};

module.exports={
    getUserInfo,
    getUserInfoByAny
}