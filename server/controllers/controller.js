const Model = require('../db-models/database');
const axios = require('axios');

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

// exports.getMeta = (req, res) => {
//   axios.get(`http://3.227.255.185/api/product/${req.params.page}`)
//     .then(response => {
//       // console.log(response.data)
//       res.json(response.data)
//     })
//     .catch(err => res.json({ message: 'error title not found!' }))
// }