const express = require('express');
const contactController = require('./../controllers/contact.controller');

// validates name, phone and email
const { validateContact } = require('./../utils/validate');

const router = express.Router();

router.route('/').post(validateContact, contactController.createContact);

module.exports = router;
