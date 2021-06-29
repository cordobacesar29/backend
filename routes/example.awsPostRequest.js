const express = require('express');
const multer = require('multer');

const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// import upload file function from aws directory
const { uploadFile } = require('./../aws/aws-s3');

/* Posting a new image to aws */
router.post('/images', upload.single('image'), async (req, res, next) => {
	// 1. extract image file from multer middleware
	const file = req.file;
	console.log(file);

	try {
		// 2. upload image on aws bucket
		const result = await uploadFile(file);
		console.log(result);

		// 3. delete file from local uploads folder
		await unlinkFile(file.path);

		// 4. here you can save the file path <result.Location> to databse or send the link in response

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
 * "imagePath": "https://alkemy-ong-project.s3.sa-east-1.amazonaws.com/2b6ce0f42b6449447fd59e9b8eb543cf"
 * }
 */

module.exports = router;
