const mongoose = require('mongoose');

const ClockOutRequestSchema = new mongoose.Schema({
    employeeId: { type: String, required: true },
    clockInTime: { type: Date, required: true },
    requestedClockOutTime: { type: Date, required: true },
    requestedOvertime: { type: String },
    remarks: { type: String },
    status: { type: String, default: 'Pending' },
    adminRemarks: { type: String },
    images: {
      type: [String], // Array of strings to store filenames of uploaded images
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

   const ClockOutRequest = mongoose.model('ClockOutRequest', ClockOutRequestSchema);
   module.exports = {ClockOutRequest};