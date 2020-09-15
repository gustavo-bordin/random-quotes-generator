const Quotes = require('../models/Quotes');
class QuotesController {
  async list(req, res, next) {
    let specifications = {};
    Object.entries(req.query).forEach(([key, value]) => {
      if (key === 'keyword') {
        key = 'content';
      }
      specifications = {
        ...specifications,
        [key]: { $regex: value, $options: 'i' },
      };
    });

    try {
      const quotes = await Quotes.find(specifications);
      return res.json(quotes);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new QuotesController();
