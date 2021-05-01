const express = require('express');
const router = express.Router();
const { createGallery, updateGallery, getGallery, getMeta } = require('../controllers/controller');
const path = require('path');

// create gallery
router.put('/createGallery', (req, res) => {
  createGallery(req.body)
    .then(success => res.status(201).end())
    .catch(err => res.send(err));
});

// update galleryImage
router.put('/updateGallery/:page', (req, res) => {
  updateGallery(req.params.page, req.body)
    .then(success => res.status(201).end())
    .catch((err) => {
      console.log('could not update the record')
      res.send(err)
    });
});

// get main galleryimages
router.get('/images/:page', getGallery);

// get metaData from James
router.get('/api/product/:page', getMeta);

router.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;