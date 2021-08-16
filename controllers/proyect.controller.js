const models = require('../models');

const getProyect = async (req, res) => {
    try {
        const proyects = await models.Proyect.findAll();
        return res.status(200).json(proyects);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const getProyectById = async (req, res) => {
    const { id } = req.params;

    try {
        const proyect = await models.Proyect.findOne({ where: { id } });
        if (!proyect) {
        return res.status(400).json({ error: 'Proyect ID does not exist' });
        }
        return res.status(200).json(proyect);
    } catch (err) {
        return res.status(400).json({ error });
    }
};
  
  const deleteProyect = async (req, res) => {
    const { id } = req.params;
    try {
      const proyect = await models.Proyect.findOne({ where: { id } });
      if (!proyect) {
        return res
          .status(404)
          .json({ error: 'Proyect to delete does not exist' });
      }
      await models.Proyect.destroy({ where: { id } });
      return res.status(200).json('Successfully proyect deleted');
    } catch (error) {
      return res.status(400).json({ error });
    }
  };
  
  const updateProyect = async (req, res) => {
    const { id } = req.params;
    try {
      const proyectToUpdate = await models.Proyect.findOne({ where: { id } });
      if (!proyectToUpdate) {
        return res
          .status(404)
          .json({ error: 'Proyect not found with that ID' });
      }
      await proyectToUpdate.update(...req.body);
      return res.status(200).json(proyectToUpdate);
    } catch (error) {
      return res.status(400).json({ error });
    }
  };
  
  const createProyect = async (req, res) => {
    try {
      const result = await models.Proyect.create(req.body);
      return res.status(201).json({
        status: 'success',
        message: 'successfully created proyect',
      });
    } catch (e) {
      return res.status(400).json({
        e,
        message: 'error loading proyect',
      });
    }
  };
  
  module.exports = {
    getProyect,
    getProyectById,
    createProyect,
    updateProyect,
    deleteProyect,
  };
  