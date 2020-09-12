const express = require('express');

const quotes = require('./routes/quotes');

class App {
  constructor() {
    this.server = express();

    this.configs();
    this.routes();
    this.middlewares();
  }

  configs() {
    this.server.use(express.json());
  }

  middlewares() {
    this.server.use((req, res, next) => {
      const error = new Error('Not found');
      error.status = 404;
      next(error);
    });

    this.server.use((error, req, res, next) => {
      return res.status(error.status || 500).json({
        error: {
          message: error.message,
        },
      });
    });
  }

  routes() {
    this.server.use(quotes);
  }
}

module.exports = new App().server;
