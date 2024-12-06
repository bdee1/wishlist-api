const express = require('express');
const { login, register, refresh } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/refresh', refresh); // Add this line for token refresh

module.exports = router;