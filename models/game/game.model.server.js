var mongoose = require('mongoose');
var gameSchema = require('./game.schema.server');
var gameModel = mongoose.model('GameModel', gameSchema);

function getAllGames() {
  return gameModel.find();
}

var api ={
  getAllGames: getAllGames
};

module.exports = api;