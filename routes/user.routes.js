const express = require('express');

const { validateRegisterInput } = require('../utils/validate');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/auth/register', validateRegisterInput, userController.register);

module.exports = router;
