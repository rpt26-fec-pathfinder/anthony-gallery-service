// use this to place image files in the "image" folder to auto upload to AWS S3 bucket.

const AWS = require('aws-sdk');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });

// initializes aws s3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
});

//  lists all your s3 buckets just to test you're connected to aws
s3.listBuckets((err, data) => {
  err ? console.error(err) : console.log(data);
});

// creates a unique bucketname
const bucketName = 'steam-' + uuid.v4();
const params = {
  Bucket: bucketName,
};

// creates a bucket
s3.createBucket(params, function (err, data) {
  err ? console.log(err, err.stack) : console.log('Bucket created successfully:', data.Location);
});

const sendToAWS = (param) => {
  return new Promise((resolve, reject) => {
    s3.putObject(param, (err, data) => {
      if (err) {
        reject('Error! Image file was NOT saved!')
      } else {
        resolve('Success! Image file was saved!')
      }
    })
  })
}


// uploads the files to aws s3 bucket
const uploadFiles = async () => {
  try {
    const imageDirPath = path.join(__dirname, '../images');
    const files = fs.readdirSync(imageDirPath);

    for (let file of files) {
      let content = fs.readFileSync(imageDirPath + `/${file}`)

      let param = {
        Bucket: bucketName,
        ACL: 'public-read',
        ContentType: 'image/jpeg',
        Body: content,
        Key: file, // file name you want to save as in S3
      };

      let result = await sendToAWS(param);
      console.log(result)
    }

  } catch (err) {
    console.error(err)
  }
};

uploadFiles();