"use client"
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Attendance } from "@/types/attendance";

const Registerform = () => {
  const [employeeId, setEmployeeId] = useState("");
<<<<<<< HEAD
  const[showModal,setShowModal]=useState(false);
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [Message,setMessage]=useState("");
=======
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
  const [currentDate, setCurrentDate] = useState<string>('');
  const [isCheckInClicked, setIsCheckInClicked] = useState<boolean>(false);
  const [totalHours, setTotalHours] = useState<number>(0);
  const [totalMinutes, setTotalMinutes] = useState<number>(0);
<<<<<<< HEAD
  const [error,seterror]=useState('');
  //const [checkInDisabled, setCheckInDisabled] = useState(false);
  const [id, setId] = useState('');
  const[ attendanceRecords,setAttendanceRecords]=useState([]);
  const [isOpen, setIsOpen] = useState(!!error);

  const handleClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    
    const _id= new URLSearchParams( window.location.search).get('_id');
    // setId(_id??"");
     setEmployeeId(_id);
    const fetchAttendanceRecords = async () => {
      try {
        const response = await axios.get<Attendance[]>(`http://localhost:5000/api/attendance/clock/in-out/${_id}`);
        const data = response.data;
        //const {clockInTime,clockInDate ,...records}=response.data;
         const clockInTime= response.data[0].clockInTime;
         const clockInDate= response.data[0].clockInDate;
      //  setEmployeeId(_id);
       // console.log(response.data[0].clockInTime);
        // console.log(clockInTime);
        // setEmployeeId(_id);
        setCheckInTime(clockInTime);
        setCurrentDate(clockInDate);
        setAttendanceRecords(data);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
      }
    };

    fetchAttendanceRecords();
  }, []);
  // const handleCheckOutClick = () => {

=======
  //const [checkInDisabled, setCheckInDisabled] = useState(false);

  // const handleCheckOutClick = () => {
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
  //   // const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //   // setCheckOutTime(currentTime);
  //   const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //   setCheckOutTime(currentTime);
  //   setCurrentDate(new Date().toLocaleDateString());

  //   // Calculate total hours and minutes
  //   if (checkInTime) {
<<<<<<< HEAD
  //     const checkIn = new Date(`2000-01-01T${checkInTime}`);
  //     const checkOut = new Date(`2000-01-01T${currentTime}`);
=======
  //     const checkIn = new Date(2000-01-01T${checkInTime});
  //     const checkOut = new Date(2000-01-01T${currentTime});
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec

  //     const diffMilliseconds = checkOut.getTime() - checkIn.getTime();
  //     const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
  //     const hours = Math.floor(diffMinutes / 60);
  //     const minutes = diffMinutes % 60;

  //     setTotalHours(hours);
  //     setTotalMinutes(minutes);
  //   }
  // };
<<<<<<< HEAD
  // const handleCheckInClick = () => {
  //   const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //   setCheckInTime(currentTime);
  // };
  // const handleCheckInClick = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/attendace/clock/in', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ employeeId, checkInTime }),
  //     });

  //     if (response.ok) {
  //       seterror('Clock-in successful');
  //     } else {
  //       throw new Error('Failed to register clock-in time');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     seterror('An already registering clock-in time for today');
  //   }
  // };
  const handleCloseModalAndCheckIn = () => {
    setShowModal(false); // Close the modal
    handleCheckInClick(); // Perform check-in action
  };
  const handleCheckInClick = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/attendance/clock/in', {
        employeeId
      });
      console.log("hello");
      if (response.status === 200) {
        seterror('Clock-in successful');
      } else {
        throw new Error('Failed to register clock-in time');
      }
    } catch (error) {
      console.error(error);
      seterror('An already registering clock-in time for today');
    }
  };

  const handleCheckOutClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/attendance/clock/out', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeId }),
      });

      if (response.ok) {
        seterror('Clock-out successful');
      } else {
        throw new Error('Failed to register clock-out time');
      }
    } catch (error) {
      console.error(error);
      seterror('An already registering clock-out time for today');
    }
  };
  // const handleSubmit = async (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("/api/attendanceregister", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ employeeId, checkInTime, checkOutTime, currentDate }),
  //     });

  //     if (response.ok) {
  //       // Data submitted successfully
  //       console.log("Attendance recorded successfully.");
  //     } else {
  //       // Handle error response
  //       console.error("Failed to record attendance.");
  //     }
  //   } catch (error) {
  //     // Handle fetch error
  //     console.error("Error recording attendance:", error);
  //   }
  // };
  const router=useRouter();
  // const handleSubmit= async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
    
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/attendace/clock/in', { employeeId });    
  //     setMessage(response.data);
  //     router.push(`/Employeeattendance?_id=${employeeId}`);
  //   } catch (error) {
  //     setMessage('Error clocking in');
  //   }
  // };

