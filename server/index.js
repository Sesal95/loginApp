const express = require('express');
const createError = require('http-errors');

const app = express();

require('./drivers/mongo');

const routes = require('./routes');

//BodyParser
app.use(express.urlencoded({extended : false}));

app.use((req, res, next) => {
    req.port = 8000
    next();
})

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
