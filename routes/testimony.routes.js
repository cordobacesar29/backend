const express = require('express');

const testimonyController = require('../controllers/testimony.controller');

const { validaTestimony } = require('../utils/validate');

const { checkToken, isAdmin } = require('../middlewares/auth');

const router = express.Router();

router.get('/', testimonyController.getTestimonials);
router.get('/:id', testimonyController.getTestimonyById);
router.delete(
  '/:id',
  [checkToken, isAdmin],
  testimonyController.deleteTestimony
);
router.put('/:id', [checkToken, isAdmin], testimonyController.updateTestimony);
router.post('/', validaTestimony, testimonyController.createTestimony);

module.exports = router;
