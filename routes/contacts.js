
const express = require('express');
const router = express.Router();
const {isAdmin } = require('../middlewares/auth');
const getContactsControler = require('../controllers/contact.controller');

router.get('/',isAdmin, getContactsControler.getContactsControler);

module.exports = router;



