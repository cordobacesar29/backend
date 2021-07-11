
const models = require('../models');


exports.getContactsControler = async (req, res) => {
	try {
	const result = await models.Contacts.findAll();
	return res.status(200).json({
	status: 'success',
    message: 'contacts returned successfullyv'
	});} 
    catch (e) {
    return res.status(400).json({
     e,message: 'error returning contacts',
  });}
};

