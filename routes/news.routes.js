const express = require('express');

const newsController = require('../controllers/news.controller');

const router = express.Router();

// router.post('/news', newsController.createEntry);
router.get('/news', newsController.getNewsType);

module.exports = router;