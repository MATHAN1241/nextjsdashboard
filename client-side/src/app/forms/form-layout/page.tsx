// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

// import { Metadata } from "next";
// import DefaultLayout from "@/components/Layouts/DefaultLayout";
// import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

// const FormLayout = () => {
//   return (
//     <DefaultLayout>
//       <Breadcrumb pageName="FormLayout" />

//       <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
//         <div className="flex flex-col gap-9">
//           {/* <!-- Contact Form --> */}
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Contact Form
//               </h3>
//             </div>
//             <form action="#">
//               <div className="p-6.5">
//                 <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                   <div className="w-full xl:w-1/2">
//                     <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                       First name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter your first name"
//                       className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                     />
//                   </div>

//                   <div className="w-full xl:w-1/2">
//                     <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                       Last name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter your last name"
//                       className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                     />
//                   </div>
//                 </div>

//                 <div className="mb-4.5">
//                   <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                     Email <span className="text-meta-1">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <div className="mb-4.5">
//                   <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Select subject"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <SelectGroupOne />

//                 <div className="mb-6">
//                   <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                     Message
//                   </label>
//                   <textarea
//                     rows={6}
//                     placeholder="Type your message"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   ></textarea>
//                 </div>

//                 <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         <div className="flex flex-col gap-9">
//           {/* <!-- Sign In Form --> */}
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Sign In Form
//               </h3>
//             </div>
//             <form action="#">
//               <div className="p-6.5">
//                 <div className="mb-4.5">
//                   <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="Enter password"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <div className="mb-5.5 mt-5 flex items-center justify-between">
//                   <label htmlFor="formCheckbox" className="flex cursor-pointer">
//                     <div className="relative pt-0.5">
//                       <input
//                         type="checkbox"
//                         id="formCheckbox"
//                         className="taskCheckbox sr-only"
//                       />
//                       <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
//                         <span className="text-white opacity-0">
//                           <svg
//                             className="fill-current"
//                             width="10"
//                             height="7"
//                             viewBox="0 0 10 7"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
//                               fill=""
//                             />
//                           </svg>
//                         </span>
//                       </div>
//                     </div>
//                     <p>Remember me</p>
//                   </label>

//                   <Link
//                     href="#"
//                     className="text-sm text-primary hover:underline"
//                   >
//                     Forget password?
//                   </Link>
//                 </div>

//                 <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
//                   Sign In
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* <!-- Sign Up Form --> */}
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Sign Up Form
//               </h3>
//             </div>
//             <form action="#">
//               <div className="p-6.5">
//                 <div className="mb-4.5">
//                   <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter your full name"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <div className="mb-4.5">
//                   <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <div className="mb-4.5">
//                   <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="Enter password"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <div className="mb-5.5">
//                   <label className="mb-3 block text-sm font-medium text-black dark:text-white">
//                     Re-type Password
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="Re-enter password"
//                     className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                   />
//                 </div>

//                 <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
//                   Sign Up
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </DefaultLayout>
//   );
// };

