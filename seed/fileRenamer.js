// I just used this to rename the random photos to a specific naming convention for aws s3.
// Not sure if its the "right" way to do things...but I needed a way to organize the image files somehow.

const fs = require('fs');
const path = require('path');

const imageDirPath = path.join(__dirname, 'images');
const files = fs.readdirSync(imageDirPath);

// name files as headers
const renameImgToHeader = (start, end) => {
  for (let i = start; i < end; i++) {
    fs.rename(imageDirPath + `/${files[i]}`,
      imageDirPath + `/header-${i}.jpg`,
      err => console.log(err));
  }
};

// name files as main or thumb
const renameImgMainOrThumb = (type, page, start, end) => {
  for (let i = start; i < end; i++) {
    fs.rename(imageDirPath + `/${files[i]}`,
      imageDirPath + `/${type}-${page}-${i}.jpg`,
      err => console.log(err));
  }
};

// name files as morelikethis
const renameImgMoreLikeThis = (page, sets) => {
  let count = 0;

  for (let i = 0; i < sets; i++) {
    for (let j = 1; j <= 3; j++) {
      fs.rename(imageDirPath + `/${files[count]}`,
        imageDirPath + `/morelikethis-${page}-${i}-${j}.jpg`,
        err => console.log(err));
      count += 1;
    }
  }
};
