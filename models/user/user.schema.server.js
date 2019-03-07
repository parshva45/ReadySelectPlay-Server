var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  age: Number,
  sex: {type:String,enum:["Male","Female"]},
  email: String,
  password: String
}, {collection: 'user'});

module.exports = userSchema;
