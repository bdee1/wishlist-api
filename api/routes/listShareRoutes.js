const express = require('express');
const ListShare = require('../models/ListShare');
const router = express.Router();

// Share a list with a user
router.post('/:listId/share', async (req, res) => {
  const { userId, access } = req.body;
  const sharedList = new ListShare({ listId: req.params.listId, userId, access });
  await sharedList.save();
  res.status(201).send(sharedList);
});

// Get all users shared with a list
router.get('/:listId/share', async (req, res) => {
  const shares = await ListShare.find({ listId: req.params.listId }).populate('userId');
  res.status(200).send(shares);
});

module.exports = router;
