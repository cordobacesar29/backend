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
  const activity = await models.Activities.findOne({ where: { id } });

  try {
    if (activity) res.status(200).json(activity);
    else res.staus(404).json('No activity found with given ID');
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const createActivity = async (req, res) => {
  const { filename } = req.file;
  const { name, content } = req.body;

  const newActivity = {
    image: filename,
    name,
    content,
  };

  try {
    const activitySave = await models.Activities.create(newActivity);

    res.json({
      ok: true,
      activity: activitySave,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hubo un error',
    });
  }
};

const updateActivity = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const activity = await models.Activities.findByPk(id);

    if (!activity) {
      return res.status(404).json({
        ok: false,
        msg: `No existe actividad con el id ${id}`,
      });
    }

    await activity.update(body);

    res.json({
      ok: true,
      activity,
    });
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
