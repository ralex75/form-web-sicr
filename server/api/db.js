const pgp = require('pg-promise')({noWarnings: true});

const nqdb=pgp({
    host:'webapp-dev.roma1.infn.it',
	port:5432,
	database: "netquery_db",
	user: 'nq-admin',
	password: 'F1rm4NQ'	
});

const userdb=pgp({// connect to userdb
	host: "db.phys.uniroma1.it",
	port: "5432",
	database : "dbphys",
	user: "sync_persons",
    password: "R34d0nlY"
});



module.exports={nqdb,userdb};