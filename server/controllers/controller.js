const Model = require('../db-models/database');
const axios = require('axios');

exports.createGallery = async ({ headerImage, mainImages, moreLikeThisImages }) => {
  let count = await Model.countDocuments({}, function (err, count) {
    if (err) {
        console.log(err);
    } else {
        return count++;
    }
  });

  count++;

  const gallery = {
    page: count.toString(),
    headerImage: headerImage,
    mainImages: JSON.parse(mainImages),
    moreLikeThisImages: JSON.parse(moreLikeThisImages)
  }
  return Model.create(gallery);
}

exports.updateGallery = (page, { headerImage, mainImages, moreLikeThisImages }) => {
  console.log(typeof page);
  console.log(headerImage);
  const filter = {
    page: '101'
  }
  const update = {
    page: '101',
    headerImage: headerImage,
    mainImages: mainImages,
    moreLikeThisImages: moreLikeThisImages
  };
  return Model.findOneAndUpdate(filter, update);
}

exports.getGallery = (req, res) => {
  Model.find({ page: req.params.page }, (err, data) => {
    if (err) {
      throw err;

    } else {
      if (data.length === 0) {
        res.status(404).send(`*** Page ${req.params.page} not found! ***`);

      } else {
        res.json(data);
      }
    }
  });
};

exports.getMeta = (req, res) => {
  axios.get(`http://3.227.255.185/api/product/${req.params.page}`)
    .then(response => {
      // console.log(response.data)
      res.json(response.data)
    })
    .catch(err => res.json({ message: 'error title not found!' }))
}