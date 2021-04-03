const app = require('./app')
const fs = require('fs');

// configs
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });

// server connection
const PORT = process.env.PORT || 4012;
app.listen(PORT, () => {
  console.log(`Photo Gallery Service is listening on PORT ${PORT} 👍!\n`)
});
