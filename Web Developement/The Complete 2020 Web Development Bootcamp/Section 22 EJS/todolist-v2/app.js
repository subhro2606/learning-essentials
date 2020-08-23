/* npm install express body-parser ejs*/

const express = require("express");
const bodyparser = require("body-parser");
var addedItems=["Buy Food","Cook Food","Eat Food"];
let worklistItems=["Meeting","Email","Lunch"];
let page="";
const work="work";
const general="general";

const app = express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname+"/public"))


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


/*For general flow*/
app.get("/", function(req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  page=general;
  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };

  res.render("index", {
    day: today.toLocaleString('en-US', options),
    todoItems:addedItems,
    page:page
  });


});


app.post("/",function(req,res){
    url="/";
    console.log(req.body);
    if(req.body.button==general){
      addedItems.push(req.body.newItem);
    }else if (req.body.button==work){
      worklistItems.push(req.body.newItem);
      url+="work";
    }
    console.log(addedItems);
    res.redirect(url);
});


/*For worklist flow*/

/*For general flow*/
app.get("/work", function(req, res) {
  page=work;
  res.render("index", {
    day: "Work Items",
    todoItems:worklistItems,
    page:page
  });
});


/*For About Page*/
app.get("/about", function(req, res) {
  page=work;
  res.render("about", {
    aboutheading: "About me",
    about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  });
});


app.listen(3000, function() {
  console.log("App Started Successfully");
});
