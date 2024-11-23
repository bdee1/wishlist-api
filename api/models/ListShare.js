const mongoose = require('mongoose');

const listShareSchema = new mongoose.Schema({
  listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  access: { type: String, enum: ['owner', 'parent', 'read'] }
});

module.exports = mongoose.model('ListShare', listShareSchema);
