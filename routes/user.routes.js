const express = require('express');
const {checkToken} = require('../middlewares/auth');

const { validateInput } = require('../utils/validate');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/auth/register', validateInput, userController.register);
router.post('/auth/login', //validateInput,este validate no sirve para el login
            userController.login);
router.get('/auth/me', checkToken, userController.userData)

router.delete('/users/:id', userController.deleteUser );

module.exports = router;
