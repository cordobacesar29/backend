const { Router } = require('express');

const newsController = require('../controllers/news.controller');

const { validateNewsInput } = require('../utils/validate');

const router = Router();

router.get('/', newsController.getNewsType);
router.post('/', validateNewsInput, newsController.createEntry);

module.exports = router;
