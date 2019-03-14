var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/ready-select-play');
mongoose.connect('mongodb://jayanth:jayanth1@ds113866.mlab.com:13866/heroku_1769gsvn');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  var allowedOrigins = [
    "http://localhost:4200",
    "https://ready-select-play.herokuapp.com"

  ];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get('/', function (req, res) {
  res.send('ReadySelectPlay Server Here!')
});

var session = require('express-session');
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'any string'
}));

var gameService = require('./services/game.service.server');
var roomService = require('./services/room.service.server');
var userService = require('./services/user.service.server');
gameService(app);
roomService(app);
userService(app);

app.listen(process.env.PORT || 4000);
