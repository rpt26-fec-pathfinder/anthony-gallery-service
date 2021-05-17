const fs = require('fs');
const path = require('path');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const Page = require('./Page.js');
const filePath = path.join(__dirname, '/data');

const timer = (record, start) => {
  if (record % 100000 === 0) {
    const now = Date.now();
    const minutesElapsed = (((now - start) / 1000) / 60);
    console.log(`created record #${record} - minutes elapsed: ${minutesElapsed}`);
  }
}

const start = Date.now();

writer.pipe(fs.createWriteStream(filePath + '/pages.csv'));

module.exports.generateCSV = async () => {
  for (let i = 1; i < 1e7 ; i++) {
    writer.write((new Page(i)));

    try {
      await new Promise(r => setImmediate(r));
    } catch (err) {
      console.log(err);
    }

    timer(i, start);
}

  writer.end();
  console.log(`10M records created in ${(((Date.now() - start) / 1000) / 60)}`)
  console.log('done');
};

const stream = fs.createWriteStream(filePath + '/pages.json');

module.exports.generateJSON = async () => {
  for (let i = 1; i < 1e7; i++) {
    if (!stream.write(JSON.stringify(new Page(i), null, 2) + '\n')) {
      await new Promise(resolve => stream.once('drain', resolve));
    }

    timer(i, start);
  }

  stream.end();
  console.log(`10M records created in ${(((Date.now() - start) / 1000) / 60)}`)
  console.log('Seeding complete');
};
