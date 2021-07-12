const models = require('../models');

exports.createCategory = async (req, res) => {
	try {
		const newCategory = await models.Category.create(req.body);

		return res.status(201).json({
			status: 'success',
			message: `New category created with id: ${newCategory.id}`,
		});
	} catch (error) {
		return res.status(400).json({ error });
	}
};

exports.getAllCategories = async (req, res) => {
	try {
		const categories = await models.Category.findAll({
			attributes: ['name'],
		});
		return res.status(200).json(categories);
	} catch (error) {
		return res.status(400).json({ error });
	}
};
