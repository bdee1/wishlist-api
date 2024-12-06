const mongoose = require('mongoose');

const listItemSchema = new mongoose.Schema({
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
  sortOrder: Number,
  title: String,
  description: String,
  link: String,
  price: Number,
  size: String,
  color: String,
  notes: String,
  parentNotes: String,
  status: { type: String, enum: ['available', 'ordered', 'shipped', 'received'] }
});

module.exports = mongoose.model('ListItem', listItemSchema);
