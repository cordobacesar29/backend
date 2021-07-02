const models = require('../models');

const admin = async(req, res, next) => {
    try {
        const user = await models.User.findOne({ where: { id } });
        if(user && user.roleId === 1) {
        return next();;
        }
    } catch (error) {
       return res.status(400).json({message: error});
    }
}

module.exports = admin;