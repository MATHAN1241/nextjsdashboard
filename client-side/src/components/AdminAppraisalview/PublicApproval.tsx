import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const Publicappraisal = () => {
  return (
    <>
      
 <Breadcrumb pageName="Publish  Appraisal" />
 
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full "> 
  <div className="col-span-1 md:col-span-2 ">
    <div className="rounded-sm border border-black bg-white shadow-default dark:border-strokedark dark:bg-boxdark w-full rounded-full">
      <table className="w-full table-auto ">
        <thead>
          <tr className="bg-blue-100 text-left dark:bg-meta-4 w-full ">
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
      <div className="grid grid-cols-3 gap-4 p-4 font-medium text-black">
        <div className="px-3 py-4">
          <label >Appraisal Template </label>
          <select id="dropdown1" className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 dark:bg-boxdark dark:text-white dark:border-strokedark" required>
            <option value="">ADMIN DEPT</option>
            <option value="option1">Option 2</option>
            <option value="option2">Option 3</option>
            <option value="option3">Option 4</option>
          </select>
        </div>
        <div className="px-3 py-4">
          <label >Month</label>
          <select id="dropdown2" className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 dark:bg-boxdark dark:text-white dark:border-strokedark" required>
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
        <div className="px-3 py-4">
          <label >Year </label>
          <select id="dropdown3" className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 dark:bg-boxdark dark:text-white dark:border-strokedark" required>
          <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2020">2022</option>
        <option value="2021">2021</option>
          </select>
        </div>
      </div>
      <div className="px-3 py-4 text-black font-medium">
          <label className="px-4">Select: </label>
          <select id="dropdown1" className="w-50 px-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 dark:bg-boxdark dark:text-white dark:border-strokedark" required>
            <option value="">Individual</option>
            <option value="option1">Department</option>
            <option value="option2">Category</option>
            <option value="option3">Option 4</option>
          </select>
        </div>
      <div className="px-8 py-4 flex items-center text-black font-medium">
        <div className="flex">
          <div className="mr-4">
            <input type="radio" id="radio1" className="mr-2" name="selectionType" />
            <label >Linked Employees</label>
          </div>
          <div>
            <input type="radio" id="radio2" className="mr-2" name="selectionType" />
            <label >Not Linked Employees</label>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <h2 className="font-medium text-black px-3">No records Found</h2>
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
      <hr className="my-4" />
     <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-8 m-3 rounded justify-items-center items-center rounded-full">
          Public Appraisal
        </button>
     
    </div>
    
  </div>
</div>



    











 
   </>
  )
      }
export default  Publicappraisal