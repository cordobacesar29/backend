const multer = require('multer');

// where to store
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

// multer upload middleware
const upload = multer({ storage }).single('image');

module.exports = upload;