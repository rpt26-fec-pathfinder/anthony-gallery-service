const fs = require('fs');
const path = require('path');
const { generateCSV, generateJSON } = require('./generateData');
const { createHeaderImageRecord, createMainImageRecords, createCouchRecord } = require('./Page.js');
const filePath = path.join(__dirname, '/data');

try {
  const headerImagesStream = fs.createWriteStream(filePath + '/headerImages.csv');
  generateCSV(headerImagesStream, createHeaderImageRecord, 1e7, () => {
    headerImagesStream.end();
    console.log('Successfully wrote headerImage records to CSV');
  });
} catch (err) {
  if (err) {console.log(err)}
}

try {
  const mainImagesStream = fs.createWriteStream(filePath + '/mainImages.csv');
  generateCSV(mainImagesStream, createMainImageRecords, 1e7, () => {
    mainImagesStream.end();
    console.log('Successfully wrote mainImage records to CSV');
  });
} catch (err) {
  if (err) {console.log(err)}
}

try {
  const couchStream = fs.createWriteStream(filePath + '/couch.csv');
  couchStream.write('_id\theaderImage\tmainImages\n');
  generateCSV(couchStream, createCouchRecord, 1e7, () => {
    couchStream.end();
    console.log('Successfully wrote couch records to CSV');
  })
} catch (err) {
  if (err) {console.log(err)}
}
