const fs = require('fs');
const util = require('util');
const express = require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const unlinkFile = util.promisify(fs.unlink);

const router = express.Router();

// where to store
const storage = multer.diskStorage({
	destination: 'uploads/',
	filename: function (req, file, cb) {
		cb(null, `${file.fieldname}-${uuidv4()}-${file.originalname}`);
	},
});

// upload middleware
const upload = multer({ storage }).single('image');

// import upload file function from aws directory
const { uploadFile } = require('./../aws/aws-s3');

/*** Posting a new image to aws ***/
router.post('/images', upload, async (req, res, next) => {
	// 1. extract image file from multer middleware
	const file = req.file;
	console.log(file);

	try {
		// 2. upload image on aws bucket
		const result = await uploadFile(file);
		console.log(result);

		// 3. delete file from local uploads folder
		await unlinkFile(file.path);

		// 4. here you can save the file path <result.Location>
		// to databse or send the link in response

		// 5. send image file path in response
		res.status(201).json({
			status: 'File uploaded to aws',
			imagePath: `${result.Location}`,
		});

		// 6. log and error
	} catch (error) {
		console.error(error, error.stack);
		res.status(409).json(error);
	}
});

// sample response
/**
 * {
 * "status": "File uploaded to aws",
 * "imagePath": "https://alkemy-ong-project.s3.sa-east-1.amazonaws.com/image-1625063620801-dummy.jpeg"
 * }
 */

module.exports = router;
