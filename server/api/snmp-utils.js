var snmp = require ("./snmp-basics");
//const NodeCache = require( "node-cache" );


//const cache=new NodeCache();


const getSwitchDesc=function(sw_name){
    return new Promise((resolve,reject)=>{
 
        snmp.instance(sw_name).get([snmp.oids("sysDescr")],(err,varbinds)=>{
            
            if (err) { return reject(err.toString()) }
            
            let descr=varbinds[0].value.toString("utf8");
            resolve(descr.toLowerCase());
            
        });
    });
}

var getTrunkPorts3com=function(sw_name){
    
    return new Promise(function(resolve,reject){
        var trunkPortList=[]


        function doneCB(error){
            if(error){
                reject(error)
            }

            return resolve(trunkPortList)
        }
        
        function feedCB(varbinds){
            
           
            try{
                for(var i=0; i<varbinds.length;i++){
                    //var {oid,value}=varbinds[i]
                    var {oid,value}=varbinds[i]
                    if(value==1){ //TRUNK PORT
                        trunkPortList.push(parseInt(oid.substring(oid.lastIndexOf(".")+1)));
                    }
                }
            }
            catch (exc){
                return reject(exc)
            }
        }
    

        oids="1.3.6.1.4.1.43.45.1.2.23.1.1.1.1.5"
        snmp.instance(sw_name).subtree(oids,feedCB,doneCB);
    })
};


var getTrunkPortsHP=function (sw_name){


        var vlanPorts={}
        
        return new Promise(function(resolve,reject){
        
            function doneCB(error){
                if(error){
                    reject(error)
                }

                var trunkPortList=[]


                for (var i=1;i<=54;i++){
                    
                    vlanCount=0
                    
                    for (var k in vlanPorts){
                        if(vlanPorts[k].indexOf(i)>-1){
                            vlanCount++
                        }
                    }
                    
                    //porta di trunk se esiste in piu' VLAN
                    if (vlanCount>1) {
                        trunkPortList.push(i)
                    }

                }
                
                return resolve(trunkPortList)
            }
            
            function feedCB(varbinds){
                
                //le 56 porte inzializzate a 0 
                var zero=Array(56).fill("0").join(""); //"0000000....." 

                try{
                    for(var i=0; i<varbinds.length;i++){
                        var {oid,value}=varbinds[i]
                        oid=oid.substring(oid.lastIndexOf(".")+1);
                        value=value.toString("hex").substring(0,14)
                        var num=parseInt(value,16).toString(2)
                        //aggiunge in coda il numero in bit
                        num=zero.substring(0,(zero.length-num.length))+num  //000000...1100
                      
                        var pg=[]

                        for(var p=0;p<num.length;p++){
                            if(num[p]=="1"){
                                pg.push(p+1)
                            }
                        }
                        
                        //ritorna le porte per vlan
                        vlanPorts[oid]=pg

                    }
                }
                catch (exc){
                    return reject(exc)
                }
        }
    
        oids="1.3.6.1.2.1.17.7.1.4.3.1.2"
        snmp.instance(sw_name).subtree(oids,feedCB,doneCB);
    });
}



//questa funzione ritorna la lista dei macaddress in sicurezza su una porta
//Gestisce HP,Aruba,HPE e CiscoC2960x
//per gli HPE l'oid non contiene indice di porta perchè OID ritorna lista di tutte le porte e si deve
//filtrare per porta per sapere quale macaddress c'è registrato
var getPortSecurityMacAddressList=(session,port_no,oid)=>{
    const macList=[]
  
    return new Promise((resolve,reject)=>{
       
       session.subtree(oid,3,function(varbinds){
        
       
            for(var v=0;v<varbinds.length;v++){
               
               
                var {oid,value}=varbinds[v];
                var oids=oid.split(".");

                var oidPortIndex=oids[oids.length-7]

                //controllo che l'OID abbia il valore della porta che ci serve per recuperare macaddress
                //Serve per gli HPE in quanto l'OID non contiene indice di porta ne gli si può passare
                //Si deve quindi filtrare
                if(value==port_no || port_no==oidPortIndex)
                {
                   
                    //console.log(oids[oids.length-7]);
                    var mac=oids.slice(-6)

                    //loop dalla parte dove inizia il macaddress
                    for(var i=0;i<mac.length;i++)
                    {
                        var val=parseInt(mac[i]);
                        val=val<16 ? "0"+val.toString(16):val.toString(16);
                        mac[i]=val;

                    }
                
                    macList.push(mac.join(":").toUpperCase());
                }


              
            }

            
       

        },function(){
            
            //console.log("completed")
            //console.log(macList);
            resolve(macList)

        },function(err){
            reject(err)
        })
    })
}



