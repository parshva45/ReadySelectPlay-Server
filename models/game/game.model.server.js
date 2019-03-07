var mongoose = require('mongoose');
var gameSchema = require('./game.schema.server');
var gameModel = mongoose.model('GameModel', gameSchema);

function getAllGames() {
  return gameModel.find();
}

function createGame(game) {
  return gameModel.create(game);
}

function findGameById(gameId) {
  return gameModel.findOne({gameId: gameId})
}

var api ={
  getAllGames: getAllGames,
  createGame: createGame,
  findGameById: findGameById
};

module.exports = api;