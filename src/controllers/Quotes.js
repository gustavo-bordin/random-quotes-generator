const Quotes = require('../models');

class QuotesController {
  async list(req, res, next) {
    let specifications = {};

    Object.entries(req.query).forEach(([key, value]) => {
      specifications = { where: { ...specifications.where, [key]: value } };
    });

    try {
      const quotes = await Quotes.findAll(specifications);
      return res.json(quotes);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new QuotesController();
