"use client";
import { Employee } from '@/types/employee';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';

const Payslip = () => {

  const employee = {
    name: 'John Doe',
    designation: 'Software Engineer',
    dateOfJoining: '2023-01-01',
    bankName: 'XYZ Bank',
    payPeriod: '2023-01-01 to 2023-01-31',
    salaryCreditedTo: 'XYZ Bank Account No. XXXXXXXXXX',
    lopDays: 0,
    basic: 3000,
    houseRentAllowance: 1000,
    fixedAllowance: 500,
    epf: 200,
    pt: 50,
    ytdEarnings: 12000,
    ytdDeductions: 250
  };

  const queryString = window.location.search;

  // Parse the query string to get the URLSearchParams object
  const params = new URLSearchParams(queryString);
  const [id, setId] = useState(''); 
  const [employeeData, setEmployeeData] = useState<Employee | null>(null);
  const grossWages = employee.basic + employee.houseRentAllowance + employee.fixedAllowance;
  const grossDeduction = employee.epf + employee.pt;
 useEffect(() => {
  const _id = new URLSearchParams( window.location.search).get('_id');
  setId(_id??"");
  const fetchEmployeeData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/employees/${_id}`);
      setEmployeeData(response.data);
  
    
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  fetchEmployeeData();
}, []); 
const handleDownload = () => {
  const element = document.getElementById('payslipContent');

  // // Specify the filename for the downloaded PDF
  // const fileName = 'payslip.pdf';

  // html2pdf()
  //   .from(element)
  //   // Set the filename for the downloaded PDF
  //   .filename(fileName)
  //   .save();
  if (element) {
    const options = {
      filename: 'payslip.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(options).from(element).save();
  }
};
  return (
    
    <div className="container mx-auto p-4 ml-8"> 

      <h2 className="text-2xl font-bold mb-4">Employee Pay Summary</h2>
      {employeeData &&( 
      <div  id="payslipContent" className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h1 className="text-3xl font-bold mb-8">LYZOO TECHNOLOGIES PRIVATE LIMITED</h1>
      <hr></hr>
        <h2 className="text-lg font-semibold mb-4">Employee Details</h2>
        <div className="mb-4">
          <p><span className="font-semibold">Employee Name:</span> {employeeData.firstName}</p>
          <p><span className="font-semibold">Designation:</span> {employeeData.employeeRole}</p>
          <p><span className="font-semibold">Date of Joining:</span> {employee.dateOfJoining}</p>
          <p><span className="font-semibold">Bank Name:</span> {employee.bankName}</p>
          <p><span className="font-semibold">Pay Period:</span> {employee.payPeriod}</p>
          <p><span className="font-semibold">Salary Credited To:</span> {employee.salaryCreditedTo}</p>
          <p><span className="font-semibold">LOP Days:</span> {employee.lopDays}</p>
        </div>
        <hr className="my-4"/>
        <div className="flex justify-between mb-6">
          <div className="w-1/2 pr-2">
            <h2 className="text-lg font-semibold mb-4">Earnings</h2>
            <div className="mb-4">
              <p><span className="font-semibold">Basic:</span> ${employee.basic}</p>
              <p><span className="font-semibold">House Rent Allowance:</span> ${employee.houseRentAllowance}</p>
              <p><span className="font-semibold">Fixed Allowance:</span> ${employee.fixedAllowance}</p>
              <p><span className="font-semibold">YTD Earnings:</span> ${employee.ytdEarnings}</p>
            </div>
          </div>
          <div className="w-1/2 pl-2">
            <h2 className="text-lg font-semibold mb-4">Deductions</h2>
            <div className="mb-4">
              <p><span className="font-semibold">Employee EPF:</span> ${employee.epf}</p>
              <p><span className="font-semibold">PT:</span> ${employee.pt}</p>
              <p><span className="font-semibold">YTD Deductions:</span> ${employee.ytdDeductions}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-8">
          <div className="flex justify-between">
            <p className="font-semibold">Gross Wages:</p>
            <p>${grossWages}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Gross Deduction:</p>
            <p>${grossDeduction}</p>
          </div>
        </div>
      </div>
  )}
      <div className="flex justify-end space-x-4">
      <button
          
          className="bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-pink-700"
      onClick={handleDownload}  >
          Download
        </button>
      </div>
  
      </div>

    );
};

export default Payslip;
