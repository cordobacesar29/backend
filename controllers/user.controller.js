const config = require('config');
const bcrypt = require('bcryptjs');

const jwt = require ('jsonwebtoken');

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

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const emailExists = await models.User.findOne({ where: { email } });
    if (emailExists) {
      const passwordValidate =  bcrypt.compareSync(req.body.password, password);
      if(!passwordValidate) res.status(400).json({ok: false, msj:'User or password incorrect'});
      const jwToken = jwt.sign({data: req.body},config.get("configToken.SEED"), { expiresIn: config.get("configToken.expiration")});
      res.json({
        user: {
          email: email,
          password: password
        },
        jwToken
      });
    }
    res.status(400).json({ok: false, msj:'User or password incorrect'});
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
};

module.exports = { 
  register,
  login
 };
