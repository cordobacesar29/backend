const express = require('express');

const { validateInput } = require('../utils/validate');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/auth/register', validateInput, userController.register);

router.post('/auth/login', validateInput, userController.login);

module.exports = router;
