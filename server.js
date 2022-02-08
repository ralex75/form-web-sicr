var express = require('express')
var app= express()
var configureAPI = require('./server/configureAPI')

const PORT=5000;

app.use(express.static(__dirname + '/dist'));

configureAPI(app);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

//404  to default page
app.get('*', function(req, res){
    res.redirect("/");
  });

app.listen(PORT,()=>{
    console.log("Server listening on port:"+PORT)
})