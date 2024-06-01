const express = require('express');
const router = express.Router();
const {LeaveForm} = require('../models/Employee');

router.post('/', async (req, res) => {
    const{firstName,employeeId,contactNo,email,employeeRole,fromDate,toDate,reason}=req.body;
    try {
       // const leaveRequest = new LeaveRequest(req.body);
       // await leaveRequest.save();
        const newEmployee = new LeaveForm( { firstName,employeeId,contactNo,email,employeeRole,fromDate,toDate,reason });
        await newEmployee.save();
        res.status(201).json({ message: 'Leave Request form  send successfully' });
        console.log(newEmployee.data);  
    } catch (error) {
        console.error('Error Leave Form:', error);
        res.status(500).json({ error: 'Server error' });
      }
});
router.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const { status } = req.query; // Extract status from query parameters

      // If status is provided, update the leave request status
      if (status) {
          await LeaveForm.findByIdAndUpdate(id, { status });
          // Optionally, you can return a success message here
          res.status(200).json({ message: 'Leave request status updated successfully' });
      } else {
          // If status is not provided, simply fetch leave request details
          const leaveRequest = await LeaveForm.findById(id);
          res.status(200).json(leaveRequest);
      }
  } catch (error) {
      console.error('Error updating/fetching leave request:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
    try {
      // Fetch data from MongoDB using Mongoose
      const leaveForms = await LeaveForm.find();
      res.json(leaveForms);
    } catch (error) {
      console.error('Error fetching leave forms:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router;
