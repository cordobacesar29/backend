const bcrypt = require('bcryptjs');
const models = require('../models');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const emailExists = await models.User.findOne({ where: { email } });
    if (emailExists) {
      const passwordValidate =  bcrypt.compareSync(req.body.password, password);
      if(!passwordValidate) res.status(400).json({ok: false, msj:'User or password incorrect'});
      const user = await models.User.findOne({ ...req.body, password: passwordValidate });
      res.json(user);
    }else {
        res.status(400).json({ok: false, msj:'User or password incorrect'});
    }
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
};

module.exports = { login };
