var express=require('express');
var app = new express();
app.get('/',function (req,res)
{
    res.send("Hello World");
});
app.listen(4000,function(req,res){
    console.log("listening on port 8080")
});