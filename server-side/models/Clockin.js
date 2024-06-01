const mongoose = require('mongoose');

const clockInSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true
  },
  clockInTime: {
    type: Date,
    required: true
  },
  formattedDate: {
    type: String,
    required: true
  }
});
  
const ClockIn = mongoose.model('ClockIn', clockInSchema);
module.exports = {ClockIn};