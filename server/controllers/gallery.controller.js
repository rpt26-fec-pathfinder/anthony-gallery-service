const Model = require('../db-models/gallery.model');

exports.getGallery = (req, res) => {
  // delete this portion when there are actually 100 records worth of photos. avg 20-30ish per page.
  if (req.params.page > 5 && req.params.page <= 100) {
    let randomPage = Math.floor(Math.random() * (5) + 1);
    console.log(`The random page that was generated was page ${randomPage}!`);

    Model.find({ page: randomPage }, (err, data) => {
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

  } else {
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
  }
};



// exports.getHeader = (req, res) => {
//   console.log('Header');
//   res.end();
// };

// exports.getMoreLikeThis = (req, res) => {
//   console.log('More Like This');
//   res.end();
// };