"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { EmployeeLeaveRequest } from "@/types/employeeLeaveReq"; // Renaming the import alias
import axios from "axios";

import Link from "next/link";
import { useEffect, useState } from "react";

// const employeeData: EmployeeLeaveRequestType[] = [ // Using the renamed import alias
//   {
    
//     employeeName: "John", // DisplEmployeeLeaveRequestay picture (image path)
//     requestedDate: "09/12/2045",
//     fromDate: "09/02/2023",
//     toDate: "23/12/2024",
//     reason: "SICK LEAVE",
//     status:"approved"
//   },
//   {
    
//     employeeName: "John", // DisplEmployeeLeaveRequestay picture (image path)
//     requestedDate: "09/12/2045",
//     fromDate: "09/02/2023",
//     toDate: "23/12/2024",
//     reason: "SICK LEAVE",
//     status:"declined"
//   },
//   // Add more employee objects as needed
// ];

const EmployeeLeaveRequestComponent = () => { // Renaming the local variable
  const [leaveForms, setLeaveForms] = useState([]);
  // useEffect(() => {
  //   // Fetch data from backend API route
  //   // axios.get<EmployeeLeaveRequest[]>('http://localhost:5000/api/leaverequests') // Assuming your backend route is '/api/leave-forms'
  //   //   .then(response => {
  //   //     setLeaveForms(response.data);
  //   //   })
  //   //   .catch(error => {
  //   //     console.error('Error fetching leave forms:', error);
  //   //   });
   
  // } catch (error) {
  //   console.error('Error fetching employees:', error);
  // });
  // }, []);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get<EmployeeLeaveRequest[]>('http://localhost:5000/api/leaverequests');
        setLeaveForms(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      <Breadcrumb pageName="Employee Leave Request" />
      <Link href="/EmployeeLeaveRequest/add-leaveRequest">
  <button className="group relative mb-5 flex h-10 w-70 cursor-pointer items-center rounded-lg border border-violet-500 bg-violet-500 hover:bg-violet-500 active:border-violet-500 active:bg-violet-500">
    <span className="ml-8 transform font-semibold text-black transition-all duration-300 group-hover:translate-x-20 dark:text-white">
      New Leave Request
    </span>
    <span className="absolute right-0 flex h-full w-10 transform items-center justify-center rounded-lg bg-violet-500  transition-all duration-300 group-hover:w-full group-hover:translate-x-0">
      <svg
        className="svg w-8 text-black group-hover:text-orange-500 dark:text-white"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="12" x2="12" y1="5" y2="19"></line>
        <line x1="5" x2="19" y1="12" y2="12"></line>
      </svg>
    </span>
  </button>
</Link>

      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Employee Name
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                 EmployeeId
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
                 Status
                </th>
              </tr>
            </thead>
            <tbody>
              {leaveForms.map(leave => (
                <tr key={leave._id}>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {leave.firstName}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {leave.employeeId}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {leave.fromDate}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {leave.toDate}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {leave.reason}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {leave.status}
                    </p>
                  </td>
                    

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

export default EmployeeLeaveRequestComponent; // Corrected export name
