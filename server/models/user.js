const mongoose = require('mongoose');

var User = mongoose.model("Users", {
 email: {
  type: String,
  required: true,
  trim: true,
  minlength: 9,
  unique: true
 }
});

module.exports = {User};
