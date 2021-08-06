const mongoose = require('mongoose');

const mongoIp = '127.0.0.1';
const mongoPort = '27017';
const mongoCollection = 'reposapp'

const mongoDB = mongoose.connect(`mongodb://${mongoIp}:${mongoPort}/${mongoCollection}`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Successfully connected to MongoDB @ ${mongoIp}:${mongoPort}`);
        }
    }
)

module.exports = mongoDB;
