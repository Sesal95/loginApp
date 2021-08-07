const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ghUser: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    favRepos: {
        type: Object[{}],
        required: false,
    }
});

module.exports = mongoose.model('appUsers', usersSchema);
