const { uploadFile } = require('../aws/aws-s3');

const models = require('../models');

const getSlides = async (req, res) => {
  try {
    const slides = await models.slide.findAll();
    return res.status(200).json(slides);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const updateSlides = async (req, res) => {
  const { id } = req.params;

  console.log({ id });

  try {
    const slideToUpdate = await models.slide.findOne({
      where: { id: Number(id) },
    });
    if (!slideToUpdate) {
      return res.status(404).json({ error: 'slide ID not found' });
    }
    const result = await uploadFile(req.file, 'home');
    await slideToUpdate.update({ ...req.body, imageUrl: result.Location });
    res.status(200).json(slideToUpdate);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = {
  getSlides,
  updateSlides,
};
