"use client";
import React from "react";

const Details: React.FC = () => {

  return (
    <>
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5"> */}
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Time</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {/* First row with two columns */}
        <div className="bg-blue-200 p-4 rounded-lg">
          <div className="bg-blue-100 p-4">Clock In</div>
          <div className="bg-blue-100 p-4 mt-4">09:55</div>
        </div>

        {/* Second row with three columns */}
        <div className="bg-yellow-200 p-4 rounded-lg">
          <div className="bg-yellow-100 p-4">Clock Out</div>
          <div className="bg-yellow-100 p-4 mt-4">06:30</div>
          
        </div>
      </div>
    </div>
           {/* end of time */}

    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Leave Calender</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {/* First row with two columns */}
        <div className="bg-blue-200 p-4 rounded-lg">
          <div className="bg-blue-100 p-4">Total</div>
          <div className="bg-blue-100 p-4 mt-4">0</div>
        </div>

        {/* Second row with the same content as the first row */}
        <div className="bg-yellow-200 p-4 rounded-lg">
          <div className="bg-yellow-100 p-4">Approved</div>
          <div className="bg-yellow-100 p-4 mt-4">0</div>
        </div>

        {/* Third row with two columns */}
        <div className="bg-green-200 p-4 rounded-lg">
          <div className="bg-green-100 p-4">Applied</div>
          <div className="bg-green-100 p-4 mt-4">0</div>
        </div>

       
      </div>
    </div>
                   {/* end of leave calender */}
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Annual Leave</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {/* First row with two columns */}
        <div className="bg-blue-200 p-4 rounded-lg">
          <div className="bg-blue-100 p-4">Eligibility:</div>
          <div className="bg-blue-100 p-4 mt-4">12.00</div>
        </div>

        {/* Second row with the same content as the first row */}
        <div className="bg-yellow-200 p-4 rounded-lg">
          <div className="bg-yellow-100 p-4">Taken:</div>
          <div className="bg-yellow-100 p-4 mt-4">0.00</div>
        </div>

        {/* Third row with two columns */}
        <div className="bg-green-200 p-4 rounded-lg">
          <div className="bg-green-100 p-4">Balance:</div>
          <div className="bg-green-100 p-4 mt-4">2.00</div>
        </div>

       
      </div>
    </div>

          {/* end of annual leave */}

    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sick Leave</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {/* First row with two columns */}
        <div className="bg-blue-200 p-4 rounded-lg">
          <div className="bg-blue-100 p-4">Eligibility:</div>
          <div className="bg-blue-100 p-4 mt-4">5.00</div>
        </div>

        {/* Second row with the same content as the first row */}
        <div className="bg-yellow-200 p-4 rounded-lg">
          <div className="bg-yellow-100 p-4">Taken:</div>
          <div className="bg-yellow-100 p-4 mt-4">0.00</div>
        </div>

        {/* Third row with two columns */}
        <div className="bg-green-200 p-4 rounded-lg">
          <div className="bg-green-100 p-4">Balance:</div>
          <div className="bg-green-100 p-4 mt-4">1.00</div>
        </div>  
      </div>
    </div>
              {/* end of sick leave */}

              <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Last Processed Salary</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {/* Your existing rows */}
        {/* ... */}
        
        {/* Row with a slider, text, and button */}
        <div className="md:col-span-1 xl:col-span-1 2xl:col-span-1 bg-purple-200 p-4 rounded-lg">
          <input type="range" min="1" max="100" className="w-3/4 mb-2" /> {/* Slider */}
          <p className="text-center mb-2">*****</p>
          <p className="text-start mb-2">Deduction:****</p> {/* Text line */}
          <a
            className="z-10 rounded-full bg-teal-700 px-4 py-1 text-slate-50 shadow-md transition-all duration-500 hover:scale-125 hover:bg-violet-500"
            href={"/PaySlip/PayForm"}
          >view pay Slip</a>
        </div>
      </div>
    </div>
    {/* end of last Processed Salary */}
    </>
  );
};

export default Details;
