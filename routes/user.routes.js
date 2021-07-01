const express = require('express');

const { validateRegisterInput } = require('../utils/validate');
const { checkToken } = require('../utils/checkToken');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/auth/register', validateRegisterInput, userController.register);
router.post('/auth/login', validateInput, userController.login);
router.get('/auth/me', checkToken, userController.userData);

module.exports = router;
