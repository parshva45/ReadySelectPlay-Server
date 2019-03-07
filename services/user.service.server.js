module.exports = function (app) {

    var userModel = require('../models/user/user.model.server');

    app.get('/api/user', getAllUsers);
    app.post('/api/user', createUser);
    app.get('/api/user/:name', getUserByName);

    function getUserByName(req, res) {
        var name = req.params['name'];
        userModel.findUserByName(name)
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
