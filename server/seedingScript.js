const fs = require('fs');

// a function written to created all the aws s3 urls that needs to be added to mongoDB.
const generateData = function () {
  let results = [];

  // pages
  for (let page = 1; page < 2; page++) {
    let obj = {
      page: null,
      headerImage: '',
      mainImages: [],
      moreLikeThisImage: []
    };

    obj.page = page;
    // headers
    obj.headerImage = `https://steam-fec.s3.amazonaws.com/steam${page}/header-1.jpg`;

    // main images
    for (let main = 1; main < 2; main++) {
      obj.mainImages.push(
        `https://steam-fec.s3.amazonaws.com/steam${page}/main-${main}.jpg`
      );
    }

    // more like this images
    for (let set = 1; set < 11; set++) {
      let arr = [];

      let len = 5;
      if (page === 1) {
        if (set === 1 || set === 6) {
          len = 11;
        } else if (set === 2) {
          len = 9;
        } else if (set === 3) {
          len = 5;
        } else if (set === 4) {
          len = 6;
        } else if (set === 5) {
          len = 34;
        } else if (set === 7) {
          len = 7;
        } else if (set === 8 || set === 10) {
          len = 12;
        } else if (set === 9) {
          len = 9;
        } else if (set === 11) {
          len = 19;
        }
      }

      for (let pic = 1; pic <= len; pic++) {
        arr.push(
          `https://steam-fec.s3.amazonaws.com/steam${page}/morelikethis-${set}-${pic}.jpg`
        );
      }
      obj.moreLikeThisImage.push(arr);
    }

    results.push(obj);
  }

  return results;
};

// // generate data
// run node server/seedingScript in terminal to generate json data!!!!
let data = generateData();
fs.writeFile(__dirname + '/data/data.json', JSON.stringify(data), (err) => {
  if (err) {
    throw err;
  }
  console.log('data file created!');
});

