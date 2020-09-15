const mongoose = require('../database/connection');

const QuotesSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: false,
    },
  },
  { collection: 'quotes' }
);

mongoose.model('quotes', QuotesSchema);
const QuotesModel = mongoose.model('quotes');

module.exports = QuotesModel;
