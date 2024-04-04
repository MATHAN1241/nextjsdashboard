import React from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const AttendanceList = () => {
  return (
    <React.Fragment>
      <Breadcrumb pageName="Employees List" />
      <div className="grid grid-cols-3 gap-3">
        <div className="group relative flex h-72 w-80 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-slate-50 from-sky-200 via-orange-200 to-orange-700 text-center shadow-xl before:absolute before:top-0 before:h-24 before:w-80 before:rounded-t-2xl before:bg-gradient-to-bl before:transition-all before:duration-500 before:content-[''] before:hover:h-44 before:hover:h-72 before:hover:w-80 before:hover:scale-95 before:hover:rounded-b-2xl dark:bg-boxdark">
          <div className="z-10 mt-8 h-28 w-28 rounded-full border-4 border-slate-50 transition-all duration-500  group-hover:-translate-x-24 group-hover:-translate-y-20 group-hover:scale-150">
            <Image
              src={"/images/user/user-03.png"}
              width={130}
              height={80}
              alt="User Image"
            />
          </div>
          <div className="z-10  transition-all duration-500 group-hover:-translate-y-10">
            <span className="text-2xl font-semibold dark:text-white">
              George Johnson
            </span>
            <p className="dark:text-white-50 italic">Web Developer</p>
          </div>
          <Link 
          
            className="z-10 rounded-full bg-orange-700 px-4 py-1 text-slate-50 shadow-md transition-all duration-500 hover:scale-125 hover:bg-violet-500"
               href={'attendance/attendancedetailview'}>
  
            View Profile
          
          </Link>
        </div>

        <div className="group relative flex h-72 w-80 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-slate-50 from-sky-200 via-orange-200 to-orange-700 text-center shadow-xl before:absolute before:top-0 before:h-24 before:w-80 before:rounded-t-2xl before:bg-gradient-to-bl before:transition-all before:duration-500 before:content-[''] before:hover:h-44 before:hover:h-72 before:hover:w-80 before:hover:scale-95 before:hover:rounded-b-2xl dark:bg-boxdark">
          <div className="z-10 mt-8 h-28 w-28 rounded-full border-4 border-slate-50  transition-all duration-500  group-hover:-translate-x-24 group-hover:-translate-y-20 group-hover:scale-150">
            <Image
              src={"/images/user/user-04.png"}
              width={130}
              height={80}
              alt="User Image"
            />
          </div>
          <div className="z-10  transition-all duration-500 group-hover:-translate-y-10">
            <span className="text-2xl font-semibold dark:text-white">
              Monika Ramsy
            </span>
            <p className="dark:text-white-50 italic">Telemarketing Executive</p>
          </div>
          <a
            className="z-10 rounded-full bg-orange-700 px-4 py-1 text-slate-50 shadow-md transition-all duration-500 hover:scale-125 hover:bg-violet-500"
            href={'attendance/attendancedetailviewtwo'}>
          
            View Profile
          </a>
        </div>
        <div className="group relative flex h-72 w-80 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-slate-50 from-sky-200 via-orange-200 to-orange-700 text-center shadow-xl before:absolute before:top-0 before:h-24 before:w-80 before:rounded-t-2xl before:bg-gradient-to-bl before:transition-all before:duration-500 before:content-[''] before:hover:h-44 before:hover:h-72 before:hover:w-80 before:hover:scale-95 before:hover:rounded-b-2xl dark:bg-boxdark">
          <div className="z-10 mt-8 h-28 w-28 rounded-full border-4 border-slate-50  transition-all duration-500  group-hover:-translate-x-24 group-hover:-translate-y-20 group-hover:scale-150">
            <Image
              src={"/images/user/user-05.png"}
              width={130}
              height={80}
              alt="User Image"
            />
          </div>
          <div className="z-10 transition-all duration-500 group-hover:-translate-y-10">
            <span className="text-2xl font-semibold dark:text-white">
              Peter Parker
            </span>
            <p className="dark:text-white-50 italic">Team Lead</p>
          </div>
          <a
            className="z-10 rounded-full bg-orange-700 px-4 py-1 text-slate-50 shadow-md transition-all duration-500 hover:scale-125 hover:bg-violet-500"
            href={'attendance/attendancedetailviewthree'}>
          
            View Profile
          </a>
        </div>
        <div className="group relative flex h-72 w-80 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-slate-50 from-sky-200 via-orange-300 to-orange-700 text-center shadow-xl before:absolute before:top-0 before:h-24 before:w-80 before:rounded-t-2xl before:bg-gradient-to-bl before:transition-all before:duration-500 before:content-[''] before:hover:h-44 before:hover:h-72 before:hover:w-80 before:hover:scale-95 before:hover:rounded-b-2xl dark:bg-boxdark">
          <div className="z-10 mt-8 h-28 w-28 rounded-full border-4 border-slate-50 transition-all duration-500  group-hover:-translate-x-24 group-hover:-translate-y-20 group-hover:scale-150">
            <Image
              src={"/images/user/user-07.png"}
              width={130}
              height={80}
              alt="User Image"
            />
          </div>
          <div className="z-10 transition-all duration-500 group-hover:-translate-y-10">
            <span className="text-2xl font-semibold dark:text-white">
              Kimi Roussel
            </span>
            <p className="dark:text-white-50 italic">Tech Support</p>
          </div>
          <a
            className="z-10 rounded-full bg-orange-700 px-4 py-1 text-slate-50 shadow-md transition-all duration-500 hover:scale-125 hover:bg-violet-500"
            href={'attendance/attendancedetailviewfour'}>
          
            View Profile
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AttendanceList;
