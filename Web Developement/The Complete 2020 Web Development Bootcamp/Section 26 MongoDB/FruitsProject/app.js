/*
Code Copied from http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/
Version 3.4 used. Reisit this after learning async await
*/
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url,{useUnifiedTopology: true});

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  /*Inserts the Documents*/
  // insertDocuments(db, function() {
  //     client.close();
  //   });

  findDocuments(db, function() {
      client.close();
    });
  //client.close();
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
    {name:"Apple",score:8, review:"Great Fruit"},
    {name:"Orange",score:6, review:"Kinda Sour"},
    {name:"Banana",score:9, review:"Great Stuff"},
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
