const mongoose = require('mongoose');
const { Schema } = mongoose;
const dotenv = require('dotenv');

// config secret files
dotenv.config({ path: './server/config/config.env' });

const repoSchema = new Schema({
  page: Number,
  headerImage: String,
  mainGallery: [String],
  // thumbGallery: [String],
  moreLikeThisImages: [String],
});

module.exports = mongoose.model('images', repoSchema);