const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();
app.use(bodyparser.urlencoded({
  extended: true
}));

/*View Engine to use ejs*/
app.set('view engine', 'ejs');

/*The static files like css & images would be kept in the public directory*/
app.use(express.static("public"));

const dbName = "wikiDB";
mongoose.connect('mongodb://localhost:27017/' + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const articleSchema = mongoose.Schema({
  title: String,
  content: String
});
const Article = mongoose.model("Article", articleSchema);



// /*Get Request*/
// /*Fetches all the articles*/
// app.get("/articles", function(req, res) {
//   Article.find({}, function(err, foundArticles) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(foundArticles);
//     }
//   })
// });
//
//
// /*Post Request*/
// /*Posts an article, however this uses x-www-form-urlencoded, raw json would not work*/
// app.post("/articles", function(req, res) {
//   console.log(req.body.title + " " + req.body.content);
//   const newArticle = new Article({
//     title: req.body.title,
//     content: req.body.content
//   });
//   newArticle.save(function(err,newArticle){
//     if(err){
//       res.send(err);
//     }else{
//       res.send("Successfully saved");
//     }
//   });
// });
//
//
// /*Delete Request*/
// /*Deletes all Articles*/
// app.delete("/articles", function(req,res){
//   Article.deleteMany({},function(err){
//     if(err){
//       res.send(err);
//     }else{
//       res.send("All records in Articles Successfully Deleted!!");
//     }
//   });
// });

////////////////////////////////Requests Targetting All Articles////////////////////////////
/*Using app.route(), chainable route handlers to chain the get, post & delete method*/
app.route("/articles").get(function(req, res) {
  Article.find({}, function(err, foundArticles) {
    if (err) {
      res.send(err);
    } else {
      res.send(foundArticles);
    }
  })
}).post(function(req, res) {
  console.log(req.body.title + " " + req.body.content);
  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });
  newArticle.save(function(err, newArticle) {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully saved");
    }
  });
}).delete(function(req, res) {
  Article.deleteMany({}, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send("All records in Articles Successfully Deleted!!");
    }
  });
});


////////////////////////////////Requests Targetting a specific Article//////////////////////////////
/*Using app.route(), chainable route handlers to chain the get, post & delete method*/
app.route("/articles/:articleTitle").get(function(req, res) {
  //http://localhost:3000/articles/Jack%20Bauer
  Article.findOne({
    title: req.params.articleTitle
  }, function(err, foundArticle) {
    if (err) {
      res.send(err);
    } else {
      res.send(foundArticle);
    }
  })
}).put(function(req, res) {
  Article.update({
    title: req.params.articleTitle
  }, {
    title: req.body.title,
    content: req.body.content
  }, {
    /*overrite: true -> In mongodb when we update a Document, the dfault behaviour is to update the entire document but with mongoose behined the scenes it updates only the fields specified in the query. The {overrite: true} basically supresses the dfault behaviour of mongoose and updates the entire document*/
    overrite: true
  }, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send("Update Successful");
    }
  });
}).patch(function(req, res) {
  Article.update({
    title: req.params.articleTitle
  }, {
    /*The body would be having fields like "title" & "content",
    so our database would be updated based on that
    so we are passing req.body directly to $set*/
    $set: req.body,
  }, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send("Update Successful");
    }
  });
}).delete(function(req,res){
  Article.deleteOne({title: req.params.articleTitle}, function(err) {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully Deleted!!");
    }
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server Started on Port " + (process.env.PORT || 3000));
});
