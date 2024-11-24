const express = require('express');
const { getLists, createList, deleteList } = require('../controllers/listController');
const router = express.Router();

router.get('/:userId', getLists); // Include userId in the route path
router.post('/', createList);
router.delete('/:id', deleteList);

module.exports = router;
