const bcrypt = require('bcryptjs');

const models = require('../models');

const jwt = require('jsonwebtoken')

const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const emailExists = await models.User.findOne({ where: { email } });
    if (emailExists) {
      return res.status(400).json({ error: 'email already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await models.User.create({ ...req.body, password: hashedPassword });
    res.status(201).json(user);
    next()
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const loginUser = (req, res) => {
  const payload = req.body;
  const token =  jwt.sign(payload, process.env.TOKEN_SECRET, {
  expiresIn: 1440
  });
  res.json({
    ok: true,
    mensaje: 'Successful authentication',
    user: req.body,
    token: token
  });   
};

module.exports = { register, loginUser };
