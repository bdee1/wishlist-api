const List = require('../models/List');

const getLists = async (req, res) => {
  try {
    const { userId } = req.params; // Extract 'userId' from route parameters
    if (!userId) {
        return res.status(400).json({ message: 'User ID is required in the route path' }); // Validation check
    }

    const lists = await List.find({ ownerId: userId }); // Use 'userId' to query the database
    res.json(lists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createList = async (req, res) => {
  try {
    const newList = new List({
      ownerId: req.body.ownerId,
      title: req.body.title,
      description: req.body.description,
      holiday: req.body.holiday,
    });

    const savedList = await newList.save();
    res.status(201).json(savedList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteList = async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    res.json({ message: 'List deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getLists, createList, deleteList };
