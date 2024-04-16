const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/signu');

// router.post('/', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Check if the password matches
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }
//     const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1m' });
//     // Password is correct, return user data (you may want to exclude password)
//     res.status(200).json({ user: { _id: user._id, email: user.email }, token });
//     // res.status(200).json({ user });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: '*Please provide both email and password' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: '*User Mail not found' });
    }

    // Check if the password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: '*Invalid password' });
    }
    
    // Password is correct, generate and send token
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1m' });
    // Return user data (you may want to exclude password)
    res.status(200).json({ user: { _id: user._id, email: user.email,category: user.category  }, message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
router.get('/', async (req, res) => {
  const { email } = req.query; // Assuming email is passed as a query parameter

  try {
    if (!email) {
      return res.status(400).json({ message: '*Please provide an email' });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: '*User not found' });
    }

    // Return user data (you may want to exclude sensitive information like password)

    res.status(200).json({ user: { _id: user._id, email: user.email, category: user.category, name:user.name } });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
// router.get('/', async (req, res) => {
//   try {
//     // Fetch all users from the database
//     const users = await User.find();

//     // Return user data (you may want to exclude sensitive information like password)
//     console.log('User:',users);
//     res.status(200).json({ users });
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
module.exports = router;
