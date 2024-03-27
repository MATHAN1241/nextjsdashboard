// models/Employee.js

const mongoose = require('mongoose');

// Define the schema for the Employee model
const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true
  },
  employeeRole: {
    type: String,
    required: true
  },
  employeeSalary: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  imagePath: {
    type: String, // Assuming you store the path to the image file
    required: true
  }
});

// Create the Employee model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
