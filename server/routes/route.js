const express = require('express');
const router = express.Router();
const { getGallery } = require('../controllers/controller');
const path = require('path');



// get main galleryimages
router.get('/images/:page', getGallery);

router.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;