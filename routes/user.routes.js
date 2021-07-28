const express = require('express');
const { checkToken, isAdmin } = require('../middlewares/auth');

const { validateRegisterInput } = require('../utils/validate');
const { validateLoginInput } = require('../utils/validate');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.post(
  '/auth/register',
  validateRegisterInput,
  userController.register,
  userController.loginAfterRegister
);
router.post('/auth/login', validateLoginInput, userController.login);
router.get('/auth/me', checkToken, userController.getMyProfile);
router.get('/:id', checkToken, userController.getUserById);

router.get('/', [checkToken, isAdmin], userController.getUsers);
router.delete('/users/:id', isAdmin, userController.deleteUser);

module.exports = router;
