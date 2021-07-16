const models = require('../models');

const sendMail = require('../utils/sendMail');


exports.getContactsControler = async (req, res) => {
	try {
        const contacts = await models.Contacts.findAll();
        return res.status(200).json({
            status: 'success',
            message: 'contacts returned successfully',
            contacts
        });
    } 
    catch (e) {
        return res.status(400).json({
            e,message: 'error returning contacts',
        });
    }
};

exports.createContact = async (req, res) => {
    try {
        const newContact = await models.Contacts.create(req.body);
        const msg = {
            to: newContact.email, // 'to: nombre del email' Email destino
            subject: "Sent from website contact Form", // 'subject: titulo del texto' Titulo del mensaje
            text: "Hello", // 'text: contenido del mensaje' Descripción del mensaje
            html: `<strong>Hola ${newContact.name}, gracias por contactarte con nosotros!</strong>`,
        }
        sendMail(msg);
        return res.status(201).json({
            status: 'success',
            message: `New contact created with id: ${newContact.id}`,
        });
    } catch (error) {
        return res.status(400).json({ error });
    }
};
