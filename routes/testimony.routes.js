const express = require('express');

const { isAdmin } = require('../middlewares/auth');

const testimonyController = require('../controllers/testimony.controller');

const router = express.Router();

router.delete('/:id', isAdmin, testimonyController.deleteTestimony);

module.exports = router;