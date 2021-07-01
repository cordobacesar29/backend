const models = require('../models');

// get a news entry by ID
const getNewsById = async (req, res) => {
  const { id } = req.params.id;

  try {
    const newsEntry = await models.Entry.findOne({
      where: { id: id },
      include: 'category',
    });

    return res.status(200).json({ message: 'success', newsEntry });
  } catch (error) {
    return res.status(401).json({
      status: 'failed',
      message: 'no news found with the given ID.',
    });
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
      attributes: ['name', 'image', 'createdAt'],
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

module.exports = { createEntry, getNewsById, getNewsType, updateEntry };
