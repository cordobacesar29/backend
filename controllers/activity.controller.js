const { uploadFile } = require('../aws/aws-s3');

const models = require('../models');

const getActivities = async (req, res) => {
  try {
    const activities = await models.Activities.findAll();
    return res.status(200).json(activities);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const getActivityById = async (req, res) => {
  const { id } = req.params;
  try {
    const activity = await models.Activities.findOne({ where: { id } });
    if (!activity) {
      return res.status(404).json('No activity found with given ID');
    }
    return res.status(200).json(activity);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const createActivity = async (req, res) => {
  const { name, content } = req.body;
  try {
    const result = await uploadFile(req.file, 'activities');
    const newActivity = {
      image: result.Location,
      name,
      content,
    };
    const activitySave = await models.Activities.create(newActivity);
    res.status(201).json({ ok: true, activity: activitySave });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hubo un error',
    });
  }
};

const updateActivity = async (req, res) => {
  const { name, content } = req.body;
  const { id } = req.params;

  try {
    const activity = await models.Activities.findByPk(id);

    if (!activity) {
      return res.status(404).json({
        ok: false,
        msg: `No existe actividad con el id ${id}`,
      });
    }
    const result = await uploadFile(req.file, 'activities');
    const updatedActivity = {
      image: result.Location,
      name,
      content,
    };
    await activity.update(updatedActivity);
    res.status(201).json({ ok: true, activity: updatedActivity });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hubo un error',
    });
  }
};

module.exports = {
  createActivity,
  getActivities,
  getActivityById,
  updateActivity,
};
