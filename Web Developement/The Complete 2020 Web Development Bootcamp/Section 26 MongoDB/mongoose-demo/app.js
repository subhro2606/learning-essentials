
/*Has code related to insert into the Mongo Db using Mongoose, for update/delete refer to appquery.js*/

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

  const apple = new Fruit({
    name: "Apple",
    rating: 5,
    review: "Crunchy & amazing"
  });

  /*Save it*/
  apple.save(function(err, apple) {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully saved")
    }
  });


  /*People Document*/
  const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

  const Person = mongoose.model('Person', personSchema);

  const john = new Person({
    name: "John",
    age: 37
  });
  john.save(function(err, john) {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully saved")
    }
  });


  /*Bulk Insert in Fruits Document*/
  const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Most amazing"
  });
  const orange = new Fruit({
    name: "Orange",
    rating: 6,
    review: "Too sour"
  });
  const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Yuck"
  });
  const fruitsArray = [kiwi, orange, banana];
  Fruit.insertMany(fruitsArray, function(err, fruitsArray) {
    if (err) {
      console.log(err);
    } else {
      console.log("successfully saved" + fruitsArray)
    }
  });


  /*Search*/
  Fruit.find(function(err, fruits) {
    if (err) {
      console.log(err);
    } else {
      console.log("Fetched Fruits" + fruits);
      fruits.forEach(function(element) {
        console.log(element.name);
      })
    }
  });

});

/*
Since the above methods are async in nature we need to use to organize them using callbacks or we could use the promises which I'll be checking later
mongoose.connection.close();*/
