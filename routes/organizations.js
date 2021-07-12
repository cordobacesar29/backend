const express = require('express');
const router = express.Router();

const ORGController = require('../controllers/organization.controller');


router.get('/1/public', ORGController.getOrganization);

module.exports = router;