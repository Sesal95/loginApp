const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require('./drivers/mongo');

const routes = require('./routes');

app.use((req, res, next) => {
    req.port = 8000
    next();
})

// cors
app.use(cors());

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// Catch 404 error handler
app.use((req, res, next) => {
    next(createError(404));
})

app.use((err, req, res, next) => {
    const data = {
        message: err.message,
        error: err.toString(),
    }
    const error = err.status || 500;
    res.status(error).send(data);
})

app.listen(8000, () => {
    console.log('Listening on port 8000')
});

module.exports = app;
