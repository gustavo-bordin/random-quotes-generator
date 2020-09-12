require('dotenv').config();

const PORT = process.env.PORT;
const app = require('./app');

app.listen(PORT, () => {
  console.log('Up and running on port: ' + PORT);
});
