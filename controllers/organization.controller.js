const models = require("../models");

const getAllOrganizations = async (req, res) => {
  try {
    const data = await models.Organization.findAll({
      include: {
        association: 'socialMedia',
        attributes: ['facebook', 'linkedin', 'instagram']
      }
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = {
  getAllOrganizations,
};