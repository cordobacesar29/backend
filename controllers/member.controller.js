const models = require("../models");

const getMembers = async (req, res) => {
  try {
    const data = await models.Member.findAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { 
    getMembers
};
  