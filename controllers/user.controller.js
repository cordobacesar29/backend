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

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await models.User.findByPk(id);
    if (!user) {
      return res.status(400).json({ error: 'User to delete does not exist' });
    }
    const deleteUser = await models.User.destroy({
      where: {id: id}
    })
    return res.status(201).json(deleteUser);
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

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const emailExists = await models.User.findOne({ where: { email } });
    if (emailExists) {
      const passwordValidate =  bcrypt.compareSync(req.body.password, password);
      if(!passwordValidate) res.status(400).json({ok: false, msj:'User or password incorrect'});
      const user = await models.User.findOne({ password: passwordValidate });
      res.json(user);
    }else {
        res.status(400).json({ok: false, msj:'User or password incorrect'});
    }
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
};

module.exports = { 
  register,
  login,
  userData,
  deleteUser
 };
