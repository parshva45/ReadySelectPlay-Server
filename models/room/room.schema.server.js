var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({
  name: String,
  games: [Number],
  users: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}],
  isVotingInProgress: Boolean,
  results: [Number]
}, {collection: 'room'});

module.exports = roomSchema;
