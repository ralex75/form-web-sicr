//import axios from "axios"

//axios.defaults.baseURL = 'http://webapp-dev.roma1.infn.it';
axios.defaults.baseURL = 'http://localhost:3000/';


function checkUserAuth(fail=null){
   
   if(fail)
    return axios.get("/api/checkauth/fail")
   else
    return axios.get("/api/checkauth")
   
}

const user={

    getProfile:function(uid){
       var path="/auth";
       if(uid)
         path+=(`/${uid}`);

       return axios.get(path)
    },

    list:function(search,onlyauth=true,token){
        return axios.post("/user/list",{"search":search,"onlyauth":onlyauth},{cancelToken:token});
    },

    current:function(){
        return JSON.parse(localStorage.getItem("uinfo"));
    },

    id:function() {
        return user.current().uuid
    }

}

const locations={

    getFloors:function(b){
        return axios.get(`/loc/${b}/floors`)
    },

    getRooms:function(b,f){
        return axios.get(`/loc/${b}/floors/${f}/rooms`)
    },

    //locid => id della locazione NON il nome della stanza!
    getPorts:function(locid){
        return axios.get(`/loc/rooms/${locid}/ports`)
    },

    getByPortCode(portcode){
        return axios.get(`/loc/byport/${portcode}`)
    },

  

}

const net={

    exists:function(value) {
        return axios.get(`/net/exists/${value}`)
    },

    lookup:function(value) {
        return axios.get(`/net/lookup/${value}`)
    },

    getHost:function(value) {
        return axios.get(`/net/hosts/${value}`)
    },

    getHostList:function(usercf) {
        return axios.get(`/net/hostlist/${usercf}`)
    },

    getHostsPortLink:function(port){
        return axios.get(`/net/port/${port}/hosts`)
    },

    getVlanID(portcode){
        return axios.get(`/net/portcode/${portcode}/vlan`)
    }

}

const REQ_TYPE={"IP":"IP","WIFI":"WIFI","ACCOUNT":"ACCOUNT"}

const requests={

    save:function (type,data) {
        return axios.post('/requests/save',{'uid':user.id(),'data':data,'type':type})
    },

    list:function (all=false,type='ANY') {
        var baseURL="/requests/list"
        var payload={}
        if(!all)
        {
            payload['uid']=user.id();
        }
        if(type!='ANY')
        {
            payload['type']=type;
        }
        return axios.post(baseURL,payload)
    }
}

export default {
    REQ_TYPE,
    requests,
    checkUserAuth,
    locations,
    user,
    net

}