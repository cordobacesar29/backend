const models = require('../models');

const getSlides = async (req, res) => {
  try {
    const slides = await models.slide.findAll();
    return res.status(200).json(slides);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = {
   getSlides,
};
  