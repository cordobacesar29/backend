require('dotenv').config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (req, res) => {
    const { to, from, subject, text, html } = req;

    const msg = {
        to: req.to, // 'to: nombre del email' Email destino
        from: "email@mail.com", // 'from: nombre del email' Email con el cual se registraron en sendgrid
        subject: req.subject, // 'subject: titulo del texto' Titulo del mensaje
        text: req.text, // 'text: contenido del mensaje' Descripción del mensaje
        html: req.html,
    };
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendMail;