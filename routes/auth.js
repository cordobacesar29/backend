const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

router.post('/login',
    body('username').isEmail(), // username must be an email
    body('password').isLength({ min: 5 }), // password must be at least 5 chars long
    (req, res) => { 
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    Auth.findAll({atributes:['username']}, ()=>{ // check user with atribute 'username
        if(error) {
            return res.status(400).json({ errors: 'server error' }); // if error because server
        }
        if(user){
            return res.status(400).json({mensaje:'can´t use this user'}); // if user exist return msj
        }
    });

    async function checkUser(username, password) {
        //... fetch user from a db etc.
        const match = await bcrypt.compare(password, username.passwordHash); // compare password with password encrypt
        if(match) {
            return res.status(200).json(username); // if is true
        }
        return res.status(400).json({ok: false}); // if is false
    } 
});