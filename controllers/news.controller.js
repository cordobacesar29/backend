const models = require('../models');

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

module.exports = { createEntry, getNewsType };
