const bcrypt = require('bcryptjs');

const UserMock = require('../models/user');

const register = async (req, res) => {
  const { password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserMock.create({ ...req.body, password: hashedPassword });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { register };
