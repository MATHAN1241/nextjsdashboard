// "use client"
// import { useState } from "react";
// import Breadcrumb from "../Breadcrumbs/Breadcrumb";


// const Calendar = () => {
//   const [attendance, setAttendance] = useState<{ [key: string]: boolean }>({});

//   // Function to toggle attendance for a specific day
//   const toggleAttendance = (day: string) => {
//     setAttendance((prevAttendance) => {
//       const updatedAttendance = { ...prevAttendance };
//       updatedAttendance[day] = !updatedAttendance[day];
//       return updatedAttendance;
//     });
//   };

//   // Function to count present employees for a specific day
//   const countPresentEmployees = (day: string) => {
//     return attendance[day] ? 1 : 0;
//   };

//   // Function to count absent employees for a specific day
//   const countAbsentEmployees = (day: string) => {
//     return attendance[day] ? 0 : 1;
//   };

//   return (
//     <div className="mx-auto max-w-7xl">
//       <Breadcrumb pageName="Calendar" />

//       {/* <!-- ====== Calendar Section Start ====== --> */}
//       <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//         <table className="w-full">
//           <thead>
//             <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
//               <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Sunday </span>
//                 <span className="block lg:hidden"> Sun </span>
//               </th>
//               <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Monday </span>
//                 <span className="block lg:hidden"> Mon </span>
//               </th>
//               <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Tuesday </span>
//                 <span className="block lg:hidden"> Tue </span>
//               </th>
//               <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Wednesday </span>
//                 <span className="block lg:hidden"> Wed </span>
//               </th>
//               <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Thursday </span>
//                 <span className="block lg:hidden"> Thur </span>
//               </th>
//               <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Friday </span>
//                 <span className="block lg:hidden"> Fri </span>
//               </th>
//               <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
//                 <span className="hidden lg:block"> Saturday </span>
//                 <span className="block lg:hidden"> Sat </span>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* <!-- Line 1 --> */}
//             <tr className="grid grid-cols-7">
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   1
//                 </span>
//                 {/* <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
//                   <span className="group-hover:text-primary md:hidden">
//                     More
//                   </span>
//                   <div className="event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[190%] md:opacity-100">
//                     <span className="event-name text-sm font-semibold text-black dark:text-white">
//                       Redesign Website
//                     </span>
//                     <span className="time text-sm font-medium text-black dark:text-white">
//                       1 Dec - 2 Dec
//                     </span>
//                   </div>
//                 </div> */}
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   2
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   3
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   4
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   5
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   6
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   7
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 1 --> */}
//             {/* <!-- Line 2 --> */}
//             <tr className="grid grid-cols-7">
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   8
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   9
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   10
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   11
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   12
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   13
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   14
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 2 --> */}
//             {/* <!-- Line 3 --> */}
//             <tr className="grid grid-cols-7">
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   15
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   16
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   17
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   18
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   19
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   20
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   21
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 3 --> */}
//             {/* <!-- Line 4 --> */}
//             <tr className="grid grid-cols-7">
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   22
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   23
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   24
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   25
//                 </span>
//                 <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
//                   <span className="group-hover:text-primary md:hidden">
//                     More
//                   </span>
//                   <div className="event invisible absolute left-2 z-99 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[290%] md:opacity-100">
//                     <span className="event-name text-sm font-semibold text-black dark:text-white">
//                       App Design
//                     </span>
//                     <span className="time text-sm font-medium text-black dark:text-white">
//                       25 Dec - 27 Dec
//                     </span>
//                   </div>
//                 </div>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   26
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   27
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   28
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 4 --> */}
//             {/* <!-- Line 5 --> */}
//             <tr className="grid grid-cols-7">
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   29
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   30
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   31
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   1
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   2
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   3
//                 </span>
//               </td>
//               <td className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
//                 <span className="font-medium text-black dark:text-white">
//                   4
//                 </span>
//               </td>
//             </tr>
//             {/* <!-- Line 5 --> */}
//           </tbody>
//         </table>
//       </div>
//       {/* <!-- ====== Calendar Section End ====== --> */}
//     </div>
//   );
// };

// export default Calendar;
"use client";
import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  // Sample events data
  const [employeeData, setEmployeeData] = useState<any[]>([]);

  useEffect(() => {
    // Fetch employee data from your backend API or any other data source
    // Example API call
    const fetchEmployeeData = async () => {
      try {
        // Make API call to fetch employee data
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        // Set employee data
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchEmployeeData();
  }, []);

  // Function to calculate employee counts for present and absent days
  const calculateEmployeeCounts = () => {
    let presentCount = 0;
    let absentCount = 0;

    employeeData.forEach((employee: any) => {
      if (employee.present) {
        presentCount++;
      } else {
        absentCount++;
      }
    });

    return { presentCount, absentCount };
  };

  const { presentCount, absentCount } = calculateEmployeeCounts();
  return (
  <div>
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={employeeData.map((employee: any) => ({
          title: employee.present ? 'Present' : 'Absent',
          start: moment(employee.date).toDate(),
          end: moment(employee.date).toDate(),
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ maxWidth: '90%', margin: '0 auto' }}
      />
    </div>
     <div>
     <p>Employee Counts</p>
     <p>Present: {presentCount}</p>
     <p>Absent: {absentCount}</p>
     <p>Total: {employeeData.length}</p>
   </div>
 </div>
  );
};

export default CalendarComponent;
