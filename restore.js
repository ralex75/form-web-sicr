const express = require('express');
const router = express.Router();
const SSH2Promise = require('ssh2-promise');
const {getUserLDAP} = require('./ldap.js') 
const moment = require('moment')


const sshConf={
		host: 'freezer.roma1.infn.it',
		username: 'root',
		identity: '/root/.ssh/id_rsa',
		baseDir: '/data/vm+servizi/bckuser'
	};


router.get("/options",async (req,res)=>{
    let username='9228ab75-d9b0-4573-93af-cfd1a6f44848' //req.userid; //infnUUID
    let restoreOpt={"mail":false,"afs":false,"mail-afs":false}
    const MIN_SIZE=1200000 //bytes
    const GRACE_TIME=365; //days
    
    try
    {
            user=await getUserLDAP(`(infnUUID=${username})`);
            
            user=user[0]

            if(!user) throw Error("No user found")

            username=user.uid; //username

            if(!username) throw Error("No username")

            restoreOpt.uid=username;

            username='lucentini'

            let ssh = new SSH2Promise(sshConf);
		
            let userDirDate=await ssh.exec(`ls -lart --time-style="+%Y%m%d" ${sshConf.baseDir} | grep ${username} | awk '{print $6}'`)

            if(!userDirDate) throw Error("No backup user dir found.")

            console.log(userDirDate)

            let canRestoreData = moment().diff(moment(userDirDate.trim()),'days')< GRACE_TIME

            if(!canRestoreData) throw Error("Restore data period exceed.")

            let data = await ssh.exec(`ls -ls ${sshConf.baseDir}/${username} | awk '{print $6,$10}' | grep -e mailbox -e vdump`);

            //array: file size - file name
            data=data.split("\n")

            data.forEach(i=>{
                let file=i.split(" ")
                //size
                if(parseInt(file[0])>=MIN_SIZE)
                {
                    let key=file[1].indexOf("mailbox")>0 ? "mail" : "afs";
                    restoreOpt[key]=true;
                }
            })

            restoreOpt["mail-afs"]=restoreOpt.mail && restoreOpt.afs;
   
    }
    catch(exc)
    {
        let msg=`${exc}`
        console.log(msg)
	restoreOpt.exc=msg
    }
    finally{
        return res.json({"options":restoreOpt})
    }

})

module.exports=router;
