/*require mongoose*/
const mongoose = require('mongoose');


const dbname = "TodolistDB";
mongoose.connect("mongodb://localhost:27017/" + dbname, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
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

const db = mongoose.connection;
db.once('open', function() {
  Items.insertMany(initialItems, function(error, initialItems) {
    if (error) {
      console.log(error);
    } else {
      console.log("successfully saved")
    }
    mongoose.connection.close();
  });
});
