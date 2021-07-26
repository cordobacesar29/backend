const express = require('express');
const { check } = require('express-validator');

const {
  createActivity,
  updateActivity,
  getActivityById,
} = require('../controllers/activity.controller');
const { validateFields } = require('../middlewares/validateFields');

const upload = require('../middlewares/upload');

const router = express.Router();

router.get('/:id', getActivityById);

router.post(
  '/',
  upload,
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('content', 'El contenido es obligatorio').not().isEmpty(),
    validateFields,
  ],
  createActivity
);

router.put(
  '/:id',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('content', 'El contenido es obligatorio').not().isEmpty(),
    validateFields,
  ],
  updateActivity
);

module.exports = router;

