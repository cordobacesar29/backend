const { Router } = require('express');

const newsController = require('../controllers/news.controller');

const { validateNewsInput } = require('../utils/validate');

const router = Router();

router.get('/', newsController.getNewsType);
router.post('/', validateNewsInput, newsController.createEntry);
router.get('/:id', newsController.getNewsById);
router.put('/:id', newsController.updateEntry);
router.delete('/:id', newsController.deleteNew);

module.exports = router;
