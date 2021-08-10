const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const querysController = require('../../../controllers/querys.controller');
const { graphQLData, getMongoData, pushPopMongoData } = querysController;

router.use((req, res, next) => {
    const { headers } = req;
    const token = headers['access-token'];
    if (token) {
        jwt.verify(token, 'secretKey', (err, decoded) => {
            if (err) {
                res.send({
                    success: false,
                    error: 'Invalid Token',
                })
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            success: false,
            error: 'Token not provided',
        })
    }
})

router.get('/graphql/:user', async (req, res) => {
    const { params } = req;
    try {
        const getGQLData = await graphQLData(params);
        return res.status(200).send(getGQLData);
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            success: false,
            error: 'Something went wrong getting data from Github',
        })
    }
});

router.get('/mongoRepos/:user', async (req, res) => {
    const { params } = req;
    try {
        const mongoData = await getMongoData(params);
        return res.status(200).send(mongoData);
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            success: false,
            error: 'Something went wrong getting data from MongoDB',
        })
    }
});

router.post('/mongoRepos/pushpop/:id/:name/:user/:state', async (req, res) => {
    const { params } = req;
    try {
        const pushpopData = await pushPopMongoData(params);
        return res.status(200).send(pushpopData);
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            success: false,
            error: 'Something went wrong setting data in MongoDB',
        })
    }
});

module.exports = router;
