'use client'
import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';

const MyComponent = () => {
  const [showApprovalBox, setShowApprovalBox] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [records, setRecords] = useState([]);

  const handleApprovalLinkClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevents the default behavior of the link
    setShowApprovalBox(true);
  };

  const handleApprovedAppraisalLinkClick = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevents the default behavior of the link
    setShowApprovalBox(false);
  };

  const handleSend = () => {
    // Only add record if all fields are filled
    if (startDate && endDate && reason) {
      setRecords([...records, { startDate, endDate, reason }]);
      // Clear input fields after adding record
      setStartDate('');
      setEndDate('');
      setReason('');
    }
  };

  return (
    <>
      <Breadcrumb pageName="Appraisal Request" />
      <div className="container-fluid mx-auto ">
        <div className="grid  md:grid-row items-center mb-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4 w-full md:w-auto md:mr-4 text-black ">
            <div>
              <a
                href="/appraisal/appraisalRequest"
                className={`pl-5 ${showApprovalBox ? 'text-violet-600' : 'text-gray-600'} font-bold hover:text-violet-700`}
                onClick={handleApprovalLinkClick}
              >
                Appraisal waiting for approval
              </a>
              <br className="md:hidden" />
              <a
                className={`pl-5 ${!showApprovalBox ? 'text-violet-600' : 'text-gray-600'} font-bold hover:text-violet-700`}
                href="/appraisal/appraisalRequest"
                onClick={handleApprovedAppraisalLinkClick}
              >
                My Approved Appraisal
              </a>
            </div>

            <hr />

            {showApprovalBox ? (
              <div className="grid grid-cols-12 bg-gray-200 p-4 rounded-lg shadow-md co">
                <h2 className="grid grid-cols-12 text-lg font-bold mb-2 col-span-12">Waiting for Approval...</h2>
                {/* Additional content for waiting for approval */}
              </div>
            ) : (
              <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
                {records.length > 0 ? (
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="border px-4 py-2">Start Date</th>
                        <th className="border px-4 py-2">End Date</th>
                        <th className="border px-4 py-2">Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {records.map((record, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2">{record.startDate}</td>
                          <td className="border px-4 py-2">{record.endDate}</td>
                          <td className="border px-4 py-2">{record.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No records found</p>
                )}
                <hr className="my-4" />
                <div className="flex flex-col md:flex-row items-center mb-4">
                  <label htmlFor="start-date" className="mr-2">Start Date:</label>
                  <input
                    id="start-date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="mr-4 mb-2 md:mb-0 w-full md:w-auto px-2 py-1 border border-gray-300 rounded"
                  />
                  <label htmlFor="end-date" className="mr-2">End Date:</label>
                  <input
                    id="end-date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="mr-4 mb-2 md:mb-0 w-full md:w-auto px-2 py-1 border border-gray-300 rounded"
                  />
                  <label htmlFor="reason" className="mr-2">Reason:</label>
                  <textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="mr-2 mb-2 md:mb-0 w-full md:w-auto px-2 py-1 border border-gray-300 rounded"
                    placeholder="Enter reason"
                  ></textarea>
                  <button onClick={handleSend} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
                    Send
                  </button>
                </div>
              </div>
            )}

            <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
              <div className="flex flex-col md:flex-row items-center mb-4">
                <label htmlFor="page-size" className="mr-2">
                  Page size:
                </label>
                <select id="page-size" className="mr-4 mb-2 md:mb-0 w-full md:w-auto">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <label htmlFor="go-to-page" className="mr-2">
                  Go to page:
                </label>
                <input
                  id="go-to-page"
                  type="text"
                  className="mr-2 mb-2 md:mb-0 w-full md:w-16 px-2 py-1 border border-gray-300 rounded"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
                  Go
                </button>
                <div className="flex flex-col md:flex-row items-center ml-auto">
                  <span className="mr-2">Page:</span>
                  <span className="mr-4">1</span>
                  <span>Total:</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
