const express = require('express');
const router = express.Router();
const { getGallery } = require('../controllers/gallery.controller');

// get images
router.get('/steam/0', getGallery);

module.exports = router;