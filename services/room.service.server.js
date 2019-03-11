module.exports = function (app) {

  var roomModel = require('../models/room/room.model.server');
  var gameModel = require('../models/game/game.model.server');

  app.get('/api/room', getAllRooms);
  app.post('/api/room', createRoom);
  app.get('/api/room/:roomId', getRoomById);
  app.get('/api/room/:roomId/result', getRoomResult);
  app.put('/api/room/:roomId', initializeVoting);
  app.put('/api/room/:roomId/game/add',addGame);
  app.put('/api/room/:roomId/user/add',addUser);
  app.put('/api/room/:roomId/game/remove',removeGame);
  app.put('/api/room/:roomId/user/remove',removeUser);

  function addGame(req, res) {
      roomModel.addGame(req.params['roomId'], req.body)
          .then(function (response) {
              res.send(response);
          })
  }

  function addUser(req, res) {
      roomModel.addUser(req.params['roomId'], req.body)
          .then(function (response) {
              res.send(response);
          })
  }

  function removeGame(req, res) {
      roomModel.removeGame(req.params['roomId'], req.body)
          .then(function (response) {
              res.send(response);
          })
  }

  function removeUser(req, res) {
      roomModel.removeUser(req.params['roomId'], req.body)
          .then(function (response) {
              res.send(response);
          })

  }

  function initializeVoting(req, res) {
    console.log(JSON.stringify(req.body));
    roomModel.initializeVoting(req.params['roomId'], req.body)
      .then(function (response) {
        res.send(response);
      });
  }

  function getRoomResult(req, res) {
    var roomId = req.params['roomId'];
    roomModel.findRoomById(roomId)
      .then(function (response) {
        gameModel.findGameById(response.results[response.results.length - 1])
          .then(function (response) {
            res.json(response);
          })

      });

  }

  function getRoomById(req, res) {
    var roomId = req.params['roomId'];
    roomModel.findRoomById(roomId)
      .then(room => res.send(room)
  )
    ;
  }

  function getAllRooms(req, res) {
    return roomModel
      .getAllRooms()
      .then(function (rooms) {
        res.json(rooms);
      });
  }

  function createRoom(req, res) {
    var room = req.body;
    return roomModel
      .createRoom(room)
      .then(function (status) {
        res.send(status)
      })
  }

};
