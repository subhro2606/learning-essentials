/* npm install express body-parser ejs*/

const express=require("express");
const bodyparser=require("body-parser");

const app=express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:true}));


const daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

app.get("/",function(req,res){

  var today=new Date();
  var currentDay=today.getDay();
  res.render("index",{day:daysOfWeek[currentDay]});
  // if(currentDay===6||currentDay==0){
  //   res.write("<h1>Yaay!! It's the weekend</h1>");
  // }else{
  //   res.write("<h1>Ohh!! Boring office work</h1>");
  // }
  res.send();
});

app.listen(3000,function(){
  console.log("App Started Successfully");
});
