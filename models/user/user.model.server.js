var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);

function getAllUsers() {
  return userModel.find();
}

function createUser(user) {
  return userModel.create(user);
}

function findUserById(userId) {
  return userModel.findOne({_id: userId})
}

var api ={
  getAllUsers: getAllUsers,
  createUser: createUser,
  findUserById: findUserById
};

module.exports = api;
