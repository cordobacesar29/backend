const express = require('express');
// const {checkToken} = require('../middlewares/auth');

const { validateInput } = require('../utils/validate');
const { checkToken } = require('../utils/checkToken');
const { admin } = require('../utils/isAdmin');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/auth/register', validateInput, userController.register);
router.post('/auth/login', validateInput, userController.login);
router.get('/auth/me', checkToken, userController.userData)

router.get('/', admin, userController.getUsers);
router.delete('/users/:id', userController.deleteUser );

module.exports = router;
