const mongoose = require('mongoose');
const { Schema } = mongoose;
const dotenv = require('dotenv');

// config secret files
dotenv.config({ path: './server/config/config.env' });

const repoSchema = new Schema({
  header: [String],
  mainGallery: [String],
  thumbGallery: [String],
  moreLikeThis: [String],
  moreFrom: [String],
});

module.exports = mongoose.model('images', repoSchema);