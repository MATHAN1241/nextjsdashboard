"use client"
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Image from "next/image";
import axios from "axios";
interface Employee {
  //_id:string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email:string;
  contactNo: string;
  employeeRole: string;
  employeeSalary: string;
  address:string;
  imagePath: string;
}
const Attendanceview = () => {
 //const [employee, setEmployee] = useState<Employee | null>(null);
 
  const queryString = window.location.search;

 // Parse the query string to get the URLSearchParams object
 const params = new URLSearchParams(queryString);
 const [id, setId] = useState(''); 
 const [employeeData, setEmployeeData] = useState<Employee | null>(null);
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
  return (
    <React.Fragment>
    <Breadcrumb pageName="Attendance viewpage"/>
    {employeeData && (
     <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[240px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                DP
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
                Employee ID
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
               First Name
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
                Last Name
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
                Role
              </th>
             
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
                Salary
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
               Date
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
                checkin Time
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
               checkout Time
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
                checkin status
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
               present/absent
              </th>
              <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
                Total hours
              </th>

              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {/* {employeeData.map((employee, key) => ( */}
           
               <tr  >
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <div className="h-12.5 w-15 rounded-md">
                    <Image
                      src={`http://localhost:5000/${employeeData.imagePath}`}
                      width={60}
                      height={50}
                      alt="Employee Display Picture"
                    />
                  </div>
                  </td>
                  <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
                      {employeeData.employeeId}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <div>
                   
                   <p className="text-black dark:text-white">{employeeData.firstName}</p>
                 </div>
                </td>
                  
                
                <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                   {employeeData.lastName}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">{employeeData.employeeRole}</p>
                </td>
                <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                   ${employeeData.employeeSalary}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">01-04-2024</p>
                </td>
                
                <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">10:00-AM</p>
                </td>
                <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">6:30-PM</p>
                </td>
                <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">good/late</p>
                </td>
                <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">present/absent</p>
        
                </td>
                <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">8hrs</p>
        
                </td>
                <td className="border-b border-[#eee] px-6 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                  
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9229 1.11914L16.8804 4.07665C17.0366 4.23289 17.0366 4.48914 16.8804 4.64539L15.2399 6.28589L11.7138 2.75977L13.3543 1.11914C13.5106 0.962891 13.7668 0.962891 13.9229 1.11914ZM10.1479 4.89414L14.5893 9.33552L9.45039 14.4744H5.00808V10.0321L10.1479 4.89414Z"
                          fill=""
                        />
                      </svg>
                      
                    </button>
                    
              </div>
              </td>
              </tr>
              </tbody>
              </table>
              </div>
              </div>
    )}
            </React.Fragment>


            
  )
}
export default Attendanceview