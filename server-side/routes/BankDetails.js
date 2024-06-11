const express = require('express');
const router = express.Router();
const{BankDetails} =require('../models/BankDetails');
const{Employee}=require('../models/Employee');

router.post('/bank-details', async (req, res) => {
  try {
    const { employeeId, bankName, accountHolderName, accountNumber, ifscCode, branchName, branchAddress } = req.body;

    // Validate if employeeId exists
    const employee = await Employee.findOne({ employeeId });
    if (!employee) {
      return res.status(400).send('Employee not found');
    }

    // Create and save bank details
    const bankDetails = new BankDetails({
      employeeId,
      bankName,
      accountHolderName,
      accountNumber,
      ifscCode,
      branchName,
      branchAddress
    });

    await bankDetails.save();
    res.status(201).send(bankDetails);
  } catch (error) {
    console.error('Error saving bank details:', error);
    res.status(400).send(error);
  }
});

module.exports=router;