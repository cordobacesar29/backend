const { Router } = require('express');
const memberController = require('../controllers/member.controller');
const router = Router();
const { validateMemberInput } = require('../utils/validate');

router.get('/', memberController.getMembers);
router.put("/:id", validateMemberInput, memberController.updateMember);

module.exports = router;