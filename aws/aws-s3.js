const dotenv = require('dotenv').config();
const fs = require('fs');
const S3 = require('aws-sdk/clients/s3');
const util = require('util');

const unlinkFile = util.promisify(fs.unlink);

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
 * @param {string} folderName string path of the folder where image will be uploaded
 * @returns a promise with object data uploaded to aws
 * @example object data returned
 *
 * {
 * ETag: '"b33fb80bf66ca9dda2314ae8be5e59cb"',
 * Location: 'https://alkemy-ong-project.s3.sa-east-1.amazonaws.com/users/pollux.png',
 * key: 'users/pollux.png',
 * Key: 'users/pollux.png',
 * Bucket: 'alkemy-ong-project'
 * }
 *
 */
exports.uploadFile = async (file, folderName) => {
  try {
    // 1. Create a file stream
    const fileStream = fs.createReadStream(file.path);

    // 2. upload the file
    const uploadParams = {
      Bucket: `${bucketName}/${folderName}`,
      Body: fileStream,
      Key: file.filename,
    };

    // 3. returns a promise
    const uploadedImage = await s3.upload(uploadParams).promise();
    await unlinkFile(file.path);
    return uploadedImage;

    // 4. log error if upload fails
  } catch (error) {
    console.error(error, error.stack);
  }
};
