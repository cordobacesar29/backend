const { Router } = require('express');

const testimonialController = require('../controllers/testimonial.controller');

const { checkToken, isAdmin } = require('../middlewares/auth');

const router = Router();

router.put('/:id', [checkToken, isAdmin], testimonialController.updateTestimonial);

module.exports = router;
