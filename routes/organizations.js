const express = require('express');
const router = express.Router();

const organizationController = require('../controllers/organization.controller');


router.get('/1/public', organizationController.getOrganization);

module.exports = router;