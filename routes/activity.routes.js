const express = require('express');
const { check } = require('express-validator');

const { createActivity } = require('../controllers/activity.controller');
const { validateFields } = require('../middlewares/validateFields');

const router = express.Router();

router.post(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('content', 'El contenido es obligatorio').not().isEmpty(),
        validateFields
    ],
    createActivity
);

module.exports = router;