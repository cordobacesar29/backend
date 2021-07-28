const express = require('express');
const router = express.Router();

const organizationController = require('../controllers/organization.controller');

router.get('/1/public', organizationController.getAllOrganizations);
router.patch('/1/public', organizationController.updateOrganizationInfo);

module.exports = router;
