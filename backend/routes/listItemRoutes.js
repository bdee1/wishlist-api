const express = require('express');
const ListItem = require('../models/ListItem');
const router = express.Router();

// Create a new list item
router.post('/:listId/items', async (req, res) => {
  const { sortOrder, title, description, link, price, size, color, notes, parentNotes, status } = req.body;
  const newItem = new ListItem({
    listId: req.params.listId,
    sortOrder,
    title,
    description,
    link,
    price,
    size,
    color,
    notes,
    parentNotes,
    status
  });
  await newItem.save();
  res.status(201).send(newItem);
});

// Get all items for a list
router.get('/:listId/items', async (req, res) => {
  const items = await ListItem.find({ listId: req.params.listId }).sort('sortOrder');
  res.status(200).send(items);
});

// Update a list item
router.put('/:listId/items/:itemId', async (req, res) => {
  const { title, description, link, price, size, color, notes, parentNotes, status } = req.body;
  const updatedItem = await ListItem.findByIdAndUpdate(
    req.params.itemId,
    { title, description, link, price, size, color, notes, parentNotes, status },
    { new: true }
  );
  if (!updatedItem) return res.status(404).send('Item not found');
  res.status(200).send(updatedItem);
});

// Delete a list item
router.delete('/:listId/items/:itemId', async (req, res) => {
  const deletedItem = await ListItem.findByIdAndDelete(req.params.itemId);
  if (!deletedItem) return res.status(404).send('Item not found');
  res.status(200).send({ message: 'Item deleted successfully' });
});

module.exports = router;
