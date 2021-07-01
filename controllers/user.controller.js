const config = require('config');
const bcrypt = require('bcryptjs');

const jwt = require ('jsonwebtoken');

const models = require('../models');


const register = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const emailExists = await models.User.findOne({ where: { email } });
    if (emailExists) {
      return res.status(400).json({ error: 'email already in use' });
    }
    const hashedPassword = bcrypt.hash(password, 10);
    const user = await models.User.create({ ...req.body, password: hashedPassword });
    res.locals.id = user.id
    return next()
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
  const userId = req.user.id
  // Getting user by id
  try {
    const userData = await models.User.findByPk(userId);
    if (userData === null) {
      res.status(404).json({
        ok: false,
        msg: "User id does not exist",
      });
    } 
    res.json(userData);
  } catch (error) {
    return res.status(400).json({ error });
  }

}

const loginAfterRegister = (req, res) =>{
  const payload = {id: res.locals.id};
  try {
    const jwToken = jwt.sign(
      payload,
      config.get("configToken.SEED"), 
      { expiresIn: config.get("configToken.expiration")}
    );
    return res.status(201).json({
      ok: true,
      message: "user registered and authenticated",
      token: jwToken
    });
  } catch (error) {
    return res.status(401).json({ ok: false, error });
  }  
}

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await models.User.findOne({ where: { email } });
    if (userExists) {

      const passwordValidate = bcrypt.compareSync(password, userExists.password);
      if(!passwordValidate) return res.status(400).json({ok: false, msj:'User or password incorrect'});

      const payload = {id: userExists.id};
      const jwToken = jwt.sign(
        payload,
        config.get("configToken.SEED"), 
        { expiresIn: config.get("configToken.expiration")}
      );
      return res.status(200).json({
        ok: true,
        message: "user authenticated",
        token: jwToken
      });
    }
    return res.status(400).json({ok: false, msj:'User or password incorrect'});

  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
};

module.exports = { 
  register,
  login,
  userData,
  deleteUser,
  loginAfterRegister
 };