=======
  const handleCheckInClick = () => {
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setCheckInTime(currentTime);
  };
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/attendanceregister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId, checkInTime, checkOutTime, currentDate }),
      });

      if (response.ok) {
        // Data submitted successfully
        console.log("Attendance recorded successfully.");
      } else {
        // Handle error response
        console.error("Failed to record attendance.");
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error recording attendance:", error);
    }
  };
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
  return (
    <>
         {error && (
            <div id="popup-modal"  aria-hidden= "false" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-lg text-red-600 mb-4">{error}</p>
                <button
                  onClick={() => seterror('')}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Close
                </button>
              </div>
            </div>
          )}
            {/* {error && (
      <div id="default-modal" tabIndex={-1} aria-hidden= "true" className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full `}>
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {error}
              </p>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
               onClick={() => seterror('')}> 
               Close
              </button>
            </div>
          </div>
        </div>
      </div>
      )} */}
      <Breadcrumb pageName="Attendance Registration" />
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
             Register Form
            </h3>
          </div>
<<<<<<< HEAD
        
          <form action="" >
=======
          <form onSubmit={handleSubmit}>
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
            <div className="p-6.5">
            {/* <p  className="mb-3 red text-sm font-medium text-res dark:text-white">{error  ? error : ''}</p> */}
           
              {/* <div className="text-red-500 dark:text-red-500">{error  ? error : ''}</div> */}
             
            
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                   EmployeeId <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-full ">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    CheckIn Time <span className="text-meta-1">*</span>
                  </label>
                  {/* <input
                    type="time"
                    placeholder="Enter your Checkin Time"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    required /> */}
                      <button
<<<<<<< HEAD
                       type="button"
                       data-modal-target="popup-modal" 
                       data-modal-toggle="popup-modal"
                       className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10"
                       onClick={handleCheckInClick}
                      // onClick={() => setShowModal(true)}
=======
                    type="button"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    onClick={handleCheckInClick}

>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
                    // disabled={!checkOutTime}
                  >
                    Register CheckIn Time
                  </button>
<<<<<<< HEAD
                  {/* {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-4">Are you sure you confirm Clock In Attendance?</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                No
              </button>
              <button
                // onClick={() => setShowModal(false)}
              //  onClick={() => handleDelete(employee._id)}
              //  onClick={handleCloseModalAndCheckIn } 
                onClick={handleCheckInClick} 
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )} */}
=======
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
                  {/* <span className="text-sm text-gray-500" >{checkInTime}</span> */}
                  <input
                      type="text"
                      value={checkInTime}
                      onChange={(e) => setCheckInTime(e.target.value)}
                      placeholder="check-in time"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    disabled />
                </div>

             
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    CheckOut Time <span className="text-meta-1">*</span>
                  </label>
                  {/* <input
                    type="time"
                    placeholder="Enter your Checkout Time"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  /> */}
                  <button
                    type="button"
<<<<<<< HEAD
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10"
                    onClick={handleCheckOutClick}
                    // onClick={() => setShowModal(true)}
=======
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    // onClick={handleCheckOutClick}
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
                    disabled={!checkInTime}
                  >
                    Register CheckOut Time
                  </button>
<<<<<<< HEAD
                  {/* {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-4">Are you sure you confirm Clock Out Attendance?</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                No
              </button>
              <button
                // onClick={() => setShowModal(false)}
              //  onClick={() => handleDelete(employee._id)}
              // onClick={() => handleDelete(employee._id)} 
               onClick={handleCheckOutClick}
              // onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )} */}
=======
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
                  {/* <span className="text-sm text-gray-500">{checkOutTime}</span> */}
                  <input
                      type="text"
                      value={checkOutTime}
                      onChange={(e) => setCheckOutTime(e.target.value)}
                      placeholder="check-out time"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                      disabled />
                </div>
               
              </div>
              {/* <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Total Time <span className="text-meta-1">*</span>
                  </label>
                  <span className="text-sm text-gray-500">
<<<<<<< HEAD
                 {totalMinutes > 0 ? `${totalMinutes} minutes` : ''}
                  </span>
                </div>
              </div> */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-full">
=======
                 {/* {totalMinutes > 0 ? ${totalMinutes} minutes : ''} */}
                  </span>
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Curent Date <span className="text-meta-1">*</span>
                  </label>
                  {/* <input
                    type="Date"
                    placeholder="Enter your employee role"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  /> */}
                   <button
                    type="button"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    onClick={() => setCurrentDate(new Date().toLocaleDateString())}
                  >
                    Show Current Date
                  </button>
                  {/* {currentDate && <span className="text-sm text-gray-500">{currentDate}</span>} */}
                  <input
                      type="show"
                      value={currentDate}
                      onChange={(e) => setCurrentDate(e.target.value)}
                      placeholder="currentDate"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                   disabled />
<<<<<<< HEAD
                </div> 
=======
                </div>

                
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
              </div>

<<<<<<< HEAD
              {/* <Link
                href="#" */}
                
                <div className="flex justify-between">
                <Link 
    href={`/Employeeattendance?_id=${employeeId}`}>
=======
             

              {/* <Link
                href="#" */}
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
                <button
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10"
                 >
               
<<<<<<< HEAD
                 Back
              {/* </Link> */}
              </button>
              </Link>
              {/* <button>
    <Link 
    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10 "
    href="/Employeeattendance">
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
  </button> */}
  </div>
=======
                Clock Attendance Button
              {/* </Link> */}
              </button>
>>>>>>> a6f22f3f6eddfbd2a101691e0effabdf6d4a98ec
            </div>
          </form>
          
        </div>
      </div>
    </>


            
  )
}
export default Registerform