const express = require('express');
const router = express.Router();
const { createGallery, updateGallery, getGallery, deleteGallery, getMeta } = require('../controllers/controller');
const path = require('path');

// create gallery
router.post('/images', (req, res) => {
  createGallery(req.body)
    .then(success => res.status(202).end('The record has been created'))
    .catch(err => res.status(400).send(err));
});

// get main galleryimages
router.get('/images/:page', getGallery);

// update gallery
router.put('/images/:page', (req, res) => {
  updateGallery(req.params.page, req.body)
    .then(success => res.status(202).end('The record has been updated'))
    .catch(err => res.status(400).send(err));
});

// delete gallery
router.delete('/images/:page', (req, res) => {
  deleteGallery(req.params.page)
    .then(success => res.status(202).end('The request to delete your record has been accepted'))
    .catch(err => res.status(400).send(err));
});

// get metaData from James
router.get('/api/product/:page', getMeta);

router.get('/:id', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;