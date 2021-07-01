const express = require('express');

const newsController = require('../controllers/news.controller');

const router = express.Router();

// router.post('/news', newsController.createEntry);
router.get('/news', newsController.getNewsType);

// get news by id
router.get('/news/:id', newsController.getNewsById);

// delete news by id
router.delete('news/:id', newsController.deleteNew);

module.exports = router;
