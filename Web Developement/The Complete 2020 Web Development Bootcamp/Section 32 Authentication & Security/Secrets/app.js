//jshint esversion:6
require('dotenv').config();


const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require('mongoose-encryption');

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({
  extended: true
}));


const dbName = "userDB";
mongoose.connect("mongodb://localhost:27017/" + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const secretKey=process.env.SECRET_KEY;
userSchema.plugin(encrypt, { secret: secretKey, encryptedFields: ['password'] });

const User = mongoose.model("User", userSchema);

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/register", function(req, res) {
  res.render("register");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.post("/register", function(req, res) {
  const user = new User({
    email: req.body.username,
    password: req.body.password
  });
  user.save(function(err, user) {
    if (err) {
      console.log(err);
    } else {
      console.log("User Registered successfully");
      res.render("secrets");
    }
  });
});

app.post("/login", function(req, res) {
  User.findOne({
    email: req.body.username
  }, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === req.body.password) {
          res.render("secrets");
        }
      }
    }
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Application Started successfully in port " + (process.env.PORT || 3000));
})
