const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    ownerId: { type: String, required: true }, // Ensure ownerId is defined and required
    title: { type: String, required: true },
    description: { type: String },
    holiday: { type: String }
  });

module.exports = mongoose.model('List', listSchema);