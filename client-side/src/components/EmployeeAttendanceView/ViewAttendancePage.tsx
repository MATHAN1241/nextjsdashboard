import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Link from "next/link";

const ViewAttendance= () => {
  return (
    <>
    <Breadcrumb pageName="View Attendance" />
   

<div className="container mx-auto p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
  <Link href={"/Employeeattendance/ViewAttendanceTime"} className="block">
  <div className="bg-blue-200 p-4 w-full md:w-100 h-50 rounded-2xl hover:bg-blue-300 transition-colors duration-300 shadow-md">
    <div className="flex flex-col md:flex-row">
      <div className="flex justify-start text-blue-800">
        <div>
          ShiftGs
          <div className="text-black">GENERAL SHIFT</div>
          <div className="flex justify-between items-center">
            <div className="px-3 py-2 text-black">
              In
              <span className="px-20 text-black">out</span>
              <div className="flex items-center">
                <div className="px-3 py-1 font-bold bg-blue-700 text-black rounded">10:00</div>
                <div className="px-3"></div>
                <div className="px-2 py-1 font-bold bg-blue-700 text-black rounded">18:00</div>
              </div>
              <div className="py-5 text-black">Reason name</div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-15">
        <div className="text-blue-800">02/04/2024</div>
        <div className="px-6 text-blue-800">(Monday)</div>
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
  </div>
</Link>


<a href={"/Employeeattendance/ViewAttendanceTime"} className="block">
  <div className="bg-blue-200 p-4 w-full md:w-100 h-50 rounded-2xl hover:bg-blue-300 transition-colors duration-300 shadow-md">
    <div className="flex flex-col md:flex-row">
      <div className="flex justify-start text-blue-800">
        <div>
          ShiftGs
          <div className="text-black">GENERAL SHIFT</div>
          <div className="flex justify-between items-center">
            <div className="px-3 py-2 text-black">
              In
              <span className="px-20 text-black">out</span>
              <div className="flex items-center">
                <div className="px-3 py-1 font-bold bg-blue-700 text-black rounded">10:00</div>
                <div className="px-3"></div>
                <div className="px-2 py-1 font-bold bg-blue-700 text-black rounded">18:00</div>
              </div>
              <div className="py-5 text-black">Reason name</div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-15">
       
          <a>
            <div className="text-blue-800">02/04/2024</div>
            <div className="px-6 text-blue-800">(Monday)</div>
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
          </a>
        
        <div className="py-4 px-5">
          <a href={"/Employeeattendance/ViewRequestForm"}>
            <div className="inline-flex items-center bg-yellow-400 p-1 rounded hover:bg-yellow-500 text-white">
              pending
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</a>

  </div>
</div>



                 
                
                
                


                



        
        
        
        
  
    </>
  )
}

export default ViewAttendance