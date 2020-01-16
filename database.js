function database(){
 var adhar=document.getElementById("aadhar");
 var pass=document.getElementById("psw");

 var express = require('express');
 var mysql = require('mysql');
 var app = express();
var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'fir'
});

connection.connect(function(error){
	if(!!error){
		console.log('Error');
	}
	else{
console.log('connected');
}
})
app.get('/',function(req,resp){

connection.query("select adharecard from adharecard",function(error,rows,fields){
if(!!error){
console.log("Error");
}
else{
console.log("sucess");
if(row==adhar){
console.log("authenticated");
}
else{
console.log("not a authorise user");
}
}
});
})
app.listen(3307);
}
