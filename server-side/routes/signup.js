const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    // Check if the passwords match
    if (name.length<5 | email.length<5 | password.length<8 | password !== confirmPassword) {
      // alert("password does not match");
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, 'your_secret_key', { expiresIn: '1h' });
    // alert("user created successfully");
    res.status(201).json({ message: 'User created successfully' ,token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
