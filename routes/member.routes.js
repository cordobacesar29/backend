const { Router } = require('express');
const memberController = require('../controllers/member.controller');
const { isAdmin } = require('../middlewares/auth');
const { validateMemberInput } = require('../utils/validate');
const router = Router();

router.get('/', memberController.getMembers);
router.put("/:id", validateMemberInput, memberController.updateMember);
router.post('/', isAdmin, validateMemberInput, memberController.createMember);
router.delete('/:id', isAdmin, memberController.deleteMember);

module.exports = router;