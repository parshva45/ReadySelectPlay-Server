var mongoose = require('mongoose');
var roomSchema = require('./room.schema.server');
var roomModel = mongoose.model('RoomModel', roomSchema);

function getAllRooms() {
  return roomModel.find();
}

function createRoom(room) {
  return roomModel.create(room);
}

function findRoomById(roomId) {
  return roomModel.findOne({_id: roomId})
}

function initializeVoting(roomId, newRoom) {
  return roomModel.update({
    _id: roomId
  }, {
    $set: {
      filteredGames: newRoom.filteredGames,
      isVotingInProgress: newRoom.isVotingInProgress
    }
  })
}

function addGame(roomId, gameId) {
  return roomModel.update({
    _id: roomId
  }, {
    $push: {"games": gameId}
  });
}

function addUser(roomId, userId) {
  return roomModel.update({
    _id: roomId
  }, {
    $push: {"users": userId}
  });
}

function removeGame(roomId, gameId) {
  return roomModel.update({
    _id: roomId
  }, {
    $pull: {"games": gameId}
  });
}

function removeUser(roomId, userId) {
  return roomModel.update({
    _id: roomId
  }, {
    $pull: {"users": userId}
  });
}

function addRoomResult(roomId, gameId) {
  return roomModel.update({
    _id: roomId
  }, {
    $push: {"results": gameId},
    $set: {
      "isVotingInProgress": false
    }
  });
}

function setName(roomId, name) {
  return roomModel.update({
    _id: roomId
  }, {
    $set: {"name": name}
  });
}

function setFilters(roomId, filters) {
  return roomModel.update({
    _id: roomId
  }, {
    $set: {"appliedFilters": filters}
  });
}

var api = {
  getAllRooms: getAllRooms,
  createRoom: createRoom,
  findRoomById: findRoomById,
  initializeVoting: initializeVoting,
  addGame: addGame,
  addUser: addUser,
  removeUser: removeUser,
  removeGame: removeGame,
  addRoomResult: addRoomResult,
  setName: setName,
  setFilters: setFilters
};

  module.exports = api;
