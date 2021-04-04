const mongoose = require('mongoose');
const { Schema } = mongoose;
const dotenv = require('dotenv');

dotenv.config({ path: 'config/config.env' });

// mongoose connection
let MONGO_URI;
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  MONGO_URI = 'mongodb://localhost/steam';
} else {
  MONGO_URI = 'mongodb://server:27017/steam';
}

// console.log('NODE_ENV is', process.env.NODE_ENV, 'MONGO_URI', MONGO_URI)
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log(`Mongo Connected to "${MONGO_URI}" 😀!`))
  .catch(() => console.error('ERROR, Mongo NOT Connected 👎!'));


// schema/model for mongo.
const imagesSchema = new Schema({
  page: String,
  headerImage: String,
  mainImages: [{ main: String, thumb: String }],
  moreLikeThisImages: [Array],
});

module.exports = mongoose.model('images', imagesSchema);