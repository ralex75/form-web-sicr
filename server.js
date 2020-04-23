var express = require('express')
var app= express()
var configureAPI = require('./server/configureAPI')

const PORT=3000;

app.use(express.static(__dirname + '/dist'));

configureAPI(app);

app.listen(PORT,()=>{
    console.log("Server listening on port:"+PORT)
})