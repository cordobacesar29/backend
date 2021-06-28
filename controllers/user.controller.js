const bcrypt = require('bcryptjs');

const models = require('../models');


const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const emailExists = await models.User.findOne({ where: { email } });
    if (emailExists) {
      return res.status(400).json({ error: 'email already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await models.User.create({ ...req.body, password: hashedPassword });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const userData = async (req, res) => {
  const userId = req.decoded
  // Getting user by id
  try {
    const userData = await models.User.findByPk(userId);
    if (userData === null) {
      res.status(404).json({
        ok: false,
        msg: "User id does not exist",
      });
    } else {
      res.json(userData);
    }
  } catch (error) {
    return res.status(400).json({ error });
  }

}

module.exports = { register, userData };