// export default FormLayout;
"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Employees from '@/components/Employees';
import jsPDF from 'jspdf';
interface Employee {
  _id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email:string;
  contactNo: string;
  employeeRole: string;
  employeeSalary: string;
  imagePath: string;
}
const FormLayout = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
      //  const response = await axios.get('/api/employees'); // Replace with your backend endpoint
      const response = await axios.get<Employee[]>('http://localhost:5000/api/employees'); 
      setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const generatePDF = (employee: Employee) => {
    // Logic to generate PDF payslip for the employee with given employeeId
    const doc = new jsPDF();
    doc.text(`Employee ID: ${employee.employeeId}`, 10, 10);
    doc.text(`Name: ${employee.firstName}`, 10, 20);
    doc.text(`Role: ${employee.employeeRole}`, 10, 30);
    doc.text(`Role: ${employee.employeeSalary}`, 10, 30);
    // Add more employee information as needed
    doc.save(`Payslip_${employee.employeeId}.pdf`);
  };

  function Viewpdf(_id: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    // <div className="container mx-auto">
    //   <h1 className="text-3xl font-bold mb-4">Employee Information</h1>
    //   <div className="bg-white shadow-md rounded my-6">
    //     <table className="min-w-full">
    //       <thead>
    //         <tr className="bg-gray-full">
    //           <th className="py-2 px-4">Employee ID</th>
    //           <th className="py-2 px-4">Name</th>
    //           <th className="py-2 px-4">Role</th>
    //           <th className="py-2 px-4">Image</th>
    //           <th className="py-2 px-4">Total Present</th>
    //           <th className="py-2 px-4">Total Absent</th>
    //           <th className="py-2 px-4">Total Days</th>
    //           <th className="py-2 px-4">Monthly Wage</th>
    //           <th className="py-2 px-4">Pay Amount</th>
    //           <th className="py-2 px-4">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {/* {employees.map((employee) => (
    //           <tr key={employee.id}>
    //             <td className="py-2 px-4">{employee.employeeId}</td>
    //             <td className="py-2 px-4">{employee.name}</td>
    //             <td className="py-2 px-4">{employee.role}</td>
    //             <td className="py-2 px-4"><img src={employee.image} alt={employee.name} className="h-10 w-10 rounded-full" /></td>
    //             <td className="py-2 px-4">{employee.totalPresent}</td>
    //             <td className="py-2 px-4">{employee.totalAbsent}</td>
    //             <td className="py-2 px-4">{employee.totalDays}</td>
    //             <td className="py-2 px-4">{employee.monthlyWage}</td>
    //             <td className="py-2 px-4">{employee.payAmount}</td>
    //             <td className="py-2 px-4">
    //               <button onClick={() => generatePDF(employee.employeeId)} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">Generate PDF Payslip</button>
    //             </td>
    //           </tr> 
    //           <tr>
    //             <
    //           </tr>
    //         ))}*/}
    //         {employees.map((employee,key) => (
    //         <tr key={key}>
            
    //           <td className="py-2 px-4">{employee.firstName}</td>
    //           <td className="py-2 px-4">{employee.employeeId}</td>
    //           <td className="py-2 px-4">{employee.employeeRole}</td>
    //           <td className="py-2 px-4">{employee.imagePath}</td>
    //           <td className="py-2 px-4">Mathan</td>
    //           <td className="py-2 px-4">Mathan</td>
          
    //         </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="container mx-auto">
  <h1 className="text-3xl font-bold mb-4">Employee Information</h1>
  {/* <div className="bg-white shadow-md rounded my-6">
    <table className="max-w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-3 px-6 text-left">Employee ID</th>
          <th className="py-3 px-6 text-left">Name</th>
          <th className="py-3 px-6 text-left">Role</th>
          <th className="py-3 px-6 text-left">Image</th>
          <th className="py-3 px-6 text-left">Total Present</th>
          <th className="py-3 px-6 text-left">Total Absent</th>
          <th className="py-3 px-6 text-left">Total Days</th>
          <th className="py-3 px-6 text-left">Monthly Wage</th>
          <th className="py-3 px-6 text-left">Pay Amount</th>
          <th className="py-3 px-6 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index} >
            <td className="py-4 px-6">{employee.employeeId}</td>
            <td className="py-4 px-6">{employee.firstName}</td>
            <td className="py-4 px-6">{employee.employeeRole}</td>
            <td className="py-4 px-6">{employee.employeeSalary}</td>
            <td className="py-4 px-6">Mathan</td>
            <td className="py-4 px-6">Mathan</td>
            <td className="py-4 px-6">Mathan</td>
            <td className="py-4 px-6">Mathan</td>
            <td className="py-4 px-6">Mathan</td>
            <td className="py-4 px-6">
              <button onClick={() => generatePDF(employee)} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">Generate PDF Payslip</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> */}
  <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full ">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
               
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Employee ID
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Employee First Name
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Employee Last Name
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  Email
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Contact No
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Role
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Salary
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Month
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  present Days
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Absent Days
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Hike
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Total Hours
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, key) => (
                <tr key={key}>
                  
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {employee.employeeId}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div>
                      <p className="text-black dark:text-white">{employee.firstName}</p>
                    </div>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div>
                      <p className="text-black dark:text-white">{employee.lastName}</p>
                    </div>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {employee.email}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {employee.contactNo}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {employee.employeeRole}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      ${employee.employeeSalary}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      ${employee.employeeSalary}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      ${employee.employeeSalary}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      ${employee.employeeSalary}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      ${employee.employeeSalary}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      ${employee.employeeSalary}
                    </p>
                  </td>
                  
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                     {/* <Link href={'/employees/edit-employees'} > */}
                        <button className="hover:text-primary"  onClick={() => generatePDF(employee)}  >
                        {/* <Link href={'/employees/edit-employees'} > */}
                        {/* <Link href={`/employees/edit-employees?_id=${employee._id}`}> */}
                        {/* <Link href={`/employees/edit-employees/${employee._id}`}> */}
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.9229 1.11914L16.8804 4.07665C17.0366 4.23289 17.0366 4.48914 16.8804 4.64539L15.2399 6.28589L11.7138 2.75977L13.3543 1.11914C13.5106 0.962891 13.7668 0.962891 13.9229 1.11914ZM10.1479 4.89414L14.5893 9.33552L9.45039 14.4744H5.00808V10.0321L10.1479 4.89414Z"
                            fill=""
                          />
                        </svg>    
                        {/* </Link>      */}
                      </button>
                      {/* </Link>    */}
                      
                      <button className="hover:text-primary" onClick={()=>Viewpdf(employee._id)}>
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                            fill=""
                          />
                          <path
                            d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                            fill=""
                          />
                          <path
                            d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                            fill=""
                          />
                          <path
                            d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                            fill=""
                          />
                        </svg>
                      </button>
                     
                      {/* DOWNLOAD  BUTTON */}
                      {/* <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                          fill=""
                        />
                        <path
                          d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                          fill=""
                        />
                      </svg>
                    </button> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* {selectedEmployee && (
        <EmployeeEdit employee={selectedEmployee} onUpdate={handleUpdateEmployee} />
      )} */}
        </div>
      </div>
</div>

  );
};

export default FormLayout;
