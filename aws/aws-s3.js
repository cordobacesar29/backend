const dotenv = require('dotenv').config();
const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_BUCKET_ACCESS_KEY;
const secretAccessKey = process.env.AWS_BUCKET_SECRET_KEY;

// create new S3 instance
const s3 = new S3({
	region,
	accessKeyId,
	secretAccessKey,
});

// 1. ulpload a filte to s3
/**
 *
 * @param {*} file file data provided by multer in req.file
 * @returns a promise with object data uploaded to aws
 * @example object data returned
 *
 * {
 * ETag: '"b33fb80bf66ca9dda2314ae8be5e59cb"',
 * Location: 'https://alkemy-ong-project.s3.sa-east-1.amazonaws.com/image-1625063620801-dummy.jpeg',
 * key: '801bbb219be397647a00dcbd84cb8f89',
 * Key: '801bbb219be397647a00dcbd84cb8f89',
 * Bucket: 'alkemy-ong-project'
 * }
 *
 */
exports.uploadFile = (file) => {
	try {
		// 1. Create a file stream
		const fileStream = fs.createReadStream(file.path);

		// 2. upload the file
		const uploadParams = {
			Bucket: bucketName,
			Body: fileStream,
			Key: file.filename,
		};

		// 3. returns a promise
		return s3.upload(uploadParams).promise();

		// 4. log error if upload fails
	} catch (error) {
		console.error(error, error.stack);
	}
};
