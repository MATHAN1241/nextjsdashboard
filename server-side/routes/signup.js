const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/signu');

// router.post('/', async (req, res) => {
//   const { name, email, password, confirmPassword } = req.body;

//   try {
//     // Check if the passwords match
//     if (name.length<5 | email.length<5 | password.length<8 | password !== confirmPassword) {
//       // alert("password does not match");
//       return res.status(400).json({ message: 'Passwords do not match' });
//     }
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     // Create a new user
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();
//     const token = jwt.sign({ userId: newUser._id }, 'your_secret_key', { expiresIn: '1h' });
//     // alert("user created successfully");
//     res.status(201).json({ message: 'User created successfully' ,token });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });
router.post('/', [
  check('name').isLength({ min: 5 }).withMessage('Name must be at least 5 characters'),
  check('email').isEmail().withMessage('Invalid email').normalizeEmail(),
  check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  check('password').custom((value, { req }) => {
    if (value !== req.body.confirmPassword) {
      throw new Error('Passwords do not match');
    }
    return true;
  }),
  check('password').custom((value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).{8,}$/;
    if (!passwordRegex.test(value)) {
      throw new Error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    }
    return true;
  })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { name, email, password,category } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ message: '*Please provide both email and password' });
  }
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword,category });
    await newUser.save();

//const token = jwt.sign({ userId: newUser._id }, secrtkey , { expiresIn: '1h' });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
const secrtkey='you_secret_key';
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;
