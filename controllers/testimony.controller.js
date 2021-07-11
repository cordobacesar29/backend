const models = require("../models");

const deleteTestimony = async (req, res) => {
  const { id } = req.params;
  try {
    const testimony = await models.Testimony.findByPk(id);
    if (!testimony) {
      return res
        .status(400)
        .json({ error: "Testimony to delete does not exist" });
    }
    await models.Testimony.destroy({
      where: { id: id },
    });
    return res.status(200).json("Successfully testimony deleted");
  } catch (error) {
    return res.status(400).json({ error });
  }
};

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


//************************************************************** */


const createTestimony = async (req, res) => {
	try {
	const result = await models.Testimony.create(req.body);
	return res.status(201).json({
	status: 'success',
    message: 'successfully created testimony'
	});} 
    catch (e) {
    return res.status(400).json({
     e,message: 'error loading testimony',
  });}
};
//************************************************************** */


module.exports = { updateTestimony, deleteTestimony, createTestimony };
