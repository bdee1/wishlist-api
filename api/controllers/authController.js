//const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log('User found:', user); // Debug log
    if (!user) return res.status(400).json({ message: 'Invalid email or password.' });

    console.log('user.password:', '|' + user.password + '|')

    const validPassword = await bcrypt.compare(password, user.password);
    console.log('Password provided:', password); // Debug log
    console.log('Hashed password in DB:', user.password); // Debug log
    console.log('Password valid:', validPassword); // Debug log

    if (!validPassword) return res.status(400).json({ message: 'Invalid email or password.' });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already in use.' });

    //note that the password gets saved using the pre save middleware in /models/User.js
    const newUser = new User({
      email,
      password,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  login,
  register,
};