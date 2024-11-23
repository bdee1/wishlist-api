const express = require('express');
const List = require('../models/List');
const router = express.Router();

// Create a new list
router.post('/', async (req, res) => {
  const { ownerId, title, description, holiday } = req.body;
  const newList = new List({ ownerId, title, description, holiday });
  await newList.save();
  res.status(201).send(newList);
});

// Get a list by ID
router.get('/:id', async (req, res) => {
  const list = await List.findById(req.params.id).populate('ownerId');
  if (!list) return res.status(404).send('List not found');
  res.status(200).send(list);
});

// Update a list by ID
router.put('/:id', async (req, res) => {
  const { title, description, holiday } = req.body;
  const updatedList = await List.findByIdAndUpdate(req.params.id, { title, description, holiday }, { new: true });
  if (!updatedList) return res.status(404).send('List not found');
  res.status(200).send(updatedList);
});

// Delete a list by ID
router.delete('/:id', async (req, res) => {
  const deletedList = await List.findByIdAndDelete(req.params.id);
  if (!deletedList) return res.status(404).send('List not found');
  res.status(200).send({ message: 'List deleted successfully' });
});

module.exports = router;
