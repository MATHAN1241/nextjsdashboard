"use client"
import React from 'react'
import Breadcrumb from '../Breadcrumbs/Breadcrumb'
import Link from 'next/link'



const OverTimeRequest = () => {
  const data = [
    { id: 1, name: 'John Doe', timeIn: '09:00 AM', timeOut: '06:00 PM', overtime: '02:00', status: 'Pending' },
    { id: 2, name: 'Jane Doe', timeIn: '08:30 AM', timeOut: '05:30 PM', overtime: '01:30', status: 'Approved' },
    // Add more data as needed
  ];

  const handleAccept = (id: number) => {
    // Implement accept action here
    console.log(`Accept request for employee with ID ${id}`);
  };

  const handleDeny = (id: number) => {
    // Implement deny action here
    console.log(`Deny request for employee with ID ${id}`);
  };

  return (
    
    <div className="overflow-x-auto w-full">
      <Breadcrumb pageName="Over Time Request" />
      
      <table className="min-w-full bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Employee ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Employee Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Request Time In
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Request Time Out
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Request Overtime
            </th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Status
            </th> */}
            <th className="px-6 py-3"> Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((employee) => (
            <tr key={employee.id}>
              <td className="px-6 py-4 whitespace-nowrap">{employee.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.timeIn}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.timeOut}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.overtime}</td>
              {/* <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  employee.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  employee.status === 'Approved' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                } dark:bg-opacity-25 dark:bg-opacity-25 dark:text-opacity-75`}>
                  {employee.status}
                </span>
              </td> */}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => handleAccept(employee.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDeny(employee.id)}
                  className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Deny
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OverTimeRequest;