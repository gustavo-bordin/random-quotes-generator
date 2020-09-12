const connection = require('../database/connection');
const Sequelize = require('sequelize');

const Quotes = connection.define(
  'Quotes',
  {
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
    },
    language: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Quotes;
