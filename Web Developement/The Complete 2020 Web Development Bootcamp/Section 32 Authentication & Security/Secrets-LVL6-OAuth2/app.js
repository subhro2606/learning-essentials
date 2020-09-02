//jshint esversion:6


//Using passport.js
//npm install passport passport-local passport-local-mongoose express-session

require('dotenv').config();

const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

// Corresponding packages are required
const passport = require('passport');
const session = require("express-session");
const passportLocalMongoose = require('passport-local-mongoose');


const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({
  extended: true
}));

/*Initlizing the session*/
app.use(session({
  secret: 'This is a secret',
  resave: false,
  saveUninitialized: false
}));
/*Initializing Passport for our app to manage sessions*/
app.use(passport.initialize());
app.use(passport.session());



const dbName = "userDB";
mongoose.connect("mongodb://localhost:27017/" + dbName, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

// Use passportLocalMongoose as a plugin, This would be used to salt & hash our password & save it in the database
userSchema.plugin(passportLocalMongoose);


const User = mongoose.model("User", userSchema);

//Starting with version 0.2.1 passport-local-mongoose adds a helper method createStrategy as static method to your schema.
// The createStrategy is responsible to setup passport-local LocalStrategy with the correct options.
passport.use(User.createStrategy());
//Serialize -> creates the cookie
//Deserialize -> crumble the cookie & see the details so that user can authenticate
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", function(req, res) {
  res.render("home");
});

app.get("/register", function(req, res) {
  res.render("register");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.get("/secrets", function(req, res) {
  console.log(res);
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("/login");
  }
});
app.post("/register", function(req, res) {
  User.register({
    /*There is a policy in passport-local-mongoose & passport-local that your username/email field need to be "username"*/
    username: req.body.username
  }, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("secrets");
      });
    }
  });

});

app.post("/login", function(req, res) {

  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  req.login(user, function(err) {
    if (err) {
      console.log(err);
      res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("secrets");
      });
    }
  });
});

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect('/');
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Application Started successfully in port " + (process.env.PORT || 3000));
})
