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
