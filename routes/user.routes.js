const express = require('express');
const { checkToken } = require('../utils/checkToken');
const { validateInput } = require('../utils/validate');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/auth/register', validateInput, userController.register, userController.loginAfterRegister);
router.post('/auth/login', validateInput, userController.login);
router.get('/auth/me', checkToken, userController.userData)

router.delete('/:id', userController.deleteUser );

module.exports = router;
