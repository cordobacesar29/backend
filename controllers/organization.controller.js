const models = require('../models');

const getAllOrganizations = async (req, res) => {
  try {
    const data = await models.Organization.findAll({
      include: {
        association: 'socialMedia',
        attributes: ['facebook', 'linkedin', 'instagram'],
      },
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const updateOrganizationInfo = async (req, res) => {
  const { welcomeText, name, image } = req.body;
  console.log(welcomeText);
  try {
    const data = await models.Organization.findOne({ where: { id: 1 } });
    if (!data) {
      return res.status(404).json({ error: 'organization ID not found' });
    }
    if (welcomeText) await data.update({ welcomeText });
    if (name && image) await data.update({ name, image });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = {
  getAllOrganizations,
  updateOrganizationInfo,
};
