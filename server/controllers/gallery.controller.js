const Model = require('../models/gallery.model');

exports.getGallery = (req, res) => {
  let test = new Model;
  console.log(test);
  console.log('yes');
  res.end();
};
