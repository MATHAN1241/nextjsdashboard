const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
  });
  
  // Create User Model
  const User = mongoose.model('users', userSchema);
  
  module.exports = User;