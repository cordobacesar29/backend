const express = require('express');
const {checkToken} = require('../middlewares/auth');
const { validateInput } = require('../utils/validate');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/auth/register', validateInput, userController.register, userController.login);
router.post('/auth/login', validateInput, userController.login);
router.get('/auth/me', checkToken, userController.userData)

router.delete('/users/:id', userController.deleteUser );

module.exports = router;
