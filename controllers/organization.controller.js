const models = require('../models');

const getOrganization = async( req, res) => {
    try {
      const data = await models.Organization.findAll();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(400).json({ error });
    }
}

module.exports = {
    getOrganization
};