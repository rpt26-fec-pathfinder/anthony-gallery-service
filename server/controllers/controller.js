const Model = require('../db-models/database');

exports.getGallery = (req, res) => {
  Model.find({ page: req.params.page }, (err, data) => {
    if (err) {
      throw err;

    } else {
      if (data.length === 0) {
        res.json({ message: `Page ${req.params.page} does NOT exist!` });

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