const Model = require('../db-models/database');

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



// exports.getHeader = (req, res) => {
//   console.log('Header');
//   res.end();
// };

// exports.getMoreLikeThis = (req, res) => {
//   console.log('More Like This');
//   res.end();
// };