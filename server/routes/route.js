const express = require('express');
const router = express.Router();
const { getGallery, getHeader, getMoreLikeThis } = require('../controllers/controller');

// get main galleryimages
router.get('/images/:page', getGallery);


module.exports = router;