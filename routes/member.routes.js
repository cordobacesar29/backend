const { Router } = require('express');
const memberController = require('../controllers/member.controller');
const router = Router();

router.get('/', memberController.getMembers);

module.exports = router;