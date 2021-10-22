const express = require('express');
const router = express.Router();
const snmp=require('./snmp.api')
var {nqdb}=require("./db");

/*router.get("/:swname/:swport",async (req,res)=>{

    let {swname,swport}=req.params;
    let result=await snmp.snmpquery.switchPortInfo(swname,swport)
    res.json(result)
})*/

router.get("/:pc",async (req,res)=>{

    let pc=req.params.pc.split("-");
    let result=null;

    try{
        let data=await nqdb.oneOrNone(`select switch ,port_no from patch_cord where nc_code=$1 and label=$2`,[pc[1],pc[3]])
        if(data){
            result=await snmp.snmpquery.switchPortInfo(data["switch"],data["port_no"])
        }
    }
    catch(exc){
        console.log(exc);
    }

    res.json(result)
})

module.exports=router;