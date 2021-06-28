const jwt = require('jsonwebtoken');
const config = require('config');

let checkToken = (req, res, next) =>{
    let token= req.get('Authorization');
    jwt.verify(token, config.get('configToken.SEED'),(err, decoded)=>{
        if(err){
            return res.status(401).json({
                err
            })
        }
        res.user = decoded.user;
        next();
    })
};

module.exports = checkToken;