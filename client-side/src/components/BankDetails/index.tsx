"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use, useState } from 'react'

const BankDetails = () => {
  
  const [employeeId, setEmployeeId]=useState('');
  const [bankName, setbankName]= useState('');
  const [accountNumber, setaccountNumber]= useState('');
  const [accountHolderName,setaccountHolderName]=useState('');
  const [branchName,setbranchName]=useState('');
  const [branchAddress,setbranchAddress]=useState('');
  const [joiningdate,setjoining]=useState('');
  const [ifscCode,setifsccde]=useState('');
  const router=useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData={employeeId,bankName,accountNumber,accountHolderName,ifscCode,branchName,branchAddress};
    try {
      const response = await axios.post('http://localhost:5000/api/Bankdtls/bank-details', formData); 
     console.log('Bank details saved:', response.data);
      // Optionally, you can redirect or show a success message here
      router.push('/dashboard');
    } catch (error) {
      console.error('Error saving bank details:', error);
      // Handle error state or display error message
    }
  };
  return (
    <>
      <Breadcrumb pageName="Bank Details" />
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Bank Details Form
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
               
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  EmployeeId <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={employeeId}
                    onChange={(e)=>setEmployeeId(e.target.value)}    
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    placeholder="Enter your Employee Id" 
                 />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Bank Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={bankName}
                    onChange={(e)=>setbankName(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    placeholder="Enter your bank name" 
                 />
                </div>
              </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Account Holder Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={accountHolderName}
                    onChange={(e)=>setaccountHolderName(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    placeholder="Enter your name" 
                 />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                   Account Number<span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e)=>setaccountNumber(e.target.value)}
                  placeholder="Enter your Account Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                   
                  />
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                   IFSC Code <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={ifscCode}
                    onChange={(e)=>setifsccde(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    placeholder="Enter your IFSC code"
                 />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                   Date Of Joining<span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="Date"
                    value={joiningdate}
                    onChange={(e)=>setjoining(e.target.value)}
                    placeholder="Enter your employee role"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />

                </div>
              </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                   Branch Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={branchName}
                    onChange={(e)=>setbranchName(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    placeholder="Enter your Branch Name"
                 />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                   Branch Address<span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={branchAddress}
                    onChange={(e)=>setbranchAddress(e.target.value)}
                    placeholder="Enter your Branch Address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />

                </div>
              </div>
              <div className="flex justify-between">
  <button
    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10"
  >
    <span>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="violet"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
</svg>



    </span>
   Submit
  </button>

  
  
              </div>


            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default BankDetails;
