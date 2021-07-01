// get a news entry by ID
const models = require('../models');

const getNewsById = async (req, res) => {
	const { id } = req.params.id;

	try {
		const newsEntry = await models.Entry.findOne({
			where: { id: id },
			include: 'category',
		});

		return res.status(200).json({ message: 'success', newsEntry });
	} catch (error) {
		return res.status(401).json({
			status: 'failed',
			message: 'no news found with the given ID.',
		});
	}
};


// getting all news where type = "news"
const getNewsType = async (req, res) => {
  try {
    const { Op } = require("sequelize");
    const data = await models.Entry.findAll({ 
        where: {
            type: {
              [Op.eq]: "news"
            }
        },
        attributes: ['name', 'image', 'createdAt']    
    });  
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// CREATE
const createEntry = async (req, res) => {
    const entryObj = {
      name: req.body.name,
      content: req.body.content,
      image: req.body.image,
      categoryId: req.body.categoryId,
      type: req.body.type,
    };
  
    try {
      const entry = await models.Entry.create(entryObj);
      res.json(entry);
    } catch (error) {
      console.log(error);
    }
  };

module.exports = { getNewsType, createEntry, getNewsById };
