const Quotes = require('./Quotes');
const connection = require('../database/connection');

connection.sync({ force: true });

module.exports = Quotes;
