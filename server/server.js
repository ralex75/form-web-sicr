var express = require('express')
var app= express()
var configureAPI = require('./configureAPI')

const PORT=3000;



app.use(express.static(__dirname + '/../public'));

configureAPI(app);

app.listen(PORT,()=>{
    console.log("Server listening on port:"+PORT)
})