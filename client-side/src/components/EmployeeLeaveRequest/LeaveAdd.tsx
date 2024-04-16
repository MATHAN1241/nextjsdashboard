"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddEmployees = () => {
  const [employeeId, setEmployeeId] = useState('');
const [firstName, setFirstName] = useState('');
const [email, setEmail] = useState('');
const [contactNo, setContactNo] = useState('');
const [employeeRole, setEmployeeRole] = useState('');
const [fromDate, setfromDate] = useState('');
const [toDate, settoDate] = useState('');
const [reason, setreason] = useState('');
 const router=useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   
   const formData={firstName,employeeId,email,contactNo,employeeRole,fromDate,toDate,reason};
  

   try {
     
      console.log(formData);
      
      const response = await axios.post('http://localhost:5000/api/leaverequests', formData);
      router.push('/EmployeeLeaveRequest')
      console.log(response.data);
    //  router.push('/employees');
    } catch (error:any) {
      console.error('Error:', error);
    //   if (error.response) {
    //    // setError(error.response.data.message);
    //   } else {
    //  //   setError('Something went wrong. Please try again.');
    //   }
      
    }
  };
  return (
    <>
      <Breadcrumb pageName="Add Employees" />
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Leave Add Form
            </h3>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="p-6.5">
               
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                   First Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    // value="John" readOnly
                    placeholder="Enter Your Name"
                 />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    EmployeeId <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                  //  value="Doe"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    // readOnly
                    name="employeeId"
                    value={employeeId}
                    onChange={(e)=>setEmployeeId(e.target.value)}
                    placeholder="Enter your Employee ID"
                  />
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Mobile No <span className="text-meta-1">*</span>
                  </label>
                  <input
                    // type="number"
                    type="tel" 
                    pattern="[0-9]{10}" 
                    
                    name="contactNo"
                    value={contactNo}
                    onChange={(e)=>setContactNo(e.target.value)}
                  
                    placeholder="Enter your contact number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    // value="9876543210" readOnly
                 />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                  // value="umar@gmail.com"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                   // readOnly
                   name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
               
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    From Date <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="Date"
                    name="fromDate"
                    value={fromDate}
                    onChange={(e)=>setfromDate(e.target.value)}
               
                   
                    placeholder="Enter your employee role"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  To Date <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="Date"
                    name="toDate"
                    value={toDate}
                    onChange={(e)=>settoDate(e.target.value)}
               
                   
                    placeholder="Enter your employee role"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Employee Role <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="employeeRole"
                    value={employeeRole}
                    onChange={(e)=>setEmployeeRole(e.target.value)}
               
                   
                    placeholder="Enter your employee role"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                   Reason <span className="text-meta-1">*</span>
                  </label>
                  <textarea name="reason"
                    value={reason}
                    onChange={(e)=>setreason(e.target.value)}
               
                   
                  placeholder="enter your reson" 
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000">

                  </textarea>
                </div>
              </div>

              <div className="flex justify-between">
 <button className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10">
   {/* <Link
    href="/EmployeeLeaveRequest"
    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10"
  > */}
    <span>
    <svg
  className="fill-current "
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3.00024 3.625L21.3752 12L3.00024 20.375L4.93774 14.9375H13.8747V11.0625H4.93774L3.00024 5.625V3.625Z"
    fill="yellow"
  />
</svg>

    </span>
    Send Request
  {/* </Link> */}
   </button>
   <button>
    <Link 
    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10 "
    href="/EmployeeLeaveRequest">
    <span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.65685 18.3431C5.07902 17.7653 5.07902 16.8431 5.65685 16.2653L16.2652 5.65699C16.843 5.07916 17.7652 5.07916 18.343 5.65699C18.9208 6.23482 18.9208 7.157 18.343 7.73483L7.73468 18.3431C7.15685 18.9209 6.23468 18.9209 5.65685 18.3431Z"
          fill="red"
        />
        <path
          d="M5.65685 5.65699C5.07902 6.23482 5.07902 7.157 5.65685 7.73483L16.2652 18.3431C16.843 18.9209 17.7652 18.9209 18.343 18.3431C18.9208 17.7653 18.9208 16.8431 18.343 16.2653L7.73468 5.65699C7.15685 5.07916 6.23468 5.07916 5.65685 5.65699Z"
          fill="red"
        />
      </svg>
    </span>
    Cancel
    </Link>
  </button>
  </div>


</div>
</form>
  {/* Cancel SVG Link */}
 
        </div>
      </div>
    </>
  );
};

export default AddEmployees;