const getMIB=function(model,port_no)
{

    let mib=  {   
            "generic":function()
            {
                return{
                    "sysDescr":"1.3.6.1.2.1.1.1.0",
                    "status":"1.3.6.1.2.1.2.2.1.7",
                    "speed": "1.3.6.1.2.1.2.2.1.5",
                }
            },
            "c2960X":
                function(){
                    var longPortIndex=10100+parseInt(port_no);
                    return {
                        "trunkVlan":`1.3.6.1.4.1.9.9.46.1.6.1.1.5.${longPortIndex}`,
                        "noTrunkVlan":`1.3.6.1.4.1.9.5.1.9.3.1.3.1.${port_no}`,
                        "vlanTrunkPortDynamicState":`1.3.6.1.4.1.9.9.46.1.6.1.1.13.${longPortIndex}`,
                        "vlans":"1.3.6.1.4.1.9.9.46.1.3.1.1.4",
                        "security":`1.3.6.1.4.1.9.9.315.1.2.1.1.1.${longPortIndex}`,
                        "status":`${mib.generic()["status"]}.${longPortIndex}`,
                        "speed":`${mib.generic()["speed"]}.${longPortIndex}`,
                        "secMacList":`1.3.6.1.4.1.9.9.315.1.2.2.1.2.${10100+parseInt(port_no)}`
                    }
                },
                //HP Aruba - Procurve
                "hp":function(){
                    return{
                        "vlanid":`1.3.6.1.2.1.17.7.1.4.5.1.1.${port_no}`,
                        "vlans":"1.3.6.1.2.1.17.7.1.4.3.1.1",
                        "security":`1.3.6.1.4.1.11.2.14.2.10.3.1.4.1.${port_no}`,     //HPProvCurve - Arubua
                        "status":`${mib.generic()["status"]}.${port_no}`,
                        "speed":`${mib.generic()["speed"]}.${port_no}`,
                        "secMacList":`1.3.6.1.4.1.11.2.14.2.10.4.1.4.1.${port_no}`
                    }
                },
                //HP 5130
                "hpe":function(){  
                    return{
                        "vlanid":`1.3.6.1.2.1.17.7.1.4.5.1.1.${port_no}`,
                        "vlans":"1.3.6.1.2.1.17.7.1.4.3.1.1",
                        "security":`1.3.6.1.4.1.25506.2.26.1.2.1.1.1.${port_no}`,  //HP5130
                        "status":`${mib.generic()["status"]}.${port_no}`,
                        "speed":`${mib.generic()["speed"]}.${port_no}`,
                        "secMacList":`1.3.6.1.4.1.25506.8.35.3.2.1.2` 
                    }    
                }

            }

    return mib[model]()
}



module.exports.SUPPORTED_MODELS={"c2960x":"c2960x","hpe":"hpe","procurve":"procurve","aruba":"aruba"}


const getSwitchModel=function(desc)
{
    
    const supportedModels=["c2960x","hpe","procurve","aruba"]
    
    var model=supportedModels.filter(e=>desc.indexOf(e)>-1)[0] || null;
    if(!model){
        throw "Modello Switch non supportato";
    }
    else{
        return model
    }
}


/*const getVlans=function(session,oid)
{
   
    var key=session.target+"-vlans";
    var vlans=cache.get(key) || [];

	
	return new Promise((resolve,reject)=>{
   
	//23/10/2018 varbinds contiene subito tutta la lista delle vlans
	function feedCb(varbinds)
	{
	
		var hiddenVlans="95,96,97,99,100";
        
       
		for(var i=0;i<varbinds.length;i++){

			var vlan=varbinds[i].oid.split(".");
			vlan=vlan[vlan.length-1]
			desc=varbinds[i].value;
			
			if(hiddenVlans.split(',').indexOf(vlan)<0){
				vlans.push({"vlan":parseInt(vlan),"desc":desc.toString("utf8")});
			}
		
		}
		
	}

		
        
	function doneCb(error)
	{

		if(error)
		{
			return reject(error);
		}
		else
		{
           
            cache.set(key,vlans,120);
            return resolve(vlans)
		} 
	}
        
        if(vlans.length>0)
        {
            //console.log("Vlans from cache");
            return doneCb(null);
        }
    
	
	    session.subtree(oid,feedCb,doneCb);
    
         
    })
}*/



