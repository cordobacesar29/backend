const { check, validationResult } = require('express-validator');

const handleValidate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorsArray = errors
      .array()
      .map(error => ({ field: error.param, message: error.msg }));
    return res.status(400).json({ errors: errorsArray });
  }
  next();
};

const _imageIsValid = check('image')
  .not()
  .isEmpty()
  .withMessage('image must not be empty')
  .bail()
  .isString()
  .trim()
  .escape()
  .bail();

const _emailIsValid = check('email')
  .not()
  .isEmpty()
  .withMessage('email must not be empty')
  .bail()
  .isEmail()
  .withMessage('must be a valid email')
  .bail();

const _nameIsValid = check('name')
  .not()
  .isEmpty()
  .withMessage('name must not be empty')
  .bail()
  .isString()
  .trim()
  .escape()
  .bail();

const _contentIsValid = check('content')
  .not()
  .isEmpty()
  .withMessage('content must not be empty')
  .bail()
  .isString()
  .escape()
  .trim()
  .bail();

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
  _emailIsValid,
  check('password')
    .isLength({ min: 6 })
    .withMessage('minimun 6 characters required'),
  handleValidate,
];

exports.validateNewsInput = [
  _nameIsValid,
  _contentIsValid,
  _imageIsValid,
  check('categoryId')
    .not()
    .isEmpty()
    .withMessage('categoryId must not be empty')
    .bail()
    .isInt()
    .withMessage('categoryId must be a integer number')
    .bail(),
  handleValidate,
];

exports.validateContact = [
  _nameIsValid
    .isLength({ min: 3 })
    .withMessage('minimun 3 characters required')
    .bail(),
  _emailIsValid,
  handleValidate,
];

exports.validateCategory = [
  _nameIsValid
    .isLength({ min: 3 })
    .withMessage('minimun 3 characters required')
    .bail(),
  handleValidate,
];

exports.validateMemberInput = [
  _nameIsValid
    .isLength({ min: 3 })
    .withMessage('minimun 3 characters required')
    .bail(),
  handleValidate,
];

exports.validateData = [_nameIsValid, _contentIsValid, handleValidate];

exports.validaTestimony = [
  _nameIsValid,
  _contentIsValid,
  _imageIsValid,
  handleValidate,
];

exports.validateLoginInput = [
  _emailIsValid,
  check('password')
    .isLength({ min: 6 })
    .withMessage('minimun 6 characters required'),
  handleValidate,
];

exports.validateActivityInput = [_nameIsValid, _contentIsValid, handleValidate];
