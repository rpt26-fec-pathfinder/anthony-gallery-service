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

// server connection
const PORT = process.env.PORT || 4012;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 👍!`));

