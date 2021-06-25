// Import modules
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

// import users
const { User } = require('../db')


// Get user's data
router.get('/me', async (req, res)=>{

  checkToken(req, res, () => {
    // Getting user by id
    try {
      const userMe = await User.findByPk(req.decoded);
      if (userMe === null) {
        res.status(404).json({
          ok: false,
          msg: "Users id does not exist",
        });
      } else {
        res.json(userMe);
      }
    } catch (error) {
      console.log(error);
    }
  })

});

// Decoding Token function
let checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};