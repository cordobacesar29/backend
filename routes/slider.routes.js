const express = require('express');

const sliderController = require('../controllers/slider.controller');

const upload = require('../middlewares/upload');
// const { validateActivityInput } = require('../utils/validate');

const router = express.Router();

router.get('/', sliderController.getSlides);
router.put('/', upload, sliderController.updateSliders);

module.exports = router;
