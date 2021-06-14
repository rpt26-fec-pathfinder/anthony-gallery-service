require('dotenv').config();
require('newrelic');
const app = require('./app')
const fs = require('fs');

// server connection
const PORT = process.env.PORT || 4012;
app.listen(PORT, () => {
  console.log(`Photo Gallery Service is listening on PORT ${PORT} 👍!\n`)
});
