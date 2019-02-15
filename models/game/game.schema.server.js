var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  gameId: Number,
  name: String,
  description: String,
  image: String,
  thumbnail: String,
  minPlayers: Number,
  maxPlayers: Number,
  playingTime: Number,
  mechanics: [String],
  isExpansion: Boolean,
  yearPublished: Number,
  bggRating: Number,
  averageRating: Number,
  rank: Number,
  designers: [String],
  publishers: [String],
  artists: [String],
  playerPollResults: [{type: mongoose.Schema.Types.ObjectId}]
}, {collection: 'game'});

module.exports = gameSchema;