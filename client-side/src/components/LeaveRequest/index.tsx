"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
//import { Employee } from "@/types/employee";
import { EmployeeLeaveRequest } from "@/types/employeeLeaveReq";
//import { LeaveRequest } from "@/types/leaveRequest";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


// const employeeData: LeaveRequest[] = [
//   {
   
//     employeeId: "1111",
//     firstName: "John Doe",
//     fromDate: "02/03/2024",
//     toDate: "01/03/2024",
//     reason: "sick leave"
   
//   },
//   {
//      employeeId: "1112",
//      firstName: "Curie",
//     fromDate: "02/04/2024",
//     toDate: "01/04/2024",
//     reason: "injury"
//   },
//   // Add more employee objects as needed
// ];

const LeaveRequest = () => {
  const[req,setRequests]=useState([]);
  const[rmes,setMessage]=useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get<EmployeeLeaveRequest[]>('http://localhost:5000/api/leaverequests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };
    fetchRequests();
  }, []);

  const handleApprove = async (id: string) => {
    try {
      await axios.post(`http://localhost:5000/api/requests/${id}/approve`);
      setMessage('Request approved successfully');
      console.log("approved succeessfully");
    } catch (error) {
      console.error('Error approving request:', error);
      setMessage('Error approving request');
    }
  };

  const handleReject = async (id: string) => {
    try {
      await axios.post(`http://localhost:5000/api/requests/${id}/reject`);
      setMessage('Request rejected successfully');
    } catch (error) {
      console.error('Error rejecting request:', error);
      setMessage('Error rejecting request');
    }
  };
  return (
    <>
      <Breadcrumb pageName="Leave Request" />
      
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                 ID
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                 Employee Name
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  From Date
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  To Date
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Reason
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {req.map((employee) => (
                <tr key={employee._id}>
                  
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {employee.employeeId}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {employee.firstName}
                    </h5>
                  </td>
                 
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {employee.fromDate}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {employee.toDate}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {employee.reason}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                        {/* <Link href={'/employees/edit-employees'}> */}
                        <button className="hover:text-primary"  onClick={() => handleApprove(employee.employeeId)}>
                       
                       <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                            <path
                              d="M16.5 9L11 14.5L7.5 11"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>


                         </button>
                        {/* </Link> */}
                      

                      <button className="hover:text-primary" onClick={() => handleReject(employee.employeeId)}>
                       
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="10" fill="#FF5252" />
                            <path
                              d="M7 7L17 17M17 7L7 17"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>


                      </button>
                      {/* DOWNLOAD  BUTTON */}
                      {/* <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                          fill=""
                        />
                        <path
                          d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                          fill=""
                        />
                      </svg>
                    </button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaveRequest;
