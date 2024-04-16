const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // name: String,
  // email: String,
  // password: String
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['admin', 'employee'],
    default: 'employee',
  },
});


module.exports = mongoose.model('signup', userSchema);
