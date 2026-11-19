let express = require('express');
let router = express.Router();
let Item = require('../models/item');

/* GET - show the report form */
router.get('/', function(req, res, next) {
  res.render('report', { title: 'Report an Item' });
});

/* POST - save the new item to the database */
router.post('/', async (req, res, next) => {
  try {
    let newItem = new Item({
      itemName: req.body.itemName,
      description: req.body.description,
      status: req.body.status,
      location: req.body.location,
      date: req.body.date,
      contact: req.body.contact
    });
    await Item.create(newItem);
    res.redirect('/');
  }
  catch (err) {
    console.log(err);
    res.render('report', { title: 'Report an Item', error: 'Error on Server' });
  }
});

module.exports = router;