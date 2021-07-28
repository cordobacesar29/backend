const express = require('express');

const activityController = require('../controllers/activity.controller');

const upload = require('../middlewares/upload');
const { validateActivityInput } = require('../utils/validate');

const router = express.Router();

router.get('/', activityController.getActivities);
router.get('/:id', activityController.getActivityById);
router.post(
  '/',
  upload,
  validateActivityInput,
  activityController.createActivity
);
router.put('/:id', upload, validateActivityInput, activityController.updateActivity);

module.exports = router;
