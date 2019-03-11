var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  imageSrc: String
}, {collection: 'user'});

module.exports = userSchema;
