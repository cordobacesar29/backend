const express = require('express');
const { checkToken } = require('../middlewares/auth');

const { validateRegisterInput } = require('../utils/validate');
const { checkToken } = require('../utils/checkToken');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/auth/register', validateRegisterInput, userController.register);
router.post('/auth/login', validateInput, userController.login);
router.get('/auth/me', checkToken, userController.userData);
router.delete('/:id', userController.deleteUser);

module.exports = router;
