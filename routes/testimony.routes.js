const { Router } = require('express');

const testimonyController = require('../controllers/testimony.controller');

const { checkToken, isAdmin } = require('../middlewares/auth');

const router = Router();

router.put('/:id', [checkToken, isAdmin], testimonyController.updateTestimony);

module.exports = router;
