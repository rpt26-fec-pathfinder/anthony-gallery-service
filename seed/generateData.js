const fs = require('fs');
const path = require('path');

const timer = (record, start) => {
  if (record % 100000 === 0) {
    const now = Date.now();
    const minutesElapsed = (((now - start) / 1000) / 60);
    console.log(`created record #${record} - minutes elapsed: ${minutesElapsed}`);
  }
}

const start = Date.now();

module.exports.generateCSV = (writer, data, records, cb) => {
  let i = 0;
  write();
  function write() {
    let ok = true;
    do {
      i++;
      if (i === records) {
        writer.write(data(i), cb);
      } else {
        ok = writer.write(data(i));
        timer(i, start);
      }
    } while (i < records && ok);
    if (i < records) {
      writer.once('drain', write);
    }
  }
};
