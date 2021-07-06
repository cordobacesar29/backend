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

module.exports = { deleteTestimony };
