const models = require('../models');

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

module.exports = { createEntry, updateEntry };
