const models = require('../models');

// get a news entry by ID
const getNewsById = async (req, res) => {
	const { id } = req.params;

	try {
		const newsEntry = await models.Entry.findOne({
			where: { id: id },
			include: 'category',
		});

		if (newsEntry) res.status(200).json({ status: 'success', newsEntry });
		else
			res.status(401).json({
				status: 'failed',
				message: 'no news found with the given ID.',
			});
	} catch (error) {
		return res.status(401).json(error);
	}
};

// getting all news where type = "news"
const getNewsType = async (req, res) => {
	try {
		const { Op } = require('sequelize');
		const data = await models.Entry.findAll({
			where: {
				type: {
					[Op.eq]: 'news',
				},
			},
			attributes: ['id', 'name', 'image', 'createdAt'],
		});
		return res.status(200).json(data);
	} catch (error) {
		return res.status(400).json({ error });
	}
};

const createEntry = async (req, res) => {
	try {
		const entry = await models.Entry.create({ ...req.body, type: 'news' });
		return res.status(201).json(entry);
	} catch (error) {
		return res.status(400).json({ error });
	}
};

const updateEntry = async (req, res) => {
	const { id } = req.params;
	try {
		const entryToUpdate = await models.Entry.findOne({ where: { id } });
		if (!entryToUpdate) {
			return res.status(404).json({ error: 'entry not found with that ID' });
		}
		await entryToUpdate.update(req.body);
		return res.status(200).json(entryToUpdate);
	} catch (error) {
		return res.status(400).json({ error });
	}
};

// DELETE

const deleteNew = async (req, res) => {
	const { id } = req.params;
	try {
		const news = await models.Entry.findByPk(id);
		if (!news) {
			return res.status(400).json({ error: 'News to delete does not exist' });
		}
		const deleteNew = await models.Entry.destroy({
			where: { id: id },
		});
		return res.status(201).json(deleteNew);
	} catch (error) {
		return res.status(500).json({ error });
	}
};

module.exports = {
	getNewsType,
	createEntry,
	getNewsById,
	deleteNew,
	updateEntry,
};
