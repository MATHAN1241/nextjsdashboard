// routes/attendanceForm.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Add Attendance
router.post('/:employeeId/attendance', async (req, res) => {
    try {
        const employee = await Employee.findOne({ employeeId: req.params.employeeId });
        if (!employee) {
            return res.status(404).send("Employee not found");
        }
        const { date, present } = req.body;
        employee.attendance.push({ date, present });
        await employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
