'use client'
import React, { useState } from 'react';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';

const MyComponentView = () => {
   
  return (
    <>
      <Breadcrumb pageName="Appraisal Request" />
      <div className="container-fluid mx-auto ">
        <div className="grid  md:grid-row items-center mb-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4 w-full md:w-auto md:mr-4 text-black ">
            <div>
              <a
                href="/appraisal/appraisalRequest"
                className={`pl-5  'text-violet-600' : 'text-gray-600'} font-bold hover:text-violet-700`}
                
              >
                Appraisal View
              </a>
              <br className="md:hidden" />
             
            </div>

            <hr />

            
              <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
  <div className="flex flex-col md:flex-row items-center mb-4">
  <div className="flex flex-col md:flex-row items-center mb-4">
    <ul>
  <li><label htmlFor="start-date" className="mr-2">2022-2023</label>
  <a href={"/PaySlip/PayForm"} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
    View
  </a>
  </li> 

  <li className='mt-5'>
  <label htmlFor="end-date" className="mr-2">2023-2024</label>
  <a href={"/PaySlip/PayForm"} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">
    View
  </a>
  </li>
  </ul>
</div>

  </div>
</div>

             
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

export default MyComponentView;
