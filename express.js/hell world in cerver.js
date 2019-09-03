var express = require("express");
var app = express();

app.get('/',function(req,res){
	res.send("hello indians");
	console.log("server is running on port: 3000");
});

app.listen(3000);
