"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Employee } from "@/types/employee";
// import { Employee } from "@/types/employee";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// const employeeData: Employee[] = [
//   {
//     DP: "/images/user/user-01.png",
//     employeeID: "E001",
//     employeeName: "John Doe",
//     contactNo: "+1234567890",
//     role: "Manager",
//     salary: 50000,
//   },
//   {
//     DP: "/images/user/user-02.png",
//     employeeID: "E002",
//     employeeName: "Jane Smith",
//     contactNo: "+9876543210",
//     role: "Developer",
//     salary: 40000,
//   },
//   // Add more employee objects as needed
// ];

const Employees = () => {
  const[showModal,setShowModal]=useState(false);
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get<Employee[]>('http://localhost:5000/api/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);
  const router=useRouter();
  const handleEdit = async (employee:Employee) => {
    try {
      // Make a PUT request to update the employee record
      const response = await axios.get(`http://localhost:5000/api/employees/${employee._id}`);
        // Pass updated employee data here (e.g., firstName, lastName, role, etc.)
        // Assuming you have a form to gather updated data, you can use that here
        // For simplicity, let's say we want to update the role only
        console.log(response.data);
        router.push(`/employees/edit-employees?_id=${employee._id}`);
        //_id=${employee._id} 
        //router.push(`attendance/attendancedetailview?_id=${employee._id}`);
      
       
      // Handle successful response (optional)
     // console.log('Employee updated:', response.data);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };
  const handleDelete = async (_id:string) => {
    try {
      // Make a DELETE request to delete the employee record
      await axios.delete(`http://localhost:5000/api/employees/${_id}`);
     
      // Handle successful deletion (optional)
      console.log('Employee deleted sucess');
      router.push(`/employees`);
      //setShowModal(false);
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  return (
    <>
      <Breadcrumb pageName="Employees" />
      <Link href={"/employees/add-employees"}>
        <button className="group relative mb-5 flex h-10 w-70 cursor-pointer items-center rounded-lg border border-violet-500 bg-violet-500 hover:bg-violet-500 active:border-violet-500 active:bg-violet-500">
          <span className="ml-8 transform font-semibold text-black transition-all duration-300 group-hover:translate-x-20 dark:text-white">
            Add Employee
          </span>
          <span className="absolute right-0 flex h-full w-10 transform items-center justify-center rounded-lg bg-violet-500  transition-all duration-300 group-hover:w-full group-hover:translate-x-0">
            <svg
              className="svg w-8 text-black group-hover:text-orange-500 dark:text-white"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="12" x2="12" y1="5" y2="19"></line>
              <line x1="5" x2="19" y1="12" y2="12"></line>
            </svg>
          </span>
        </button>
      </Link>

      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                  DP
                </th>
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
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <div className="h-12.5 w-15 rounded-md">
                    {employee.imagePath &&  <Image
                         //src={''}
                        // src={employee.imagePath}
                       // loader={ {src: `http://localhost:5000/${employee.imagePath}`,} }
                          src={`http://localhost:5000/${employee.imagePath}`}
                        //src={`http://localhost:5000/public/images/25.jpg`}
                        //src="http://localhost:5000/public/images/25.jpg"
                         //src={`public/images/${employee.imagePath}`}
                        width={60}
                        height={50}
                        alt="http://ocalhost:5000/public/images/25.jpg"
                      />}
                    </div>
                  </td>
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
                    <div className="flex items-center space-x-3.5">
                     {/* <Link href={'/employees/edit-employees'} > */}
                        <button className="hover:text-primary"  onClick={() => handleEdit(employee)}  >
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
                        {/* </Link> */}
                      

                      <button className="hover:text-primary"   onClick={() => setShowModal(true)}>
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
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-4">Are you sure you want to delete?</p>
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
              onClick={() => handleDelete(employee._id)}  
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    {/* </div> */}                      
                      {/* end of delete button */}


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
                    {/* </div> */}
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
    </>
  );
};

export default Employees;
