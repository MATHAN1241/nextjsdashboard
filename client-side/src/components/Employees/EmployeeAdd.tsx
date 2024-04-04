"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import router from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";



const AddEmployees: React.FC =  () => {
  // const [formData, setFormData] = useState<FormData>({
  //   employeeId: '',
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   contactNo: '',
  //   employeeRole: '',
  //   employeeSalary: '',
  //   address: '',
  //   image: null
  // });

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setFormData({ ...formData, image: e.target.files[0] });
  //   }
  // };
  // const router = useRouter();
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const formDataWithImage = new FormData();
  //     Object.entries(formData).forEach(([key, value]) => {
  //       formDataWithImage.append(key, value);
  //     });
  //     console.log(formDataWithImage);
  //     const response = await axios.post('http://localhost:5000/api/employees', formDataWithImage);
  //     console.log(response.data);
  //     router.push('/employees')
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  // const [formData, setFormData] = useState({
  //   employeeId: '',
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   contactNo: '',
  //   employeeRole: '',
  //   employeeSalary: '',
  //   address: '',
  //   image: null as File | null // File type for storing image file
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]; // Get the first file from the input
  //   if(file){
  //   setFormData({ ...formData, image: file });
  //   }
  // };
  const [employeeId, setEmployeeId] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [contactNo, setContactNo] = useState('');
const [employeeRole, setEmployeeRole] = useState('');
const [employeeSalary, setEmployeeSalary] = useState('');
const [address, setAddress] = useState('');
const [imagePath, setImagePath] = useState<File | null>(null);
const [error, setError]=useState('');
const router=useRouter();
const handleEmailBlur = async (e: { target: { value: any; }; }) => {
  const email = e.target.value;
  try {
    const response = await axios.post('http://localhost:5000/api/employees/verify-email', { email });
    if (response.data.exists) {
      setError('*Email already exists');
    } else {
      setError('');
    }
  } catch (error) {
    console.error('Error verifying email:', error);
    setError('Error verifying email');
  }
};

