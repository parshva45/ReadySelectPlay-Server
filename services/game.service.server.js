module.exports = function (app) {

  var gameModel = require('../models/game/game.model.server');

  app.get('/api/game', getAllGames);
  app.post('/api/game', createGame);
  app.get('/api/game/:gameId', getGameById);

  function getGameById(req, res) {
    var gameId = req.params['gameId'];
    gameModel.findGameById(gameId)
      .then(game => res.send(game));
  }

  function getAllGames(req, res) {
    return gameModel
      .getAllGames()
      .then(function(games) {
        res.json(games);
      });
  }

  function createGame(req, res) {
    var game = req.body;
    return gameModel
      .createGame(game)
      .then(function (status) {
        res.send(status)
      })
  }

};