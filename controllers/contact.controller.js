const models = require('../models');

exports.createContact = async (req, res) => {
	try {
		const newContact = await models.Contacts.create(req.body);
		return res.status(201).json({
			status: 'success',
			message: `New contact created with id: ${newContact.id}`,
		});
	} catch (error) {
		return res.status(400).json({ error });
	}
};
