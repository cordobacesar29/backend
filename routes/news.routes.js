const express = require('express');

const newsController = require('../controllers/news.controller');

const router = express.Router();

// router.post('/news', newsController.createEntry);
router.get('/news', newsController.getNewsType);

// get news by id
router.get('/news/:id', newsController.getNewsById);

module.exports = router;
