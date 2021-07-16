const express = require('express');
const { validaTestimony } = require('../utils/validate');
const testimonyController = require('../controllers/testimony.controller');

const { checkToken, isAdmin } = require('../middlewares/auth');

const router = express.Router();

router.get('/', isAdmin, testimonyController.getTestimonials);
router.delete('/:id', isAdmin, testimonyController.deleteTestimony);
router.put('/:id', [checkToken, isAdmin], testimonyController.updateTestimony);
router.post('/', validaTestimony, testimonyController.createTestimony);


module.exports = router;

