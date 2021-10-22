var snmp = require ("./snmp-basics");

var {
    getSwitchDesc,
    getSwitchModel,
    getSwitchPortInfo,
  } = require("./snmp-utils")


//===================================================/
// Legge informazioni di una porta switch 
//===================================================/
const switchPortInfo= async function(sw_name,port_no)
{
    

    const defaultMapper=(port_no)=>{
        
        let oids=snmp.oids;

        let mib=  {   
        
            "vlanid":`${oids("vlanPortIndex").hp}.${port_no}`,
            "status":`${oids("status")}.${port_no}`
               
       }
    
       return { 
                mib,
                dataMapper:(data)=>{
                    let _data=Object.assign({},data);
                    return _data;
                }
                
             }
    }

    const mapper={

        "c2960x":(port_no)=>{
                
                let oids=snmp.oids;
                let longPortIndex=10100+parseInt(port_no);
       
                let vlanIndex=oids("vlanPortIndex")["c2960x"]

                let mib={   
                            
                            "trunkVlan":`${vlanIndex["trunk"]}.${longPortIndex}`,
                            "noTrunkVlan":`${vlanIndex["noTrunk"]}.${port_no}`,
                            "vlanTrunkPortDynamicState":`${vlanIndex["trunkPortDynamicState"]}.${longPortIndex}`,
                            "status":`${oids("status")}.${longPortIndex}`,
                        }

                return {
                        mib,
                        dataMapper:(data)=>{
                        let _data=Object.assign({},data);
                        var dynamicVlanPortState={"TRUNK":1,"NO_TRUNK":2}
                        _data.vlanid = data.vlanTrunkPortDynamicState!=dynamicVlanPortState.TRUNK ? data.noTrunkVlan : data.trunkVlan;
                        return _data;
                    }
                };
        },
        "hpe":defaultMapper,
        "procurve":defaultMapper,
        "aruba":defaultMapper

    }
   
    let desc=await getSwitchDesc(sw_name)
    let model=getSwitchModel(desc);
   
    let {mib,dataMapper}=mapper[model](port_no);
    
    if(!mib || !dataMapper){
        throw new Error("no mapper for switch model:",model)
    }
    
    //instanzia oggetto snmp
    let session=snmp.instance(sw_name);
        
    //var info=Object.assign({},mib);
    delete mib["secMacList"];

    //recupera informazioni dallo switch
    let data=await getSwitchPortInfo(session,mib)
    
    //mapper dei dati
    data=dataMapper(data);

    //merge con switch e porta
    data={...{sw_name,port_no},...data}
            
    return data;

}

const SWITCH_PORT_STATUS={"ENABLED":1,"DISABLED":0}

module.exports = {
	snmpquery:{
		switchPortInfo,
        SWITCH_PORT_STATUS
	}
};
