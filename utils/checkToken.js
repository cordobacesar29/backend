const jwt = require('jsonwebtoken');
const config = require('../config/config')

// Decoding Token 
exports.checkToken = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, config.get('configToken.SEED'), (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } 
      req.decoded = decoded;
      return next();
    });
  } 
  
  return res.status(401).json({
    success: false,
    message: 'Auth token is not supplied'
  });
  
};