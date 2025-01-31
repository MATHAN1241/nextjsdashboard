import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Approval= () => {
  // const router=useRouter();
  // const handleclick=() =>{
  //     router.push('/Employeeattendance/ViewAttendanceform') 
  // }

  return (
    <>
    <Breadcrumb pageName="Approval form" />
<div className="max-w-xxl mx-auto bg-white p-8 rounded shadow-md shadow-default dark:border-strokedark dark:bg-boxdark">
            <h2 className="text-2xl font-bold mb-4">Attendance Request Form</h2>   
       <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
       <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Employee Id <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Original Time In <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="Time"
                    
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Original Time Out <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="Time"
                    
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                
       </div>
              <div className="w-full ">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Original overtime(hr) <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                <br/>
               
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Requested Time In <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="Time"
                    
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Requested Time out <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="Time"
                    
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                
              </div>
              <div className="w-full ">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Requested overtime(hr) <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                <br/>
                <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Remarks <span className="text-meta-1">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Enter your Remarks"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                ></textarea>
              </div>
                
                <div className="mb-4">
                     <label  className="block font-bold mb-2">Attachment</label>
                         <input type="file" id="attachment" name="attachment"  className="w-full px-4 py-2 border rounded-md" />
                </div>
                <br/>
<<<<<<< HEAD
                <button type="button" className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" >Cancel Request</button>
                <button type="button" className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Accept Request</button>
=======
                <button type="button" className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Submit</button>

>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
</div>

    
    
    
  

    </>
    )}
export default Approval
