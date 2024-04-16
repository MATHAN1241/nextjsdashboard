
import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const Adminappraisal = () => {
  return (
    <>
      
 <Breadcrumb pageName="Assign Employee" />
 
 


 <div className="grid grid-cols-5 gap-8 w-full"> 
  <div className="col-span-5 xl:col-span-3">
    <div className="rounded-sm border border-black bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-blue-100 text-left dark:bg-meta-4">
            <th className="px-4 py-4 font-bold text-black xl:pl-11">
              Employee list
            </th>
            <th className="px-4 py-4 font-medium">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 dark:bg-boxdark dark:text-white dark:border-strokedark"
                />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </th>
          </tr>
        </thead>
      </table>
      <div className="grid grid-cols-3 gap-4 p-4 text-black font-medium">
        <div>
          <input type="radio" id="radio1" className="mr-2" name="employeeType" />
          <label htmlFor="radio1">Assigned Employees</label>
        </div>
        <div>
          <input type="radio" id="radio2" className="mr-2" name="employeeType" />
          <label htmlFor="radio2">Not Assigned Employees</label>
        </div>
        <div>
          <input type="radio" id="radio3" className="mr-2" name="employeeType" />
          <label htmlFor="radio3">Reassign Employees</label>
        </div>
      </div>
      <div className="px-3 py-4 text-black font-medium">
        <label htmlFor="requiredDropdown">Select: </label>
        <select id="requiredDropdown" className="w-40 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 dark:bg-boxdark dark:text-white dark:border-strokedark" required>
          <option value="">Individual</option>
          <option value="option1">Category</option>
          <option value="option2">Department</option>
          <option value="option3">team</option>
        </select>
      </div>
      
      
              <hr className="my-4" />
              <h1 className="px-4 text-black font-medium">No Records found</h1>
              <hr className="my-4" />
              <div className="flex items-center mb-4 m-2 text-black font-medium">
                <label htmlFor="page-size" className="mr-2">Page size:</label>
                <select id="page-size" className="mr-4">
                  <option value="5">15</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <label htmlFor="go-to-page" className="mr-2 ">Go to page:</label>
                <input id="go-to-page" type="text" className="mr-2 w-16 px-2 py-1 border border-gray-300 rounded-full" />
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
                  Go
                </button>
                
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded p-0 w-95">
  <div className="bg-blue-100 text-left dark:bg-meta-4">
    <h1 className="px-2 py-4 font-bold text-black xl:pl-11">
      Appraisal Assignment
    </h1>
  </div>
  <div className="px-1 py-6 text-black font-medium">
    <label htmlFor="requiredDropdown">Appraisal Template: </label>
    <select id="requiredDropdown" className="w-40 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 dark:bg-boxdark dark:text-white dark:border-strokedark" required>
      <option value=""></option>
      <option value="option1">Category</option>
      <option value="option2">Department</option>
      <option value="option3">team</option>
    </select>
  </div>
  <div className="flex col-span-3 text-black font-medium" >
    <div className="px-1 py-4">
      
      <select id="dropdown2" className="w-45 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 dark:bg-boxdark dark:text-white dark:border-strokedark" required>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">june</option>
        <option value="July">july</option>
        <option value="August">August</option>
        <option value="september">September</option>
        <option value="october">october</option>
        <option value="November">November</option>
        <option value="December">December</option>
        <option value="jan">Jan</option>
        <option value="feb">Feb</option>
        <option value="march">march</option>
      </select>
    </div>
    <div className="px-1 py-4">
      
      <select id="dropdown3" className="w-45 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 dark:bg-boxdark dark:text-white dark:border-strokedark" required>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2020">2022</option>
        <option value="2021">2021</option>
      </select>
    </div>
    
   
    
  </div>
  <div className="flex justify-center">
  <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-5 m-6 rounded">
    Assign
  </button>
</div>


  
</div>



          </div>
        
    











 
   </>
  )
      }
export default  Adminappraisal