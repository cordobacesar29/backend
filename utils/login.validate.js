const { check, validationResult } = require('express-validator');

exports.validateInput = [
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