const handleContactNoBlur = async (e: { target: { value: any; }; }) => {
  const contactNo = e.target.value;
  try {
    const response = await axios.post('http://localhost:5000/api/employees/verify-contactno', { contactNo });
    if (response.data.exists) {
      setError('*Contact number already exists');
    } else {
      setError('');
    }
  } catch (error) {
    console.error('Error verifying contact number:', error);
    setError('Error verifying contact number');
  }
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
   const formData={employeeId,firstName,lastName,email,contactNo,employeeRole,employeeSalary,address,imagePath};
   if (!employeeId || !firstName || !lastName || !email || !contactNo || !employeeRole || !employeeSalary || !address || !imagePath) {
    setError('*Please fill in all required fields');
  
  }
  else{
    setError('');
  }

   //  const formData = new FormData();
  //   formData.append('employeeId', employeeId);
  //   formData.append('firstName', firstName);
  //   formData.append('lastName', lastName);
  //   formData.append('email', email);
  //   formData.append('contactNo', contactNo);
  //   formData.append('employeeRole', employeeRole);
  //   formData.append('employeeSalary', employeeSalary);
  //   formData.append('address', address);
  //   if (imagePath) {
  //     formData.append('imagePath', imagePath);

  //   }

   try {
      // const formDataWithImage = new FormData();
      // Object.entries(formData).forEach(([key, value]) => {
      //   formDataWithImage.append(key, value as string | Blob); // Append each field to FormData
      // });
      console.log(formData);
      const response = await axios.post('http://localhost:5000/api/employees', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      router.push('/employees');
    } catch (error) {
      console.error('Error:', error);
      
    }
  };

  return (
    <>
      <Breadcrumb pageName="Add Employees" />
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Employee Add Form
            </h3>
          </div>
          
          <form action="#" onSubmit={handleSubmit} >
        
            <div className="p-6.5">
            {<p className="text-pink-500">{error}</p>}
              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Employee ID <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  name="employeeId"
                  value={employeeId}
                  onChange={(e)=>setEmployeeId(e.target.value)}
                  placeholder="Enter your Employee ID"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                />
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    First name <span className="text-meta-1">*</span>
                  </label>
                  <input
                   type="text"
                   name="firstName"
                   value={firstName}
                   onChange={(e)=>setFirstName(e.target.value)}
                 
                   placeholder="Enter your first name"
                   className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Last name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                  
                    onChange={(e)=>setLastName(e.target.value)}
                    placeholder="Enter your last name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    onBlur={handleEmailBlur}
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Contact No <span className="text-meta-1">*</span>
                  </label>
                  <input
                    // type="number"
                    type="tel" 
                    pattern="[0-9]{10}" 
                    
                    name="contactNo"
                    value={contactNo}
                    onChange={(e)=>setContactNo(e.target.value)}
                  onBlur={handleContactNoBlur}
                    placeholder="Enter your contact number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Employee Role <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="employeeRole"
                    value={employeeRole}
                    onChange={(e)=>setEmployeeRole(e.target.value)}
                    placeholder="Enter your employee role"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Employee Salary <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="employeeSalary"
                    value={employeeSalary}
                    onChange={(e)=>setEmployeeSalary(e.target.value)}
                    placeholder="Enter your employee salary"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                  />
                </div>
              </div>
              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Add Image <span className="text-meta-1">*</span>
                </label>
                <input
                  type="file"
                  name='image'
                  // value={imagePath}
                  // onChange={(e) => setImagePath(e.target.value)}
                  onChange={(e) => setImagePath(e.target.files ? e.target.files[0] : null)}
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                />
              </div>

              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Address <span className="text-meta-1">*</span>
                </label>
                <input
                  // rows={6}
                  
                  name="address"
                  value={address}
                  onChange={(e)=>setAddress(e.target.value)}
                  placeholder="Enter your complete address"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary focus-visible:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] transition-shadow duration-1000"
                />
              </div>

              <button
                // href="/employees"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] px-10 py-4 text-center font-medium text-white duration-300 hover:scale-105 hover:bg-opacity-90 hover:from-[#047857] hover:to-[#14b8a6] hover:shadow-xl hover:shadow-green-500 lg:px-8 xl:px-10"
                  >
                <span>
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_182_46495)">
                      <path
                        d="M18.875 11.4375C18.3125 10.8438 17.5625 10.5312 16.75 10.5312C16.125 10.5312 15.5625 10.7188 15.0625 11.0938C15 11.125 14.9688 11.1562 14.9062 11.2188C14.8438 11.1875 14.8125 11.125 14.75 11.0938C14.25 10.7188 13.6875 10.5312 13.0625 10.5312C12.9062 10.5312 12.7812 10.5312 12.6562 10.5625C11.7188 9.5 10.5625 8.75 9.3125 8.40625C10.625 7.75 11.5312 6.40625 11.5312 4.875C11.5312 2.6875 9.75 0.9375 7.59375 0.9375C5.40625 0.9375 3.65625 2.71875 3.65625 4.875C3.65625 6.4375 4.5625 7.78125 5.875 8.40625C4.5625 8.78125 3.40625 9.53125 2.4375 10.6562C1.125 12.2188 0.375 14.4062 0.3125 16.7812C0.3125 17.0312 0.4375 17.25 0.65625 17.3438C1.5 17.75 4.4375 19.0938 7.59375 19.0938C9.28125 19.0938 10.8438 18.8125 10.9062 18.8125C11.25 18.75 11.4688 18.4375 11.4062 18.0938C11.3438 17.75 11.0312 17.5312 10.6875 17.5938C10.6875 17.5938 9.15625 17.875 7.59375 17.875C5.0625 17.8438 2.65625 16.875 1.5625 16.375C1.65625 14.4375 2.3125 12.7187 3.375 11.4375C4.46875 10.125 5.96875 9.40625 7.59375 9.40625C9.03125 9.40625 10.375 10 11.4375 11.0312C11.2812 11.1562 11.125 11.2812 11 11.4062C10.4688 11.9688 10.1875 12.75 10.1875 13.5938C10.1875 14.4375 10.5 15.2188 11.1562 16C11.6875 16.6562 12.4375 17.2812 13.2812 18L13.3125 18.0312C13.5937 18.25 13.9062 18.5312 14.2188 18.8125C14.4062 19 14.6875 19.0938 14.9375 19.0938C15.1875 19.0938 15.4687 19 15.6562 18.8125C16 18.5312 16.3125 18.25 16.5938 18C17.4375 17.2812 18.1875 16.6562 18.7188 16C19.375 15.2188 19.6875 14.4375 19.6875 13.5938C19.6875 12.7812 19.4062 12.0312 18.875 11.4375ZM4.875 4.875C4.875 3.375 6.09375 2.1875 7.5625 2.1875C9.0625 2.1875 10.25 3.40625 10.25 4.875C10.25 6.375 9.03125 7.5625 7.5625 7.5625C6.09375 7.5625 4.875 6.34375 4.875 4.875ZM17.75 15.2188C17.2812 15.7812 16.5938 16.375 15.7812 17.0625C15.5312 17.2812 15.2188 17.5312 14.9062 17.7812C14.625 17.5312 14.3438 17.2812 14.0938 17.0938L14.0625 17.0625C13.25 16.375 12.5625 15.7812 12.0938 15.2188C11.625 14.6562 11.4062 14.1562 11.4062 13.625C11.4062 13.0937 11.5938 12.625 11.9062 12.2812C12.2188 11.9375 12.6563 11.75 13.0938 11.75C13.4375 11.75 13.75 11.8438 14 12.0625C14.125 12.1562 14.2188 12.25 14.3125 12.375C14.5938 12.7188 15.1875 12.7188 15.5 12.375C15.5938 12.25 15.7187 12.1562 15.8125 12.0625C16.0937 11.8438 16.4062 11.75 16.7188 11.75C17.1875 11.75 17.5938 11.9375 17.9062 12.2812C18.2188 12.625 18.4062 13.0937 18.4062 13.625C18.4375 14.1875 18.2188 14.6562 17.75 15.2188Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_182_46495">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Add New Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEmployees;
