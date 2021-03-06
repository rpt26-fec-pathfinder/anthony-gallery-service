// tested doesn't work, don't use!!!

// const AWS = require('aws-sdk');
// const uuid = require('uuid');
// const fs = require('fs');
// const path = require('path');
// const dotenv = require('dotenv');
// dotenv.config({ path: 'config/config.env' });

// // initializes aws s3
// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'us-east-1',
// });

// //  lists all your s3 buckets just to test you're connected to aws
// s3.listBuckets((err, data) => {
//   err ? console.error(err) : console.log(data);
// });

// // creates a unique bucketname
// const bucketName = 'steam-' + uuid.v4();
// const params = {
//   Bucket: bucketName,
// };

// // creates a bucket
// s3.createBucket(params, function (err, data) {
//   err ? console.log(err, err.stack) : console.log('Bucket created successfully:', data.Location);
// });



// // path to images folder
// const imageDirPath = path.join(__dirname, '../images');
// const files = fs.readdirSync(imageDirPath);
// console.log(files);


// // uploads the files to aws s3 bucket
// const uploadFile = (fileName) => {
//   // const fileContent = fs.readFileSync(fileName);

//   // params set up
//   const params = {
//     Bucket: bucketName,
//     Key: fileName, // file name you want to save as in S3
//     Body: stream
//   };

//   // uploads the file
//   s3.upload(params, function (err, data) {
//     if (err) {
//       throw err;
//     }
//     console.log('File uploaded successfully:', data.Location);
//   });
// };


// uploadFile(imageDirPath + '/header-1.jpg');






