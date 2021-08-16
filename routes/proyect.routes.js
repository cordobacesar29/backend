const { Router } = require('express');

const proyectController = require('../controllers/proyect.controller');
const { isAdmin } = require('../middlewares/auth');
const { checkToken } = require('../middlewares/auth');
const router = Router();

router.get('/', proyectController.getProyect);
router.get('/:id', checkToken, proyectController.getProyectById);
router.put("/:id", [checkToken, isAdmin], proyectController.updateProyect);
router.post('/', [checkToken, isAdmin], proyectController.createProyect);
router.delete('/:id', [checkToken, isAdmin], proyectController.deleteProyect);

module.exports = router;