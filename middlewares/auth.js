const jwt = require('jsonwebtoken');
const config = require('config');

const checkToken = (req, res, next) =>{
    try {
        const token= req.get('authorization');
        jwt.verify(token, config.get('configToken.SEED'),(err, decoded)=>{
            if(err){
                return res.status(401).json({
                    err
                })
            }
            res.user = decoded.user;
            return next();
        })
    } catch (error) {
        return res.status(401).json({
            err
        })
        
    }
};

module.exports = checkToken;