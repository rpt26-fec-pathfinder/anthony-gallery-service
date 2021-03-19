const app = require('./app')
// const express = require('express');
// const app = express();
// const path = require('path');
// const userRouter = require('./routes/route');
const fs = require('fs');

// configs
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });

// // shows static files react index.html
// app.use(express.static(path.join(__dirname, '../public')));

// // middleware for data sent to database
// // app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // routes
// app.use('/', userRouter);

// server connection
const PORT = process.env.PORT || 4012;
app.listen(PORT, () => console.log(`Listening on PORT ${PORT} 👍!`));