let mongoose = require('mongoose');

let itemModel = mongoose.Schema({
  itemName: { type: String, required: true },
  description: String,
  status: { type: String, required: true, enum: ['Lost', 'Found'] },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  contact: { type: String, required: true }
},
{
  collection: "items"
});

module.exports = mongoose.model('Item', itemModel);