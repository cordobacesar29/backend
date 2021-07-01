const express = require('express');
const newsController = require('../controllers/newsController');
const router = express.Router();

router.get('/news', newsController.getNewsType);
router.delete('news/:id', newsController.deleteNew);

module.exports = router;