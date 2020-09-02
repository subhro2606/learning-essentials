//jshint esversion:6
/*npm install md5*/


/*
Using bcrypt package

npm install --global --production windows-build-tools
$ npm i -g node-pre-gyp
npm install bcrypt

Also confirm that you are on the stable version of node. If not then please use "nvm" to upgrade/downgrade
*/

require('dotenv').config();


const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
//const encrypt = require('mongoose-encryption');
//const md5 = require('md5');
const bcrypt = require("bcrypt");
const saltRounds = 10;

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

// const secretKey=process.env.SECRET_KEY;
// userSchema.plugin(encrypt, { secret: secretKey, encryptedFields: ['password'] });

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
  //Salting
  bcrypt.genSalt(saltRounds, function(err, salt) {
    //Hashing
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      // Store hash in your password DB.
      const user = new User({
        email: req.body.username,
        password: hash
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
        bcrypt.compare(req.body.password, foundUser.password, function(err, result) {
          if (result === true) {
            res.render("secrets");
          }
        });

      }
    }
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Application Started successfully in port " + (process.env.PORT || 3000));
})
