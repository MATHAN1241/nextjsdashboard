"use client"
import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Link from "next/link";
import axios from "axios";
import { Attendance } from "@/types/attendance";

const ViewAttendance= () => {
  const [employid, setId] = useState('');
  const[ attendanceRecords,setAttendanceRecords]=useState([]);
 
  // const _id= new URLSearchParams( window.location.search).get('_id');
  useEffect(() => {
    const _id= new URLSearchParams( window.location.search).get('_id');
    setId(_id??"");
    const fetchAttendanceRecords = async () => {
      try {
        const response = await axios.get<Attendance[]>(`http://localhost:5000/api/attendance/clock/in-outlistofall/${_id}`);
        const data = response.data;
        console.log("hello:",data);
        setAttendanceRecords(response.data);
      } catch (error) {
        console.error('Error fetching attendance records:', error);
      }
    };

    fetchAttendanceRecords();
  }, []);
 function getDayOfWeek(dateString: string): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [day,month, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day); // Month in JavaScript Date is zero-indexed
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}

  function formatDate(dateString: string): string {
    // Split the date string into its components
    const [ day, month, year] = dateString.split('/');

    // Reformat the date components
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
}

  return (
    <>
    <Breadcrumb pageName="View Attendance" />
   

<div className="container mx-auto p-4">

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-4 ">
  {/* <Link href={"/Employeeattendance/ViewAttendanceTime"} className="block">
  <div className="bg-blue-200 p-4 w-full md:w-100 h-50 rounded-2xl">
    <div className="flex flex-col md:flex-row">
    {/* {attendanceRecords.map((record, id) => ( */}
    {/* {attendanceRecords.map(index => (
      <div key={index.employeeId}>
      <div className="flex justify-start text-blue-800">
        <div>
          ShiftGs
          <div className="text-black">GENERAL SHIFT</div>
          <div className="flex justify-between items-center">
            <div className="px-3 py-2 text-black">
              In
              <span className="px-20 text-black">out</span>
              <div className="flex items-center">
                <div className="px-3 py-1 font-bold bg-blue-700 text-black rounded">{index.clockInTime}</div>
                <div className="px-3"></div>
                <div className="px-2 py-1 font-bold bg-blue-700 text-black rounded">{index.clockOutTime}</div>
              </div>
              <div className="py-5 text-black">Reason name</div>
            </div>
          </div>
        </div>
      </div>
   
    
      <div className="md:px-15">
        <div>{index.formattedDate}</div>
        <div className="px-6">(Monday)</div>
        <div className="px-2 text-black">
          Late
          <span className="px-3 text-red font-bold">00:18</span>
        </div>
        <div className="text-black">
          under
          <span className="px-2 text-red font-bold">00.29</span>
        </div>
        <div className="px-5 text-black">
          OT
          <span className="px-2 font-bold">00.00</span>
        </div>
      </div>
      </div>
  ) )}

    </div>
  
//   </div> */}

 {attendanceRecords.map(index => (
  <div key={index.employeeId}>

    <div className="bg-blue-200 p-4 w-full md:w-100 h-50 rounded-2xl">
      <div className="flex flex-col md:flex-row ">
        <div className="flex justify-start text-blue-800">
          <div>
            ShiftGs
            <div className="text-black">GENERAL SHIFT</div>
            <div className="flex justify-between items-center">
              <div className="px-3 py-2 text-black">
                In
                <span className="px-20 text-black">out</span>
                <div className="flex items-center">
                  <div className="px-3 py-1 font-bold bg-blue-700 text-black rounded">
                    {/* {index.clockInTime} */}
                    {/* {new Date(index.clockInTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} */}
                    {index.clockInTime.split(":").slice(0, 2).join(":")}
                  </div>
                  <div className="px-3">
</div>
                  <div className="px-2 py-1 font-bold bg-blue-700 text-black rounded">
                  {index.clockOutTime  ? (index.clockOutTime.split(":").slice(0, 2).join(":")):(
                    
                  <Link href={`/Employeeattendance/ViewRequestForm?_id=${employid}&ind=${index.clockInTime} `} className="block">
                  
                 
                    { "00:00" }
                    {/* {index.clockOutTime ? index.clockOutTime.split(":").slice(0, 2).join(":") : "00:00"} */}

                  </Link>
                ) }
                                   </div>
                </div>
                <div className="py-5 text-red">{index.clockOutTime ?("PRESENT") : ("ABSENT")}</div>
              </div>
            </div>
          </div>
       


          <div className=" md:px-15">
            {/* <div >{index.clockInDate}</div> */}
            {/* <div>{index.clockInDate.split('/').reverse().join('-')}</div> */}
            <div>{formatDate(index.clockInDate)}</div>
            <div className="px-6">{getDayOfWeek(index.clockInDate)}</div>
            <div className="px-2 text-black">
              Late
              <span className="px-3 text-red font-bold">{index.lateTime}</span>
            </div>
            <div className="text-black">
              under
              <span className="px-2 text-red font-bold">{index.underTime ? index.underTime : "00:00" }</span>
            </div>
            <div className="px-5 text-black">
              OT
              <span className="px-2 font-bold">
                {/* {index.overtime} */}
                {index.overtime  ? index.overtime : "00:00" }
              </span>
            </div>
            <div className="py-4 px-5">
              {index.clockOutTime   ?  (<div  className="inline-flex items-center bg-green-400  p-1 rounded hover:bg-green-500  text-white">
     success
  </div>): (
    //         <a href={`/Employeeattendance/ViewRequestForm?_id=${employid}`}>
    // <div className="inline-flex items-center bg-yellow-400  p-1 rounded hover:bg-yellow-500  text-white">
    //     pending
    // </div>
    // </a>
    <div></div>
)
 }
</div>


            </div>





          </div>

         
        
      </div>
    </div>
  </div>
 ))}
  </div>

</div>



                 
                
                
                


                



        
        
        
        
  
    </>
  )
}

export default ViewAttendance