const config = require('config');
const bcrypt = require('bcryptjs');

const jwt = require ('jsonwebtoken');

const models = require('../models');

const salt = config.get('salt');

const sendMail = require('../utils/sendMail');

const isUser = (user)=> !!user;
const generatehast = (password) => bcrypt.hashSync(password, salt)

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const duplicatedUser = await models.User.findOne({ where: { email } });
    if (isUser(duplicatedUser)) {
      return res.status(400).json({ error: 'email already in use' });
    }
    const hashedPassword = generatehast(password);
    const user = await models.User.create({ ...req.body, password: hashedPassword });
    const msg = {
      to: user.email, // 'to: nombre del email' Email destino
      subject: "Sent from website contact Form", // 'subject: titulo del texto' Titulo del mensaje
      text: "Hello", // 'text: contenido del mensaje' Descripción del mensaje
      html: `<strong>Gracias por registrarte ${user.firstName} ${user.lastName}!</strong>`,
    }
    sendMail(msg);
    return res.status(201).json({ 
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getUsers = async( req, res) => {
  try {
    const data = await models.User.findAll();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await models.User.findByPk(id);
    if (isUser(user)) {
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
    if (isUser(user)) {
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
    const user = await models.User.findOne({ where: { email } });
    if (isUser(user)) {
      const passwordValidate =  bcrypt.compareSync(password , user.password);
      if(!passwordValidate)   throw new Error('User or password incorrect')
      
      const jwToken = jwt.sign({data: {id: user.id, role: user.roleId}},config.get("configToken.SEED"), { expiresIn: config.get("configToken.expiration")});
      return res.status(200).json({
        message: "user authenticated",
        jwToken
      });
    }
    throw new Error('User or password incorrect')
  } catch (error) {
    return res.status(400).json({ ok: false, error });
  }
};

module.exports = { 
  register,
  login,
  userData,
  deleteUser,
  getUsers
 };