const getSwitchPortInfo=(session,mib)=>
{
    var mapper={};

    for(var k in mib)
    {
        mapper[mib[k]]=k;
    }
      
    var data={}

    oids=Object.values(mib);

    return new Promise((resolve,reject)=>{


    session.get(oids,async (err,varbinds)=>
    {
		if (err) {
        	console.log (err.toString ());
			return reject(err.toString()) 
        }
    
        
        for(var i=0;i<varbinds.length;i++){
            //console.log (varbinds[i].oid + "|" + varbinds[i].value);
            data[mapper[varbinds[i].oid]]=varbinds[i].value;
        }

        
        //data.descr=data.descr.toString("utf8").toLowerCase();
        //data.security= data.security || data.securityAlt;
     
        //delete data["securityAlt"]

        return resolve(data)
       

    })//session snmp
  });//promise
}


/*NUOVE*/
//RITORNA LA LISTA DI MAC ADDRESS CHE VEDE SU UNA PORTA DI UNO SWITCH
const getSwitchPortHosts=function(sw_name,port_no)
{
    var ip="";
    var mac=""
    
    var data={"switch":sw_name,"port_no":port_no,"mac":{},"ips":[]};
    
    var varbindsList=[];
    return new Promise((resolve,reject)=>{
        snmp.instance(sw_name).subtree(snmp.oids("ass_mac"),50,function(varbinds)
        {
            varbindsList.push(...varbinds);
        
        },async function(error){

            if (error)
            {
                 console.error (error.toString ());
                 return;
            }

            for(var v=0;v<varbindsList.length;v++){
            
                    //console.log (varbinds[i].oid + "|" + varbinds[i].value);
                    var {oid,value}=varbindsList[v];
                    if(value==port_no){
                        mac=oid.split(".").slice(-6);
                        mac=mac.map(function(x){
                            return toHexStr(parseInt(x));
                        }).join("");
                        //}).join(":");

                        data.mac[mac]=mac;
                    }
                
            }

            resolve(data)
       
        });
    })
}


//RITORNA LA LISTA DI MAC ADDRESS-IP VISTI SUL ROUTER CISCO
const getIpList=function(){
    return new Promise(function(resolve,reject){
        
        var varbindsList=[];

        snmp.instance("cisco6509.roma1.infn.it").subtree(snmp.oids("ass_ip"),200,function(varbinds)
        {
           
            varbindsList.push(...varbinds);
            
        },function done(error) {

                if (error)
                {
                    console.log("errore IP LIST:",error)
                    return reject(error);
                }

                var ipList={}

                for(var v=0;v<varbindsList.length;v++){
                   
                        var {oid,value}=varbindsList[v];
                      
                        var mac=value.toString("hex"); //ritorna il mac address assoociato IP

                        if(mac=="0001a4a7fe0a") continue;

                        //console.log(mac)
                      
                        var ips=oid.split(".");
                        var ip=ips.slice(ips.length-4).join(".");

                        //var mac=toHexStr(value[0])+":"+toHexStr(value[1])+":"+toHexStr(value[2])+":"+toHexStr(value[3])+":"+toHexStr(value[4])+":"+toHexStr(value[5]);
                      
                        if(!ipList[mac])
                        {
                            ipList[mac]=[];
                        }

                        ipList[mac].push(ip);
        
                    
                }

               
                return resolve(ipList);
                
        });
   
    });
}

const toHexStr=function(val)
{
    var sval=val.toString(16);
   
    if(val<16)
    {
       sval="0"+sval;
    }
    
    return sval;
}



module.exports={
    getSwitchDesc,
    getSwitchModel,
    getSwitchPortHosts,
    getSwitchPortInfo,
    getIpList,
    /*getVlans,*/
    getPortSecurityMacAddressList,
    /*cache*/
}