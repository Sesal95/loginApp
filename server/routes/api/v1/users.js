const express = require('express');
const router = express.Router();

const userController = require('../../../controllers/user.controller');
const { register, login } = userController;

router.get('/', (req, res) => {
    res.status(200).send(
        {
            status: 'Alive'
        }
    )
});

router.post('/register', async (req, res) => {
    const { body } = req;
    try {
        const response = await register(body);
        return res.status(200).send(response);
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            success: false,
            error: 'Something went wrong in register process. Please try again',
        })
    }
});

router.post('/login', async (req, res) => {
    const { body } = req;
    try {
        const getLogin = await login(body);
        return res.status(200).send(getLogin);
    } catch (e) {
        console.log(e);
        return res.status(500).send({
            success: false,
            error: 'Something went wrong in login process. Please try again',
        })
    }
});

module.exports = router;
