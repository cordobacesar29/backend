const express = require('express');
const categoryController = require('./../controllers/category.controller');

// user role validator
const { checkToken, isAdmin } = require('../middlewares/auth');

// validates name
const { validateCategory } = require('./../utils/validate');

const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.post(
  '/',
  [checkToken, isAdmin],
  validateCategory,
  categoryController.createCategory
);
router.put('/:id', [checkToken, isAdmin], categoryController.updateCategory);
router.delete('/:id', [checkToken, isAdmin], categoryController.deleteCategory);

module.exports = router;
