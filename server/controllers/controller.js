const Model = require('../db-models/database');
const axios = require('axios');

exports.createGallery = async ({ headerImage, mainImages, moreLikeThisImages }) => {
  try {
    let count = await Model.countDocuments({});
    count++;

    const gallery = {
      page: count.toString(),
      headerImage: headerImage,
      mainImages: JSON.parse(mainImages),
      moreLikeThisImages: JSON.parse(moreLikeThisImages)
    }
    return await Model.create(gallery);
  } catch (error) {
    return error;
  }
}

exports.updateGallery = (page, { headerImage, mainImages, moreLikeThisImages }) => {
  const filter = {
    page
  }
  const update = {
    page,
    headerImage: headerImage,
    mainImages: JSON.parse(mainImages),
    moreLikeThisImages: JSON.parse(moreLikeThisImages)
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

exports.deleteGallery = async (page) => {
  return await Model.deleteOne({ page });
};

exports.getMeta = (req, res) => {
  axios.get(`http://3.227.255.185/api/product/${req.params.page}`)
    .then(response => {
      // console.log(response.data)
      res.json(response.data)
    })
    .catch(err => res.json({ message: 'error title not found!' }))
}