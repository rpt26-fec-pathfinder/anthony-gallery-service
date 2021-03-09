const Image = require('../server/db-models/database');
const fs = require('fs');
const { randomPageSelector } = require('./randomPageSelector');

// creates all the aws s3 urls that needs to be added to mongoDB.
const generateData = function () {
  let results = [];

  // pages
  for (let page = 1; page <= 100; page++) {
    let randomPage = 0;

    // comment this out if you ever put in real legit photos for pages 5 through 100
    if (page > 5 && page <= 100) {
      randomPage = randomPageSelector();
    }

    let obj = {
      page: null,
      headerImage: '',
      mainImages: [],
      moreLikeThisImages: []
    };

    obj.page = page;

    // headers
    obj.headerImage = `https://steam-fec.s3.amazonaws.com/steam${randomPage || page}/header-${randomPage || page}.jpg`;

    // main images
    let mainLen = 11;

    if (page !== 1) {
      mainLen = 5;
    }

    for (let main = 1; main <= mainLen; main++) {
      obj.mainImages.push(
        {
          main: `https://steam-fec.s3.amazonaws.com/steam${randomPage || page}/main-${randomPage || page}-${main}.jpg`,
          thumb: `https://steam-fec.s3.amazonaws.com/steam${randomPage || page}/thumb-${randomPage || page}-${main}.jpg`
        }
      );
    }

    // more-like-this images
    let setLen = 11;

    if (page !== 1) {
      setLen = 3;
    }

    for (let set = 0; set < setLen; set++) {
      let arr = [];
      let picLen = 4;

      if (page !== 1) {
        picLen = 3;
      }

      for (let pic = 1; pic <= picLen; pic++) {
        arr.push(
          `https://steam-fec.s3.amazonaws.com/steam${randomPage || page}/morelikethis-${randomPage || page}-${set}-${pic}.jpg`
        );
      }
      obj.moreLikeThisImages.push(arr);
    }

    results.push(obj);
  }

  return results;
};


// creates json file and saves data to mongodb.
let data = generateData();
fs.writeFile(__dirname + '/data.json', JSON.stringify(data), (err) => {
  if (err) {
    throw err;
  }
  console.log('data json file has been created!');

  for (let item of data) {
    Image.findOne({ page: item.page }, (err, page) => {
      if (err) {
        throw err;

      } else {
        if (page) {
          console.log(`${page} is already in the database!`);

        } else {
          Image.insertMany({
            page: item.page,
            headerImage: item.headerImage,
            mainImages: item.mainImages,
            moreLikeThisImages: item.moreLikeThisImages
          })
            .then(() => console.log(`Page ${item.page} saved!`))
            .catch(() => console.error(`Error Page ${item.page}, NOT saved!`));
        }
      }
    });
  }
});

// exported out for mocha/chai test to access
module.exports = generateData;

