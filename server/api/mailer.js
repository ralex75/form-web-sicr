const nodeMailer = require('nodemailer');

function sendMail(to,subj,body){
    
    //solo per debug
    //to="alessandro.ruggieri@roma1.infn.it"
    
    let transporter = nodeMailer.createTransport({
        host: 'smtp.roma1.infn.it',
        port: 25
    });

    let mailOptions={
        from:'supporto@roma1.infn.it',
        to:to,
        subject:subj,
        html:body
    }

    

    return new Promise(function(resolve,reject){
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject({success: false});
            } else {
                resolve({success: true})
            }
        });
    })
   
}

module.exports={sendMail};