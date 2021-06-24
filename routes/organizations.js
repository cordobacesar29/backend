const express = require('express');
const router = express.Router();


router.get('/1/public', (req, res) => {
    try {
        return res.status(200).json({
            name: '', 
            image: '', 
            phone: '', 
            address: '', 
            welcomeText: '',
        });
      } catch (error) {
        console.log({ error });
        return res.status(500).json({ mensaje: error.message });
      }
});

module.exports = router;
