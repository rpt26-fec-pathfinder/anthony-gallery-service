const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/route');

// shows static files react index.html
app.use(express.static(path.join(__dirname, '../public')));
console.log()
// middleware for data sent to database
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/', userRouter);

app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

// exported out for mocha/chai test to access
module.exports = app;