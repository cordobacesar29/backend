const express = require('express');
const bcrypt = require('bcrypt'); // // import bcrypt to decrypt password
const User = require('../models/user');
const router = express.Router();

router.post('/login', (req, res)=>{
    // find user by email atribute
    User.findAll({atributes:[req.body.email]})
        .then(data => {
            if(data){
                // if exist user, we need decrypt password and compare
                const passwordValidate = bcrypt.compareSync(req.body.password, data.password);
                if(!passwordValidate) return res.status(400).json({ok: false, msj:'User or password incorrect'});
                res.json(passwordValidate);
            }else{
                res.status(400).json({
                    ok: false,
                    msj:'User or password incorrect'
                })
            }
        })
        .catch(error=>{
            res.status(400).json({
               
                ok:false,
                msj: 'Error in server' + error
            })
        })
})
module.exports = router;