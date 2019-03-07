var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

function getAllUsers() {
  return userModel.find();
}

function createUser(user) {
  return userModel.create(user);
}

function findUserByName(name) {
  return userModel.findOne({name: name})
}

var api ={
  getAllUsers: getAllUsers,
  createUser: createUser,
  findUserByName: findUserByName
};

module.exports = api;
