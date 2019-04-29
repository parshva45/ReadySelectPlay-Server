module.exports = function (app) {

  var roomModel = require('../models/room/room.model.server');
  var gameModel = require('../models/game/game.model.server');

  app.get('/api/room', getAllRooms);
  app.post('/api/room', createRoom);
  app.get('/api/room/:roomId', getRoomById);
  app.get('/api/room/:roomId/result', getRoomResult);
  app.put('/api/room/:roomId/result/add', addRoomResult);
  app.put('/api/room/:roomId', initializeVoting);
  app.put('/api/room/:roomId/game/add',addGame);
  app.put('/api/room/:roomId/user/add',addUser);
  app.put('/api/room/:roomId/game/remove',removeGame);
  app.put('/api/room/:roomId/user/remove',removeUser);
  app.put('/api/room/:roomId/name',setName);
  app.put('/api/room/:roomId/vote',addVotes);
  app.put('/api/room/:roomId/filters',setFilters);
  app.delete('/api/room/:roomId',deleteRoom);

  function setName(req, res) {
    const name = req.body.name;
    roomModel.setName(req.params['roomId'], name)
      .then(function (response) {
        res.send(response);
      })
  }

  function setFilters(req, res) {
    const filters = req.body.filters;
    roomModel.setFilters(req.params['roomId'], filters)
      .then(function (response) {
        res.send(response);
      })
  }

  function addRoomResult(req, res) {
      const gameId = req.body.gameId;
      roomModel.addRoomResult(req.params['roomId'], gameId)
          .then(function (response) {
              res.send(response);
          })
  }

  function addVotes(req, res) {
      const voteList = req.body.voteList;
      roomModel.addVotes(req.params['roomId'], voteList)
          .then(function (response) {
              res.send(response);
          })
  }

  function addGame(req, res) {
    const gameId = req.body.gameId;
      roomModel.addGame(req.params['roomId'], gameId)
          .then(function (response) {
              res.send(response);
          })
  }

  function addUser(req, res) {
      const userId = req.body.userId;
      roomModel.addUser(req.params['roomId'], userId)
          .then(function (response) {
              res.send(response);
          })
  }

  function removeGame(req, res) {
    const gameId = req.body.gameId;
      roomModel.removeGame(req.params['roomId'], gameId)
          .then(function (response) {
              res.send(response);
          })
  }

  function removeUser(req, res) {
    const userId = req.body.userId;
      roomModel.removeUser(req.params['roomId'], userId)
          .then(function (response) {
              res.send(response);
          })

  }

  function initializeVoting(req, res) {
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

  function deleteRoom(req, res) {
    var roomId = req.params['roomId'];
    roomModel.deleteRoomById(roomId)
      .then(response => res.json(response)
  )
    ;
  }

};
