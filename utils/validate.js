const { check, validationResult } = require('express-validator');

exports.validateRegisterInput = [
	check('firstName')
		.isString()
		.trim()
		.escape()
		.not()
		.isEmpty()
		.withMessage('first name must not be empty')
		.bail()
		.isLength({ min: 3 })
		.withMessage('minimun 3 characters required')
		.bail(),
	check('lastName')
		.isString()
		.trim()
		.escape()
		.not()
		.isEmpty()
		.withMessage('last name must not be empty')
		.bail()
		.isLength({ min: 3 })
		.withMessage('minimun 3 characters required')
		.bail(),
	check('email')
		.not()
		.isEmpty()
		.withMessage('email must not be empty')
		.bail()
		.isEmail()
		.withMessage('must be a valid email')
		.bail(),
	check('password')
		.isLength({ min: 6 })
		.withMessage('minimun 6 characters required'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const errorsArray = errors
				.array()
				.map((error) => ({ field: error.param, message: error.msg }));
			return res.status(400).json({ errors: errorsArray });
		}
		next();
	},
];

exports.validateNewsInput = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('name must not be empty')
		.bail()
		.isString()
		.trim()
		.escape()
		.bail(),
	check('content')
		.not()
		.isEmpty()
		.withMessage('content must not be empty')
		.bail()
		.isString()
		.escape()
		.trim()
		.bail(),
	check('image')
		.not()
		.isEmpty()
		.withMessage('image must not be empty')
		.bail()
		.isString()
		.trim()
		.escape()
		.bail(),
	check('categoryId')
		.not()
		.isEmpty()
		.withMessage('categoryId must not be empty')
		.bail()
		.isInt()
		.withMessage('categoryId must be a integer number')
		.bail(),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const errorsArray = errors
				.array()
				.map((error) => ({ field: error.param, message: error.msg }));
			return res.status(400).json({ errors: errorsArray });
		}
		next();
	},
];

exports.validateContact = [
	check('name')
		.isString()
		.trim()
		.escape()
		.not()
		.isEmpty()
		.withMessage('name must not be empty')
		.bail()
		.isLength({ min: 3 })
		.withMessage('minimun 3 characters required')
		.bail(),
	check('email')
		.not()
		.isEmpty()
		.withMessage('email must not be empty')
		.bail()
		.isEmail()
		.withMessage('must be a valid email'),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const errorsArray = errors
				.array()
				.map((error) => ({ field: error.param, message: error.msg }));
			return res.status(400).json({ errors: errorsArray });
		}
		next();
	},
];

exports.validateMemberInput = [
	check('name')
		.not()
		.isEmpty()
		.withMessage('name must not be empty')
		.bail()
		.isString()
		.trim()
		.escape()
		.bail(),
	check('image')
		.not()
		.isEmpty()
		.withMessage('image must not be empty')
		.bail()
		.isString()
		.trim()
		.escape()
		.bail(),
	(req, res, next) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const errorsArray = errors
				.array()
				.map((error) => ({ field: error.param, message: error.msg }));
			return res.status(400).json({ errors: errorsArray });
		}
		next();
	},
];
