const express = require('express');

const contactController = require('./../controllers/contact.controller');
const { isAdmin } = require('../middlewares/auth');

// validates name, phone and email
const { validateContact } = require('./../utils/validate');

const router = express.Router();

router.route('/').get(isAdmin, contactController.getContactsControler);
router.route('/').post(validateContact, contactController.createContact);

module.exports = router;
