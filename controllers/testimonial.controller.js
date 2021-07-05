const models = require('../models');

const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonialToUpdate = await models.Testimonial.findOne({ where: { id } });
    if (!testimonialToUpdate) {
      return res.status(404).json({ error: 'testimonial not found with that ID' });
    }
    await testimonialToUpdate.update(...req.body);
    return res.status(200).json(testimonialToUpdate);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { updateTestimonial };
