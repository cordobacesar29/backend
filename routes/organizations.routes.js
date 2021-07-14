const express = require('express');
const router = express.Router();

const organizationController = require('../controllers/organizatios.controller');


router.get('/1/public', organizationController.getAllOrganizations);

module.exports = router;
