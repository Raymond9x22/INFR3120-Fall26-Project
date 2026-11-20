const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Import the Item model

// Our Home page
router.get('/', function (req, res, next) {
  Item.find()
    .sort({ date: -1 })
    .then(function (items) {
      res.render('index', { title: 'FoundIt', items: items });
    })
    .catch(function (err) {
      next(err);
    });
});

module.exports = router;
