const mongoose = require("mongoose");

const { Schema } = mongoose;

const reposSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    ghUser: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('ghRepos', reposSchema);
