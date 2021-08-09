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
});

module.exports = mongoose.model('appUsers', usersSchema);
