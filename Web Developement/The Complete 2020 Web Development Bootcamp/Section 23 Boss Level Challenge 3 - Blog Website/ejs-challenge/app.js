//jshint esversion:6

/* npm install lodash*/

const posts = [
  {
    title: "Day 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
    title: "Day 2",
    body: "Sed molestie magna sed sapien consectetur, eget gravida sapien auctor. Fusce semper laoreet congue. In gravida quis velit id hendrerit. Aenean pellentesque sapien venenatis consequat scelerisque. Vestibulum faucibus sagittis est, nec placerat mi vehicula vel. Integer sodales at ligula a condimentum. Fusce sagittis sapien ac odio ultrices commodo. Mauris laoreet posuere tortor sed luctus. Sed sed dui massa. Sed posuere aliquam felis in venenatis. Quisque eget cursus nibh. Proin sed risus dapibus, tincidunt ipsum nec, malesuada tellus. Phasellus et justo risus. Cras arcu ante, bibendum at blandit quis, porttitor sit amet orci."
  },
  {
    title: "Day 3",
    body: "Morbi diam velit, vehicula ut lectus quis, sollicitudin interdum lacus. Cras posuere ipsum sed tellus maximus hendrerit. Nulla sed rhoncus lacus. Phasellus ultricies sem ut rhoncus ultricies. Aenean sed libero mattis elit sagittis accumsan blandit nec eros. Nunc gravida ipsum turpis, luctus tempus libero aliquet non. Aliquam efficitur mi mauris, non malesuada augue vulputate malesuada. Sed mattis nisi tortor, nec interdum velit efficitur et. Sed ut commodo sem. Vivamus orci lectus, consectetur aliquam semper nec, porttitor non lacus. Phasellus vulputate a turpis at pellentesque. Aliquam ornare convallis ligula ac blandit. Nullam ut imperdiet dolor, vitae vehicula nulla."
  },
  {
    title: "Day 4",
    body: "Morbi diam velit, vehicula ut lectus quis, sollicitudin interdum lacus. Cras posuere ipsum sed tellus maximus hendrerit. Nulla sed rhoncus lacus. Phasellus ultricies sem ut rhoncus ultricies. Aenean sed libero mattis elit sagittis accumsan blandit nec eros. Nunc gravida ipsum turpis, luctus tempus libero aliquet non. Aliquam efficitur mi mauris, non malesuada augue vulputate malesuada. Sed mattis nisi tortor, nec interdum velit efficitur et. Sed ut commodo sem. Vivamus orci lectus, consectetur aliquam semper nec, porttitor non lacus. Phasellus vulputate a turpis at pellentesque. Aliquam ornare convallis ligula ac blandit. Nullam ut imperdiet dolor, vitae vehicula nulla."
  }

];
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// Load the full build for lodash.
var _ = require('lodash');


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home", {
    titletext: "Home",
    titledesc: homeStartingContent,
    posts: posts
  });
});
app.get("/contact", function(req, res) {
  res.render("home", {
    titletext: "Contact Us",
    titledesc: contactContent
  });
});
app.get("/about", function(req, res) {
  res.render("home", {
    titletext: "About Us",
    titledesc: aboutContent
  });
});
app.get("/compose", function(req, res) {
  res.render("compose", {
    titletext: "Compose"
  });
});
app.post("/compose", function(req, res) {
  blogItem = {
    title: req.body.blogTitle,
    body: req.body.blogPost
  };
  posts.push(blogItem);
  res.redirect("/");
});

app.get("/posts/:postTitle", function(req, res) {
  console.log(req.params.postTitle);
  let matchFound = false;
  var title="";
  var description="";
  posts.forEach(function(element) {
    if (_.kebabCase(req.params.postTitle) === _.kebabCase(element.title)) {
      matchFound = true;
      title=element.title;
      description=element.body;
    }
  });
  if (matchFound) {
    res.render("post", {
      titletext: title,
      titledesc: description
    });
  } else {
    console.log("Match Not Found")
  };

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
