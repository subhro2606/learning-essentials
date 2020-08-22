const express=require("express");
const bodyParser = require("body-parser");

var app=express();

/*body-parser mode "urlencoded" is used since this data is used in html forms*/
app.use(bodyParser.urlencoded({ extended: true }));

/*For Calculator*/
app.get("/",function(req,res){
  console.log("Sending "+__dirname+"/index.html");
  res.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res){
  var n1= Number(req.body.num1);
  var n2= Number(req.body.num2);
  res.send(`The calculated value is ${n1+n2}`);
});

/*For BMI Calculator*/
app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
  var h=parseFloat(req.body.height);
  var w=parseFloat(req.body.weight);
  res.send(`Your BMI is ${w/(h*h)}`);
});

app.listen(3000,function(){
  console.log("Calculator started on port 3000")
});
