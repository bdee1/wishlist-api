const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  description: String,
  holiday: String
});

module.exports = mongoose.model('List', listSchema);
