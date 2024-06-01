const mongoose = require('mongoose');

const clockOutSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true
  },
  clockOutTime: {
    type: Date,
    required: true
  },
  formattedDate: {
    type: String,
    required: true
  }
});

const ClockOut = mongoose.model('ClockOut', clockOutSchema);

module.exports = {ClockOut};