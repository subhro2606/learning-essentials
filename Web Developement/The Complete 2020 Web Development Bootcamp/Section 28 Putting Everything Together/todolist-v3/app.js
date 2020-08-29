//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');
const _=require("lodash");

/*Code to insert the initialItems in the datbase*/
/*require mongoose*/
const dbname = "TodolistDB";
mongoose.connect("mongodb://localhost:27017/" + dbname, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/*general "Item" list*/
const itemSchema = {
  name: String
};
const Items = new mongoose.model('Item', itemSchema);
const buyFood = new Items({
  name: "Welcome to your todoList"
});
const cookFood = new Items({
  name: "Hit the + button to add a new item"
});
const eatFood = new Items({
  name: "<-- Hit this to delete an item"
});

const initialItems = [buyFood, cookFood, eatFood];


/*For the other "list""*/
const listSchema = {
  name: String,
  items: [itemSchema]
};
const Lists = new mongoose.model('List', listSchema);






const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const workItems = [];


app.get("/", function(req, res) {
  //const day = date.getDate();
  const listTitle = "Today";
  Items.find(function(error, foundItems) {
    if (error) {
      console.log(error);
    } else {
      if (foundItems.length == 0) {
        /*Default items are only populated if and only if items are empty and then redirected to the default route again*/
        Items.insertMany(initialItems, function(error, initialItems) {
          if (error) {
            console.log(error);
          } else {
            console.log("successfully saved");
            res.redirect("/");
          }
          /*mongoose.connection.close();*/
        });
      } else {
        res.render("list", {
          listTitle: listTitle,
          newListItems: foundItems
        });
      }
    }
  });

});

app.post("/", function(req, res) {
  const newItem = new Items({
    name: req.body.newItem
  });
  if (req.body.list === "Today") {
    newItem.save(function(err, newItem) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    })
  }else{
    const listName=req.body.list;
    Lists.findOne({
      name: req.body.list
    }, function(error, foundList) {
      if (error) {
        console.log(error);
      } else {
        if (!foundList ) {
          list.save(function(err, list) {
            if (err) {
              console.log(err);
            } else {
              res.redirect("/" + listName);
            }
          });
        } else {
          foundList.items.push(newItem);
          foundList.save(function(err, newItem) {
            if (err) {
              console.log(err);
            } else {
              res.redirect("/" + listName);
            }
          })
        }
      }
    });
  }
});


/*Delete functionality*/
app.post("/delete", function(req, res) {
  console.log(req.body);
  // Items.deleteOne({
  //   _id: req.body.item_id
  // }, function(err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.redirect("/");
  //   }
  // });
  const listName=req.body.listName;
  const checkeditemId=req.body.item_id;
  if(listName==="Today"){
    console.log("jhar")
    Items.findByIdAndRemove(checkeditemId, function(err) {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    })
  }else{
    Lists.findOneAndUpdate({
      name: listName
    },{$pull:{items:{_id:checkeditemId}}}, function(err, foundItems){
      if (err) {
        console.log(err);
      } else {
        res.redirect("/" + listName);
      }
    });
  }
});


// app.get("/work", function(req, res) {
//   res.render("list", {
//     listTitle: "Work List",
//     newListItems: workItems
//   });
// });

app.get("/:customListName", function(req, res) {
  console.log("jhar");

  const listName = _.capitalize(req.params.customListName);
  const list = new Lists({
    name: listName,
    items: initialItems
  });

  Lists.findOne({
    name: listName
  }, function(error, foundItems) {
    console.log(foundItems.items.length);
    if (error) {
      console.log(error);
    } else {
      if (!foundItems) {
        list.save(function(err, list) {
          if (err) {
            console.log(err);
          } else {
            res.redirect("/" + listName);
          }
        });
      } else {
        if(foundItems.items.length==0){
          initialItems.forEach(function(initialItem){
            foundItems.items.push(initialItem);
          })
          foundItems.save(function(err, foundItems) {
            if (err) {
              console.log(err);
            } else {
              res.redirect("/" + listName);
            }
          })
        }else{
          res.render("list", {
            listTitle: listName,
            newListItems: foundItems.items
          });
        }

      }
    }
  });


  // Find out why find() didn't work
  // Lists.find({
  //   name: listName
  // }, function(error, foundItems) {
  //   let c= JSON.stringify(foundItems);
  //   console.log(c);
  //   console.log(c.items);
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     if (foundItems.length == 0) {
  //       list.save(function(err, list) {
  //         if (err) {
  //           console.log(err);
  //         } else {
  //           res.redirect("/" + listName);
  //         }
  //       });
  //     } else {
  //       res.render("list", {
  //         listTitle: listName,
  //         newListItems: foundItems.items
  //       });
  //     }
  //   }
  // });


});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
