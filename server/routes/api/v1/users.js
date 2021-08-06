const express = require('express');
const router = express.Router();

const userController = require('../../../controllers/user.controller');

router.get('/', (req, res) => {
    res.status(200).send(
        {
            status: 'Alive'
        }
    )
});

router.post('/register', (req, res) => {
    const { body } = req;
    userController.validateRegister(body);
});

module.exports = router;
