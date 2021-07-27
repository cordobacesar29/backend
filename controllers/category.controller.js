const models = require('../models');

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await models.Category.create(req.body);

    return res.status(201).json({
      status: 'success',
      message: `New category created with id: ${newCategory.id}`,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await models.Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await models.Category.findOne({ where: { id } });
    if (!category) {
      return res.status(404).json({ error: 'category not found with that ID' });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const categoryToUpdate = await models.Category.findOne({ where: { id } });
    if (!categoryToUpdate) {
      return res.status(404).json({ error: 'category not found with that ID' });
    }
    await categoryToUpdate.update(req.body);
    return res.status(200).json(categoryToUpdate);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const Category = await models.Category.findByPk(id);
    if (!Category) {
      return res
        .status(400)
        .json({ error: 'Category to delete does not exist' });
    }
    const deleteCategory = await models.Category.destroy({
      where: { id: id },
    });
    return res.status(201).json(deleteCategory);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
