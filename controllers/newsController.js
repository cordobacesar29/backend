const models = require('../models');

const deleteNew = async (req, res) => {
    const {id} = req.params;
    try{
        const news = await models.Entry.findByPk(id);
        if(!news) {
            return res.status(400).json({ error: 'News to delete does not exist' });
        }
        const deleteNew = await models.Entry.destroy({
            where: { id: id }
        })
        return res.status(201).json(deleteNew);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

module.exports = {
    deleteNew
};