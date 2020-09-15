const mongoose = require('mongoose');

require('dotenv').config();

const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

mongoose
  .connect('mongodb://localhost/quotes', {
    auth: {
      authdb: 'admin',
      user: 'gbordin',
      password: '123',
    },
  })
  .then(() => {
    console.log('Connected successfully');
  })
  .catch((error) => {
    console.log('An error ocurred while connecting to Mongo: ' + error);
  });

console.log(mongoose);
module.exports = mongoose;
