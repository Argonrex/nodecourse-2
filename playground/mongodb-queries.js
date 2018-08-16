const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b745892c215770f9015db5511';

if (!ObjectID.isValid(id)) {
 console.log("id not valid");
}

//
// Todo.find({
//  _id: id
// }).then((todos) => {
//  console.log("Todos", todos);
// });
//
// Todo.findOne({
//  _id: id
// }).then((todo) => {
//  console.log("Todos", todo);
// });
//
// Todo.findById(id).then((todo) => {
//  if (!todo) {
//   return console.log("Id not found");
//  }
//  console.log("todo by id", todo);
// }).catch((e) => console.log(e));

User.findById("5b706a13ec79d33b60717b3ds").then((user) => {
 if (!user) {
  return console.log('There is no user');
 }

 console.log(JSON.stringify(user,undefined,2));
}, (e) => {
 console.log(e);
});
