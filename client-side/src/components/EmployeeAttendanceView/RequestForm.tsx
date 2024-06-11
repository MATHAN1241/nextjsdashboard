"use client"
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Attendance } from "@/types/attendance";

const RequestStatus= () => {
  const router=useRouter();
  const [employeeId, setEmployeeId] = useState("");
  const[showModal,setShowModal]=useState(false);
  const [clockInTime, setCheckInTime] = useState("");
  const[ attendanceRecords,setAttendanceRecords]=useState([]);
  const [checkOutTime, setCheckOutTime] = useState("");
  const [overtime,setovertime]=useState("");
  const [requestedClockOutTime,setrequestclockout]=useState("");
  const [requestedOvertime,setrequestedovertime]=useState("");
  const [remarks,setremarks]=useState("");
  //const [images, setImages] = useState([]);
  const [images, setImages] = useState<FileList | null>(null);
  const moment = require('moment-timezone');
  useEffect(() => {
    
    const _id= new URLSearchParams( window.location.search).get('_id');
    const ind= new URLSearchParams( window.location.search).get('ind');
    // setId(_id??"");
     setEmployeeId(_id);
     const formattedTime = moment(ind, 'hh:mm:ss a').format('hh:mm:ss A');

// Now formattedTime will contain the time in the desired format "5:32:23 PM"
      setCheckInTime(formattedTime);
    //  setCheckInTime(ind);
  });
  const handleChange = (e) => {
    // Get the value from the input
    const inputValue = e.target.value;
  
    // Parse the input time using moment.js and format it to "hh:mm:ss A"
    const formattedTime = moment(inputValue, 'HH:mm:ss').format('hh:mm:ss A');
  
    // Update the state with the formatted time
    setrequestclockout(formattedTime);
  };
  const handleFileChange = (e) => {
    setImages(e.target.files);
  };
  console.log(clockInTime);
  console.log("value=",employeeId);
  console.log(requestedClockOutTime);
  // const handleSubmit=async (e) =>{

  //    e.preventDefault();
    
  //   const formData = new FormData();
  //   formData.append("employeeId", employeeId);
  //   formData.append("clockInTime", clockInTime);
  //   formData.append("requestedClockOutTime", requestedClockOutTime);
  //   formData.append("remarks", remarks);
  //   Array.from(images).forEach((file) => formData.append("images", file));
  //  // console.log(clokInTime);
  //   console.log(requestedClockOutTime); 
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/attendance/clockout/request", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     // alert(response.data.message);
  //     router.push( `/Employeeattendance/ViewAttendanceform?_id=${employeeId}`);
  //   } catch (error) {
  //     console.error("Error submitting clock-out request:", error);
  //    // alert(error.response?.data || "Error submitting clock-out request");
  //   }
  //    //router.push(`/Employeeattendance/ViewAttendanceform?_id=${employeeId}`) 
  // }
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('http://localhost:5000/api/attendance/clockout/request', {
  //       employeeId,
  //       clockInTime,
  //       requestedClockOutTime,
  //       remarks,
  
  //     });
  //     router.push( `/Employeeattendance/ViewAttendanceform?_id=${employeeId}`);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error submitting clock-out request:', error);
  //   }
  // };
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!employeeId || !clockInTime || !requestedClockOutTime || !remarks) {
      setMessage('All fields except images are required');
      return;
    }

    const formData = new FormData();
    formData.append('employeeId', employeeId);
    formData.append('clockInTime', clockInTime);
    formData.append('requestedClockOutTime', requestedClockOutTime);
    formData.append('remarks', remarks);

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
    }

    try {
      const response = await axios.post('http://localhost:5000/api/attendance/clockout/request', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },   
      });
      router.push( `/Employeeattendance/ViewAttendanceform?_id=${employeeId}`);
      console.log(response.data);

      if (response.status === 200) {
        setMessage('Clock-out request submitted successfully');
        // Clear the form
        setEmployeeId('');
        setCheckInTime('');
        setrequestclockout('');
        setremarks('');
        setImages(null);
   
      } else {
        setMessage('Aleady Submitted');
      }
    } catch (error) {
      if (error == 'Error submitting clock-out request' ){
      setMessage('Error submitting clock-out request');
      }
      else if( error == 'A clock-out request for this date already exists'){
        setMessage('A clock-out request for this date already exists');
      }
      console.error('Error:', error);
      setMessage('A clock-out request for this date already exists');
    }
  };
  return (
    <>
    <Breadcrumb pageName="Approval form" />
    {/* <form action="" onSubmit={handleSubmit}> */}

<div className="max-w-xxl mx-auto bg-white p-8 rounded shadow-md shadow-default dark:border-strokedark dark:bg-boxdark">
{message && <p>{message}</p>}

       <form action="#" onSubmit={handleSubmit}> 
            <h2 className="text-2xl font-bold mb-4">Attendance Request Form</h2>   
       <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
       <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Employee Id <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    // value={''}
                    value={employeeId}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Original Time In <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={clockInTime}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Original Time Out <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={checkOutTime? checkOutTime :' 00:00'}
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
                    value={overtime ? overtime :'00:00'}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                <br/>
            
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                {/* <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Requested Time In <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="Time"
                    
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div> */}
              
                <div className="w-full ">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Requested Time out <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="Time"
                    id ="appt-time"
                    // onChange={(e) => setrequestclockout(e.target.value)}
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    step="2"
                 />
                </div>
                
              </div>
              {/* <div className="w-full ">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Requested overtime(hr) <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setrequestedovertime(e.target.value)} 
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    disabled
                  />
                </div> */}
                <br/>
                <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Remarks <span className="text-meta-1">*</span>
                </label>
                <textarea
                  rows={6}
                  onChange={(e) => setremarks(e.target.value)} 
                  placeholder="Enter your Remarks"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                ></textarea>
              </div>
                
                <div className="mb-4">
                     <label  className="block font-bold mb-2">Attachment</label>
                         
                        <input type="file" id="attachment"  
                          
                          multiple
                          onChange={handleFileChange}
                        name="attachment"  className="w-full px-4 py-2 border rounded-md" />
                </div>
                <br/>
               {/* <button className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" >Cancel Request</button> */}
                {/* <button type="button" className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Accept Request</button>      */}
                <button
                // href="/employees"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10"
                  >
                <span>
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_182_46495)">
                      <path
                        d="M18.875 11.4375C18.3125 10.8438 17.5625 10.5312 16.75 10.5312C16.125 10.5312 15.5625 10.7188 15.0625 11.0938C15 11.125 14.9688 11.1562 14.9062 11.2188C14.8438 11.1875 14.8125 11.125 14.75 11.0938C14.25 10.7188 13.6875 10.5312 13.0625 10.5312C12.9062 10.5312 12.7812 10.5312 12.6562 10.5625C11.7188 9.5 10.5625 8.75 9.3125 8.40625C10.625 7.75 11.5312 6.40625 11.5312 4.875C11.5312 2.6875 9.75 0.9375 7.59375 0.9375C5.40625 0.9375 3.65625 2.71875 3.65625 4.875C3.65625 6.4375 4.5625 7.78125 5.875 8.40625C4.5625 8.78125 3.40625 9.53125 2.4375 10.6562C1.125 12.2188 0.375 14.4062 0.3125 16.7812C0.3125 17.0312 0.4375 17.25 0.65625 17.3438C1.5 17.75 4.4375 19.0938 7.59375 19.0938C9.28125 19.0938 10.8438 18.8125 10.9062 18.8125C11.25 18.75 11.4688 18.4375 11.4062 18.0938C11.3438 17.75 11.0312 17.5312 10.6875 17.5938C10.6875 17.5938 9.15625 17.875 7.59375 17.875C5.0625 17.8438 2.65625 16.875 1.5625 16.375C1.65625 14.4375 2.3125 12.7187 3.375 11.4375C4.46875 10.125 5.96875 9.40625 7.59375 9.40625C9.03125 9.40625 10.375 10 11.4375 11.0312C11.2812 11.1562 11.125 11.2812 11 11.4062C10.4688 11.9688 10.1875 12.75 10.1875 13.5938C10.1875 14.4375 10.5 15.2188 11.1562 16C11.6875 16.6562 12.4375 17.2812 13.2812 18L13.3125 18.0312C13.5937 18.25 13.9062 18.5312 14.2188 18.8125C14.4062 19 14.6875 19.0938 14.9375 19.0938C15.1875 19.0938 15.4687 19 15.6562 18.8125C16 18.5312 16.3125 18.25 16.5938 18C17.4375 17.2812 18.1875 16.6562 18.7188 16C19.375 15.2188 19.6875 14.4375 19.6875 13.5938C19.6875 12.7812 19.4062 12.0312 18.875 11.4375ZM4.875 4.875C4.875 3.375 6.09375 2.1875 7.5625 2.1875C9.0625 2.1875 10.25 3.40625 10.25 4.875C10.25 6.375 9.03125 7.5625 7.5625 7.5625C6.09375 7.5625 4.875 6.34375 4.875 4.875ZM17.75 15.2188C17.2812 15.7812 16.5938 16.375 15.7812 17.0625C15.5312 17.2812 15.2188 17.5312 14.9062 17.7812C14.625 17.5312 14.3438 17.2812 14.0938 17.0938L14.0625 17.0625C13.25 16.375 12.5625 15.7812 12.0938 15.2188C11.625 14.6562 11.4062 14.1562 11.4062 13.625C11.4062 13.0937 11.5938 12.625 11.9062 12.2812C12.2188 11.9375 12.6563 11.75 13.0938 11.75C13.4375 11.75 13.75 11.8438 14 12.0625C14.125 12.1562 14.2188 12.25 14.3125 12.375C14.5938 12.7188 15.1875 12.7188 15.5 12.375C15.5938 12.25 15.7187 12.1562 15.8125 12.0625C16.0937 11.8438 16.4062 11.75 16.7188 11.75C17.1875 11.75 17.5938 11.9375 17.9062 12.2812C18.2188 12.625 18.4062 13.0937 18.4062 13.625C18.4375 14.1875 18.2188 14.6562 17.75 15.2188Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_182_46495">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Accept
              </button>
              {/* <button
                // href="/Employeeattendance/ViewAttendanceform"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10"
                  >
                <span>
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_182_46495)">
                      <path
                        d="M18.875 11.4375C18.3125 10.8438 17.5625 10.5312 16.75 10.5312C16.125 10.5312 15.5625 10.7188 15.0625 11.0938C15 11.125 14.9688 11.1562 14.9062 11.2188C14.8438 11.1875 14.8125 11.125 14.75 11.0938C14.25 10.7188 13.6875 10.5312 13.0625 10.5312C12.9062 10.5312 12.7812 10.5312 12.6562 10.5625C11.7188 9.5 10.5625 8.75 9.3125 8.40625C10.625 7.75 11.5312 6.40625 11.5312 4.875C11.5312 2.6875 9.75 0.9375 7.59375 0.9375C5.40625 0.9375 3.65625 2.71875 3.65625 4.875C3.65625 6.4375 4.5625 7.78125 5.875 8.40625C4.5625 8.78125 3.40625 9.53125 2.4375 10.6562C1.125 12.2188 0.375 14.4062 0.3125 16.7812C0.3125 17.0312 0.4375 17.25 0.65625 17.3438C1.5 17.75 4.4375 19.0938 7.59375 19.0938C9.28125 19.0938 10.8438 18.8125 10.9062 18.8125C11.25 18.75 11.4688 18.4375 11.4062 18.0938C11.3438 17.75 11.0312 17.5312 10.6875 17.5938C10.6875 17.5938 9.15625 17.875 7.59375 17.875C5.0625 17.8438 2.65625 16.875 1.5625 16.375C1.65625 14.4375 2.3125 12.7187 3.375 11.4375C4.46875 10.125 5.96875 9.40625 7.59375 9.40625C9.03125 9.40625 10.375 10 11.4375 11.0312C11.2812 11.1562 11.125 11.2812 11 11.4062C10.4688 11.9688 10.1875 12.75 10.1875 13.5938C10.1875 14.4375 10.5 15.2188 11.1562 16C11.6875 16.6562 12.4375 17.2812 13.2812 18L13.3125 18.0312C13.5937 18.25 13.9062 18.5312 14.2188 18.8125C14.4062 19 14.6875 19.0938 14.9375 19.0938C15.1875 19.0938 15.4687 19 15.6562 18.8125C16 18.5312 16.3125 18.25 16.5938 18C17.4375 17.2812 18.1875 16.6562 18.7188 16C19.375 15.2188 19.6875 14.4375 19.6875 13.5938C19.6875 12.7812 19.4062 12.0312 18.875 11.4375ZM4.875 4.875C4.875 3.375 6.09375 2.1875 7.5625 2.1875C9.0625 2.1875 10.25 3.40625 10.25 4.875C10.25 6.375 9.03125 7.5625 7.5625 7.5625C6.09375 7.5625 4.875 6.34375 4.875 4.875ZM17.75 15.2188C17.2812 15.7812 16.5938 16.375 15.7812 17.0625C15.5312 17.2812 15.2188 17.5312 14.9062 17.7812C14.625 17.5312 14.3438 17.2812 14.0938 17.0938L14.0625 17.0625C13.25 16.375 12.5625 15.7812 12.0938 15.2188C11.625 14.6562 11.4062 14.1562 11.4062 13.625C11.4062 13.0937 11.5938 12.625 11.9062 12.2812C12.2188 11.9375 12.6563 11.75 13.0938 11.75C13.4375 11.75 13.75 11.8438 14 12.0625C14.125 12.1562 14.2188 12.25 14.3125 12.375C14.5938 12.7188 15.1875 12.7188 15.5 12.375C15.5938 12.25 15.7187 12.1562 15.8125 12.0625C16.0937 11.8438 16.4062 11.75 16.7188 11.75C17.1875 11.75 17.5938 11.9375 17.9062 12.2812C18.2188 12.625 18.4062 13.0937 18.4062 13.625C18.4375 14.1875 18.2188 14.6562 17.75 15.2188Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_182_46495">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Back
              </button> */}
            </form>
             
</div>

    </>
    )}
  export default RequestStatus