const models = require('../models');

const getActivityById = async (req, res) => {
	const { id } = req.params;
	const activity = await models.Activities.findOne({ where: { id: id } });

	try {
		if (activity) res.status(200).json(activity);
		else res.staus(404).json('No activity found with given ID');
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const createActivity = async (req, res) => {
	const { body } = req;

	try {
		const activitySave = await models.Activities.create(body);

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
	updateActivity,
	getActivityById,
};
