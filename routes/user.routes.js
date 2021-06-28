const express = require('express');
const {checkToken} = require('../middlewares/auth');

const { validateInput } = require('../utils/validate');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/auth/register', validateInput, userController.register);

router.post('/auth/login', validateInput, userController.login);

router.get('/', checkToken, userController.auth);

module.exports = router;
