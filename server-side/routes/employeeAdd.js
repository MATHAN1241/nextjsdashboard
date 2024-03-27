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
router.post('/',upload.single('imagePath') ,async (req, res) => {
    const { employeeId, firstName, lastName, email, contactNo, employeeRole, employeeSalary, address } = req.body;
    let imagePath =  req.file ? req.file.path:null;
    imagePath = imagePath ? imagePath.replace(/\\/g, '/') : null;
  try {
    // const newEmployee = new Employee(req.body);
    const newEmployee = new Employee({ employeeId, firstName, lastName, email, contactNo, employeeRole, employeeSalary, address, imagePath });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee added successfully' });
  } catch (error) {
    console.error('Error adding employee:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const updatedEmployee = req.body;
    // Update employee details in the database
    await Employee.findByIdAndUpdate(id, updatedEmployee);
    res.status(200).json({ message: 'Employee updated successfully' });
  } catch (error) {
    console.error('Error updating employee:', error);
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
