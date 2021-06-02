require('dotenv').config()
const axios = require('axios');
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '5984';
const userName = process.env.COUCH_USER;
const password = process.env.COUCH_PASSWORD;
const couchURL = `http://${userName}:${password}@${HOST}:${PORT}/images`;

const runAsyncWrapper = (callback) => {
  return function (req, res, next) {
    callback(req, res, next)
      .catch(next)
  }
};

// create image
module.exports.createGallery = runAsyncWrapper(async(req, res) => {
  const dbInfo = await axios.get(couchURL);
  let docCount = dbInfo.data.doc_count;
  docCount++;

  const headerImage = req.body.headerImage;
  const mainImages = req.body.mainImages;
  const result = await axios.put(couchURL + `/${docCount}`, {
    headerImage,
    mainImages
  });
  res.status(201).json(result.data);
})

// get image
module.exports.getGallery = runAsyncWrapper(async(req, res) => {
  const _id = req.params.page;
  const result = await axios.get(couchURL + `/${_id}`);
  res.status(200).json(result.data);
})

// update image
module.exports.updateGallery = () => {

};

// delete image
module.exports.deleteGallery = () => {

};
