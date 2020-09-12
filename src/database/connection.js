const Sequelize = require('sequelize');

require('dotenv').config();

const user = process.env.DB_USER;
const name = process.env.DB_NAME;
const dialect = process.env.DB_DIALECT;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;

const connection = new Sequelize(name, user, password, {
  dialect: dialect,
  host: host,
  port: port,
  define: {
    freezeTableName: true,
  },
});

connection
  .authenticate()
  .then(() => {
    console.log('Successfully connected');
  })
  .catch((error) => {
    console.log(`Authentication error: ${error}`);
  });

module.exports = connection;
