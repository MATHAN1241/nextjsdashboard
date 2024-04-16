"use client"
import React, { useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Link from "next/link";

const Registerform = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");
  const [currentDate, setCurrentDate] = useState<string>('');
  const [isCheckInClicked, setIsCheckInClicked] = useState<boolean>(false);
  const [totalHours, setTotalHours] = useState<number>(0);
  const [totalMinutes, setTotalMinutes] = useState<number>(0);
  //const [checkInDisabled, setCheckInDisabled] = useState(false);

  // const handleCheckOutClick = () => {
  //   // const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //   // setCheckOutTime(currentTime);
  //   const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //   setCheckOutTime(currentTime);
  //   setCurrentDate(new Date().toLocaleDateString());

  //   // Calculate total hours and minutes
  //   if (checkInTime) {
  //     const checkIn = new Date(2000-01-01T${checkInTime});
  //     const checkOut = new Date(2000-01-01T${currentTime});

  //     const diffMilliseconds = checkOut.getTime() - checkIn.getTime();
  //     const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
  //     const hours = Math.floor(diffMinutes / 60);
  //     const minutes = diffMinutes % 60;

  //     setTotalHours(hours);
  //     setTotalMinutes(minutes);
  //   }
  // };
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
  return (
    <>
      <Breadcrumb pageName="Attendance Registration" />
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
             Register Form
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    CheckIn Time <span className="text-meta-1">*</span>
                  </label>
                  {/* <input
                    type="time"
                    placeholder="Enter your Checkin Time"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    required /> */}
                      <button
                    type="button"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    onClick={handleCheckInClick}

                    // disabled={!checkOutTime}
                  >
                    Register CheckIn Time
                  </button>
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
                <div className="w-full xl:w-1/2">
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
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                    // onClick={handleCheckOutClick}
                    disabled={!checkInTime}
                  >
                    Register CheckOut Time
                  </button>
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
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Total Time <span className="text-meta-1">*</span>
                  </label>
                  <span className="text-sm text-gray-500">
                 {/* {totalMinutes > 0 ? ${totalMinutes} minutes : ''} */}
                  </span>
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
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
                </div>

                
              </div>
              

             

              {/* <Link
                href="#" */}
                <button
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10"
              >
               
                Clock Attendance Button
              {/* </Link> */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>


            
  )
}
export default Registerform