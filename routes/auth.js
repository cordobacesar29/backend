const express = require('express');

const { validateInput } = require('../utils/login.validate');

const userController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/auth/login', validateInput, userController.login);

module.exports = router;
