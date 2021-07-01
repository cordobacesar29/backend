require('dotenv').config();

const { request, response } = require('express');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async(req = request, res = response) => {
    const { to, from, subject, text } = req.body;

    const msg = {
        to, // 'to: nombre del email' Email destino
        from, // 'from: nombre del email' Email con el cual se registraron en sendgrid
        subject, // 'subject: titulo del texto' Titulo del mensaje
        text // 'text: contenido del mensaje' Descripción del mensaje
    };

    try {
        await sgMail.send(msg);

        return res.status(201).send({ success: true });
    } catch (error) {
        console.log(error);
        return res.status(error.code).send(error.message);
    }
}

module.exports = sendMail;