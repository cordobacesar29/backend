const { Router } = require('express');
const { validateData } = require('../utils/validate');
const testimonyController = require('../controllers/testimony.controller');

const { checkToken, isAdmin } = require('../middlewares/auth');

const router = Router();

router.delete('/:id', isAdmin, testimonyController.deleteTestimony);
router.put('/:id', [checkToken, isAdmin], testimonyController.updateTestimony);
router.post('/', validateData, testimonyController.createTestimony);

module.exports = router;

