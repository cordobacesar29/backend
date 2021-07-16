const express = require('express');
const categoryController = require('./../controllers/category.controller');

// user role validator
const { checkToken, isAdmin } = require('../middlewares/auth');

// validates name, phone and email
const { validateCategory } = require('./../utils/validate');

const router = express.Router();

router
	.route('/')
	.post(
		[checkToken, isAdmin],
		validateCategory,
		categoryController.createCategory
	);

module.exports = router;
