require('dotenv').config()
const axios = require('axios').default;
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
  let { doc_count, doc_del_count} = dbInfo.data;
  const id = doc_count + doc_del_count + 1;

  const { headerImage, mainImages } = req.body;
  const result = await axios.put(couchURL + `/${id}`, {
    headerImage,
    mainImages
  });

  res.status(201).json(result.data);
});

// get image
module.exports.getGallery = runAsyncWrapper(async(req, res) => {
  const _id = req.params.page;
  const result = await axios.get(couchURL + `/${_id}`);
  res.status(200).json([result.data]);
});

// update image
module.exports.updateGallery = runAsyncWrapper(async(req, res) => {
  const _id = req.params.page;
  const docInfo = await axios.get(couchURL + `/${_id}`);
  const _rev = docInfo.data._rev;

  const { headerImage, mainImages } = req.body;
  const result = await axios.put(couchURL + `/${_id}`, {
    _rev,
    headerImage,
    mainImages
  });

  res.json(result.data);
});

// delete image
module.exports.deleteGallery = runAsyncWrapper(async(req, res) => {
  const _id = req.params.page;
  const docInfo = await axios.get(couchURL + `/${_id}`);
  const _rev = docInfo.data._rev;

  const result = await axios.delete(couchURL + `/${_id}`, {
    params: {
      rev: _rev
    }
  });

  res.json(result.data);
});

module.exports.getMeta = (req, res) => {
  axios.get(`http://3.227.255.185/api/product/${req.params.page}`)
    .then(response => {
      // console.log(response.data)
      res.json(response.data)
    })
    .catch(err => res.json({ message: 'error title not found!' }))
}
