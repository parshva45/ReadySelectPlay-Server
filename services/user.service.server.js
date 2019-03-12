module.exports = function (app) {

    var userModel = require('../models/user/user.model.server');

    app.get('/api/user', getAllUsers);
    app.post('/api/user', createUser);
    app.get('/api/user/:userId', getUserById);

    function getUserById(req, res) {
        var userId = req.params['userId'];
        userModel.findUserById(userId)
            .then(user => res.send(user));
    }

    function getAllUsers(req, res) {
        return userModel
            .getAllUsers()
            .then(function(users) {
                res.json(users);
            });
    }

    function createUser(req, res) {
        var user = req.body;
        return userModel
            .createUser(user)
            .then(function (status) {
                res.send(status)
            })
    }

};
