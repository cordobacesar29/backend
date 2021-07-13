const { Router } = require('express');
const memberController = require('../controllers/member.controller');
const { isAdmin } = require('../middlewares/auth');
const { validateMemberInput } = require('../utils/validate');
const router = Router();


router.get('/', memberController.getMembers);
router.post('/', [isAdmin, validateMemberInput], memberController.createMember);

module.exports = router;