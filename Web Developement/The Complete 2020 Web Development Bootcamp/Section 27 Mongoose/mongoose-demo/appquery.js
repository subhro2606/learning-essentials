/*Has code related to update/delete mongoose*/

const mongoose = require('mongoose');

const dbName = "FruitsDB";

/*Opens connection to the FruitsDB on our locally running Mongo server*/
mongoose.connect("mongodb://localhost:27017/" + dbName, {
  useNewUrlParser: true
});

/*We have a pending connection to the FruitsDB database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:*/
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Hey we are connected");

  /*Fruits Document*/
  /*Define the schema*/
  /*validation added*/
  const fruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please provide a fruit name']
    },
    rating: {
      type: Number,
      min: 0,
      max: [10, "Maxium Value 100"]
    },
    review: String
  });

  /*Schema is complied to a Model, this basically creates the Collection named 'Fruits' inside the db that we are connected to*/
  const Fruit = mongoose.model('Fruit', fruitSchema);

  /*Update the Banana Record*/
  Fruit.updateOne({
    name: "banana"
  }, {
    review: "High in iron. Good for health. Not so tasty",
    rating: 6.5
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully Updated")
    }
  });
  /*Delete a single record*/
  Fruit.deleteOne({
    name: 'Apple'
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully deleted")
    }
  });

  Fruit.deleteMany({
    rating: {
      $lte: 5
    }
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully deleted")
    }
  });

});

/*
Since the above methods are async in nature we need to use to organize them using callbacks or we could use the promises which I'll be checking later
mongoose.connection.close();*/
