var mongoose = require('mongoose');
var gameSchema = require('./game.schema.server');
var gameModel = mongoose.model('GameModel', gameSchema);

function getAllGames() {
  return gameModel.find();
}

function createGame(game) {
  return gameModel.create(game);
}

var api ={
  getAllGames: getAllGames,
  createGame: createGame
};

module.exports = api;