let mongoose = require('mongoose');

let itemModel = mongoose.Schema({
  itemName: String,
  description: String,
  status: String,     // "Lost" or "Found"
  location: String,
  date: Date,
  contact: String
},
{
  collection: "items"
});

module.exports = mongoose.model('Item', itemModel);