import axios from "axios"

//axios.defaults.baseURL = 'http://webapp-dev.roma1.infn.it';
axios.defaults.baseURL = 'http://localhost:3000/';


function checkUserAuth(fail=null){
   
   if(fail)
    return axios.get("/api/checkauth/fail")
   else
    return axios.get("/api/checkauth")
   
}

const user={

    read: function(uid){
       
       var path="/auth";
       if(uid)
         path+=(`/${uid}`);

       return new Promise((resolve,reject)=>{
            axios.get(path).then(res=>resolve(res.data))
                           .catch(err=>reject(err));
       });
      
    },

    list:function(search,onlyauth,token){
        return axios.post("/user/list",{"search":search,"onlyauth":onlyauth},{cancelToken:token});
    },

    unset:function(){
        localStorage.removeItem("uinfo");
    },
    
    get:function()
    {
        return JSON.parse(localStorage.getItem("uinfo"));
    },

    set:function(data)
    {
        localStorage.setItem("uinfo",JSON.stringify(data))
    },

    current:async function(uid){
        
        //user.unset();

        var cuser=user.get();
        
        if(!cuser)
        {
            var res=await this.getProfile(uid);
            user.set(res.data);
            cuser=res.data;
        }
        
        //FOR DEBUG
        //cuser.isAuthorized=false;
        //cuser.disciplinare=""
        return cuser;
    },

    id:function() {
        return user.get().uuid
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

const host={
    map:function(h){
        return {
            "name":h.host_name ? h.host_name : "",
            "domain":h.host_domain ? h.host_domain : "roma1.infn.it",
            "ip":h.host_ip ? h.host_ip : "",
            "mac":h.host_mac.toUpperCase(),
            "port":h.pp_port_code,
            "port_alias":h.pp_port_alias,
            "config": h.host_vm ? "STATICVM" : h.host_ip ? 'STATIC' : 'DHCP',
            "location":{"build":h.build,"floor":h.floor,"id":h.loc_id,"room":h.loc_name,"port":h.pp_port_code,"vlanid":h.vlanid},
        }
    }
}

const net={

    exists:function(value) {
        return axios.get(`/net/exists/${value}`)
    },

    lookup:function(value) {
        return axios.get(`/net/lookup/${value}`)
    },

    getHost: function(value) {
        return  axios.get(`/net/hosts/${value}`)
    
    },

    getHostList:function(uid){
       
        return axios.get(`/net/hostlist/${uid}`)
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
    net,
    host

}