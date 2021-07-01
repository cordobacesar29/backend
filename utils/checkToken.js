const jwt = require('jsonwebtoken');

// Decoding Token 
exports.checkToken = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
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
  } 
  
  return res.json({
    success: false,
    message: 'Auth token is not supplied'
  });
  
};