const mongoose = require('mongoose');
const { Schema } = mongoose;
const dotenv = require('dotenv');

// config secret files
dotenv.config({ path: './server/config/config.env' });

// mongoose connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log('Mongo Connected!'))
  .catch(() => console.error('Something went wrong!!'));

const repoSchema = new Schema({
  page: Number,
  headerImage: String,
  mainImages: [String],
  moreLikeThisImages: [Array],
});

module.exports = mongoose.model('images', repoSchema);