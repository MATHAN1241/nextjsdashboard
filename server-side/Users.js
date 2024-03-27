// const mongoose = require('mongoose');

// // Define User Schema
// const userSchema = new mongoose.Schema({
//     email: String,
//     password: String,
//   });
  
//   // Create User Model
//   const User = mongoose.model('users', userSchema);
  
//   module.exports = User;
  // models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
// });

// module.exports = mongoose.model('users', userSchema);

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create the User model
const User = mongoose.model('users', userSchema);

module.exports = User;
