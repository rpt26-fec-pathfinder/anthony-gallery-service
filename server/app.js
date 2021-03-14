const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/route');
const cors = require('cors')

// CORS
app.use(cors());

// shows static files react index.html
app.use(express.static(path.join(__dirname, '../public')));

// middleware for data sent to database
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/', userRouter);

// exported out for mocha/chai test to access
module.exports = app;