module.exports = function (app) {

  var gameModel = require('../models/game/game.model.server');

  app.get('/api/game', getAllGames);

  function getAllGames(req,res) {
    return gameModel
      .getAllGames()
      .then(function(games) {
        res.json(games);
      });
  }
};