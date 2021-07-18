const express = require('express');
const categoryController = require('./../controllers/category.controller');

// user role validator
const { checkToken, isAdmin } = require('../middlewares/auth');

// validates name, phone and email
const { validateCategory } = require('./../utils/validate');

const router = express.Router();

router
	.route('/')
	.get(categoryController.getAllCategories)
	.post(
		[checkToken, isAdmin],
		validateCategory,
		categoryController.createCategory
	);

router.put('/categories/:id', [checkToken, isAdmin], categoryController.updateCategory);

module.exports = router;
