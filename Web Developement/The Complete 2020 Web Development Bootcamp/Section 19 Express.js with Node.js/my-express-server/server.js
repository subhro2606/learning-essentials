const express=require("express");
const app = express();
const port = 3000;
app.get("/",function(request,response){
  console.log(request);
  response.send("<h1>Hello World</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me at subhro2606@gmail.com")
});

app.get("/about",function(req,res){
  res.send("Hey!! It's me!!")
});

app.get("/nodemoninaction",function(req,res){
  res.send("This is nodemon in action");
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));
