const models = require("../models");

const getMembers = async (req, res) => {
  try {
    const data = await models.Member.findAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const updateMember= async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const member = await models.Member.findByPk(id);

    if (!member) {
      return res.status(404).json({
        ok: false,
        msg: `Not found member with the id ${id}`
      });
    }

    await member.update(body);

    res.json({
      ok: true,
      member
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error'
    });
  }
}

module.exports = { 
    getMembers,
    updateMember
};
  