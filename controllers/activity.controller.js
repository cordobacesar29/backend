const { request, response } = require('express');

const models = require('../models');

const createActivity = async(req = request, res = response) => {
    const { body } = req;

    try {
        const activitySave = await models.Activities.create(body);

        res.json({
            ok: true,
            activity: activitySave
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error'
        });
    }
}

module.exports = {
    createActivity
}