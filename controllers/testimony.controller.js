const models = require('../models');

const updateTestimony = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonyToUpdate = await models.Testimony.findOne({ where: { id } });
    if (!testimonyToUpdate) {
      return res.status(404).json({ error: 'testimony not found with that ID' });
    }
    await testimonyToUpdate.update(...req.body);
    return res.status(200).json(testimonyToUpdate);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { updateTestimony };
