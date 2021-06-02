const express = require('express');
const router = express.Router();
const { getGallery, createGallery, updateGallery, deleteGallery, getMeta } = require('../controllers/couch.js');
const path = require('path');

// create gallery
router.post('/images', createGallery);

// get main galleryimages
router.get('/images/:page', getGallery);

// update gallery
router.put('/images/:page', updateGallery);

// delete gallery
router.delete('/images/:page', deleteGallery);

// get metaData from James
router.get('/api/product/:page', getMeta);

router.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;