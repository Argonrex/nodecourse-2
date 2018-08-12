// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
 if (err) {
  return console.log("Unable to connect to mongodb server");
 }
 console.log("Connected to Mongo db server");

 const db = client.db("TodoApp")

 db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b6f0ff8e9e19123b839e705')
}, {
  $set: {
   name: "hi there"
  },
  $inc: {
   age: 1
  }
}, {
 returnOriginal: false
}).then((result) => {
 console.log(result);
});

});
