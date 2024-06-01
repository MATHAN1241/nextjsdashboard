const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    employeeId: { type: String, unique: true },
    clockInTime:  Date,
    formattedDate: String,
    clockOutTime:  Date
  });
  
  const attendance = mongoose.model('attendance', attendanceSchema);
  module.exports = {attendance};