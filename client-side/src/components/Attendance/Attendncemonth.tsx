"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { Employee } from '@/types/employee';
import axios from 'axios';
const months = {
  'January': '01',
  'February': '02',
  'March': '03',
  'April': '04',
  'May': '05',
  'June': '06',
  'July': '07',
  'August': '08',
  'September': '09',
  'October': '10',
  'November': '11',
  'December': '12'
};
const Attendancemonth = () => {
  const queryString = window.location.search;

  // Parse the query string to get the URLSearchParams object
  const params = new URLSearchParams(queryString);
  const [id, setId] = useState(''); 
  const [employeeData, setEmployeeData] = useState<Employee | null>(null);
  const [monthsYears, setMonthsYears] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Fetch data from API endpoint
    const _id = new URLSearchParams( window.location.search).get('_id');
    setId(_id??"");
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/attendance/clock/months-years/${_id}`);
        setMonthsYears(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (

<>
<Breadcrumb pageName='Attendnance-Months'/>

{monthsYears.length > 0 ?  (
<div className="row">
  <div className="flex flex-cols-2 gap-8">
    {monthsYears.length > 0 ? (monthsYears.map((item, index) => (
            <div key={index} className="group relative flex h-70 w-80 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl from-sky-200 via-orange-200 to-orange-700 text-center shadow-xl before:absolute before:top-0 before:h-70 before:w-80 before:rounded-t-2xl before:bg-gradient-to-bl before:transition-all before:duration-500 before:content-[''] dark:bg-boxdark">
              <div className="z-10 transition-all duration-500">
                <span className="text-2xl font-semibold dark:text-white">
                  {item.month} {item.year} Attendance
                </span>
                <p className="dark:text-white-50 italic">Employee</p>
              </div>
              <Link
                className="z-10 rounded-full bg-purple-700 px-4 py-1 text-slate-50 shadow-md transition-all duration-500 hover:scale-125 hover:bg-orange-500"
                href={`/attendance/attendancedetailview?_id=${id}&month=${months[item.month]}&year=${item.year}`}
              >
                View Attendance
              </Link>
            </div>
          ))) : (
                <div className='flex flex-col gap-8'>
                  <span className="text-2xl font-semibold dark:text-red">No Records Found</span>
                </div>   
          )}
        
  </div>
</div>
  ):(
    <div className='flex flex-col gap-8'>
      <span className="text-2xl font-semibold dark:text-white">No Records Found</span>
    </div>   
)}




  


</>



  



          
        
    
  );
}

export default Attendancemonth;
