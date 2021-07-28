const jwt = require('jsonwebtoken');
const config = require('config');

const getTokenDecode = req => {
  return new Promise((resolve, reject) => {
    let token = req.get('Authorization');
    if (token) {
      if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
      }
      jwt.verify(token, config.get('configToken.SEED'), (err, decoded) => {
        if (err) reject('Without Authorization.');

        resolve(decoded);
      });
    }
    reject('Without Authorization.');
  });
};

const checkToken = async (req, res, next) => {
  try {
    const decodeJwt = await getTokenDecode(req);
    req.user = decodeJwt.data;
    return next();
  } catch (error) {
    return res.status(401).json({
      error,
    });
  }
};

const isRoleAdmin = role => {
  const ROLE_ADMIN = 1;
  return role === ROLE_ADMIN;
};

const isAdmin = async (req, res, next) => {
  try {
    const { user } = req;
    if (user && isRoleAdmin(user.role)) {
      return next();
    }
    const decodeJwt = await getTokenDecode(req);
    if (isRoleAdmin(decodeJwt.data.role)) return next();
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = {
  checkToken,
  isAdmin,
};
