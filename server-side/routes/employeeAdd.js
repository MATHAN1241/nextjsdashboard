// employeeRouter.js

const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/') // Specify the folder where images will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // Use the original filename for the image
  }
});

const upload = multer({ storage: storage });

// Endpoint for handling image upload
router.post('/api/upload', upload.single('imagePath'), (req, res) => {
  res.status(200).json({ message: 'Image uploaded successfully' });
});

router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
// Route for handling employee data submission
router.post('/', upload.single('imagePath'), async (req, res) => {
   const { employeeId, firstName, lastName, email, contactNo, employeeRole, employeeSalary, address } = req.body;
  let imagePath = req.file ? req.file.path : null;
  imagePath = imagePath ? imagePath.replace(/\\/g, '/') : null;
  imagePath =imagePath?.slice(7)??null;
  try {
    // const newEmployee = new Employee(req.body);
    const existingEmployee = await Employee.findOne({ $or: [{ email }, { contactNo }] });
    if (existingEmployee) {
      return res.status(400).json({ error: 'Email or phone number already exists' });
    }
    const newEmployee = new Employee({ employeeId, firstName, lastName, email, contactNo, employeeRole, employeeSalary, address, imagePath });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee added successfully' });
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
router.post('/verify-email', async (req, res) => {
  const { email } = req.body;
  try {
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.json({ exists: true });
    }
    res.json({ exists: false });
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Route to verify if the contact number already exists
router.post('/verify-contactno', async (req, res) => {
  const { contactNo } = req.body;
  try {
    const existingEmployee = await Employee.findOne({ contactNo });
    if (existingEmployee) {
      return res.json({ exists: true });
    }
    res.json({ exists: false });
  } catch (error) {
    console.error('Error verifying contact number:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:id', upload.single('imagePath'), async (req, res) => {
  try {
    const { id } = req.params;

    let imagePath = req.file ? req.file.path : null;
    imagePath = imagePath ? imagePath.replace(/\\/g, '/') : null;
    imagePath =imagePath?.slice(7)??null;
    // If there's a new image, update it along with other employee details
    const updatedEmployee = { ...req.body, imagePath };
    // const updatedEmployee = req.body;
    // Update employee details in the database
    await Employee.findByIdAndUpdate(id, updatedEmployee);
    res.status(200).json({ message: 'Employee updated successfully' });
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const employeeId = req.params.id;
    // Find the employee by ID in the database
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    // If employee found, send the employee data in the response
    res.status(200).json(employee);
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
// Delete employee endpoint
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Delete employee from the database
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
