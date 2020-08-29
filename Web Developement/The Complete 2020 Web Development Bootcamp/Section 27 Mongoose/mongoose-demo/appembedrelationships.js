
/*Has code related to embedding relationships*/
/*Updates the Person schema to have a favourite Fruit*/



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
      type:String,
      required: [true, 'Please provide a fruit name']
    },
    rating: {
      type:Number,
      min: 0,
      max: [10, "Maxium Value 100"]
    },
    review: String
  });

  /*Schema is complied to a Model, this basically creates the Collection named 'Fruits' inside the db that we are connected to*/
  const Fruit = mongoose.model('Fruit', fruitSchema);

  const pineApple = new Fruit({
    name: "PineApple",
    rating: 10,
    review: "Most amazing taste"
  });


  /*People Document*/

  const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
  });

  const Person = mongoose.model('Person', personSchema);

  const sally = new Person({
    name: "Sally",
    age: 37,
    favouriteFruit: pineApple
  });

  sally.save(function(err, sally) {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully saved")
    }
  });



  /*Updaing John's favourite fruit*/
  const mango = new Fruit({
    name: "Mango",
    rating: 8.5,
    review: "Rashbari"
  });


  Person.updateOne({
    name: "John"
  }, {
    favouriteFruit: mango
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully Updated")
    }
  });


});

/*
Since the above methods are async in nature we need to use to organize them using callbacks or we could use the promises which I'll be checking later
mongoose.connection.close();*/
