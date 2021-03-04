const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const userRouter = require('./routes/gallery.route');
const fs = require('fs');
// const { seedingScript } = require('./data/seedingScript');

// configs
dotenv.config({ path: './server/config/config.env' });

// shows static files react index.html
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/', userRouter);





// // generate data
// let data = seedingScript();
// fs.writeFile('./server/data/data.json', JSON.stringify(data), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('data file created!');
// });


// MongoDB and Server Connections
const PORT = process.env.PORT || 4012;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 👍!`));
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
// .then(app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 👍!`)))
// .catch(() => console.error('Something went wrong!!'));

