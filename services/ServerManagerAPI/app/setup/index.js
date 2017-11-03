const mongoose = require('mongoose'),
UserModel = require('@ServerManagerModels/user');

const models = {
    User: mongoose.model('User')
}

module.exports = models;
