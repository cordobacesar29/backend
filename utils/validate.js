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
    .normalizeEmail()
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
        .map(error => ({ field: error.param, message: error.msg }));
      return res.status(400).json({ errors: errorsArray });
    }
    next();
  },
];

exports.validateNewsInput = [
  // TODO: make validations
];
