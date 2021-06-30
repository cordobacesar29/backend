const { Router } = require('express');

const newsController = require('../controllers/news.controller');

const { validateNewsInput } = require('../utils/validate');

const router = Router();

router.post('/', validateNewsInput, newsController.addOne);

module.exports = router;
