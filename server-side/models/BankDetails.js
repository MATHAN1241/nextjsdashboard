const mongoose = require('mongoose');

const bankDetailsSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true
  },
  bankName: {
    type: String,
    required: true
  },
  accountHolderName: {
    type: String,
    required: true
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true // Assuming account numbers are unique
  },
  ifscCode: {
    type: String,
    required: true
  },
  branchName: {
    type: String,
    required: true
  },
  branchAddress: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

const BankDetails = mongoose.model('BankDetails', bankDetailsSchema);

module.exports = {BankDetails};