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

var api ={
  getAllRooms: getAllRooms,
  createRoom: createRoom,
  findRoomById: findRoomById
};

module.exports = api;