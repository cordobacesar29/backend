const express = require('express');
const sendMail = require('../utils/sendMail');

const router = express.Router();

router.post('/', sendMail);

module.exports = router;