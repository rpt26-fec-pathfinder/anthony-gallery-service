const express = require('express');
const router = express.Router();
const { getGallery, getHeader, getMoreLikeThis } = require('../controllers/gallery.controller');

// get main galleryimages
router.get('/steam/gallery/:page', getGallery);



// // get headers for Ryan
// router.get('/steam/header/:id', getHeader);

// // get more this for Calvin
// router.get('/steam/morelikethis/:id', getMoreLikeThis);

module.exports = router;