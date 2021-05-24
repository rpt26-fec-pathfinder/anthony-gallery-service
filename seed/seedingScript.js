const fs = require('fs');
const path = require('path');
const { generateCSV, generateJSON } = require('./generateData');
const { createHeaderImageRecord, createMainImageRecords, createCouchJSONRecord } = require('./Page.js');
const filePath = path.join(__dirname, '/data');

try {
  const headerImagesStream = fs.createWriteStream(filePath + '/headerImages.csv');
  generateCSV(headerImagesStream, createHeaderImageRecord, 1e7, () => {
    headerImagesStream.end();
    console.log('Successfully wrote headerImage records to CSV');
  });
} catch (err) {
  console.log(err);
}

try {
  const mainImagesStream = fs.createWriteStream(filePath + '/mainImages.csv');
  generateCSV(mainImagesStream, createMainImageRecords, 1e7, () => {
    mainImagesStream.end();
    console.log('Successfully wrote mainImage records to CSV');
  });
} catch (err) {
  console.log(err);
}

try {
  const couchStream = fs.createWriteStream(filePath + '/couch.jsonl');
  generateCSV(couchStream, createCouchJSONRecord, 1e7, () => {
    couchStream.end();
    console.log('Successfully wrote couch records to JSON');
  })
} catch (err) {
  console.log(err);
}
