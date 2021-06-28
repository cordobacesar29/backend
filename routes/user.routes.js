const express = require('express');

const { validateInput } = require('../utils/validate');
const { checkToken } = require('../utils/checkToken');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/auth/register', validateInput, userController.register);

router.get('/auth/me', checkToken, userController.userData)

module.exports = router;
