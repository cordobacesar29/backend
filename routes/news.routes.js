const { Router } = require('express');

const upload = require('../middlewares/upload');

const newsController = require('../controllers/news.controller');

const { validateNewsInput } = require('../utils/validate');
const { checkToken, isAdmin } = require('../middlewares/auth');

const router = Router();

router.get('/', newsController.getNewsType);
router.post(
  '/',
  upload,
  [checkToken, isAdmin],
  validateNewsInput,
  newsController.createEntry
);
router.get('/:id', newsController.getNewsById);
router.put('/:id', upload, [checkToken, isAdmin], newsController.updateEntry);
router.delete('/:id', [checkToken, isAdmin], newsController.deleteNew);

module.exports = router;
