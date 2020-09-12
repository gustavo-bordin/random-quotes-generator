const express = require('express');
const router = express.Router();

const QuotesController = require('../controllers/Quotes');

router.get('/', QuotesController.list);

module.exports = router;
