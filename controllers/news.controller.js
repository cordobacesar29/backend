const models = require('../models');

const createEntry = async (req, res) => {
  try {
    const entry = await models.Entry.create({ ...req.body, type: 'news' });
    return res.status(201).json(entry);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { createEntry };
