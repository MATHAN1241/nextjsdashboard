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
  },
 
});
const leaveRequestSchema = new mongoose.Schema({

  
  firstName: {
    type: String,
 
  },
  employeeId: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  contactNo: {
    type: String,
    
  },
  
  fromDate: {
      type: Date,
      
  },
  toDate: {
      type: Date,
      
  },
  employeeRole: {
    type: String,
  
  },

  reason: {
      type: String,
 
  },
 
});

// Create the Employee model
const Employee = mongoose.model('Employee', employeeSchema);
const LeaveForm = mongoose.model('LeaveForm', leaveRequestSchema);
module.exports = {Employee,LeaveForm};
