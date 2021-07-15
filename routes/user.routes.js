const express = require('express');
const {checkToken, isAdmin} = require('../middlewares/auth');

const { validateRegisterInput } = require('../utils/validate');

const userController = require('../controllers/user.controller');


const router = express.Router();

router.post('/auth/register', validateRegisterInput, userController.register);
router.post('/auth/login', //validateInput,este validate no sirve para el login
            userController.login);
router.get('/auth/me', checkToken, userController.userData)

router.get('/', [checkToken, isAdmin], userController.getUsers);
router.delete('/users/:id', isAdmin, userController.deleteUser );

module.exports = router;
