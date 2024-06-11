"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
//import { Employee } from "@/types/employee";
import { EmployeeLeaveRequest } from "@/types/employeeLeaveReq";
//import { LeaveRequest } from "@/types/leaveRequest";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import moment from 'moment';
import { request } from "http";

interface reqse{
  _id:string;
  employeeId: string;
  firstName: string;
  employeeRole:string;
  fromDate: string;
  toDate :string;
  reason:string;
  status:string;
  
}

const ConfirmationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (id: string) => void;
  message: string;
  id: string;

}> = ({ isOpen, onClose, onConfirm, message, id }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <p>{message}</p>
            <div className="flex justify-center mt-4">
              <button className="mr-2 px-4 py-2 bg-green-500 text-white rounded"  onClick={() => onConfirm(id)}>
                Yes
              </button>
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded" onClick={onClose}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const LeaveRequest = () => {
  const[req,setRequests]=useState<reqse[]>([]);
 // const [disabledButtons, setDisabledButtons] = useState<string[]>([]);
  const[rmes,setMessage]=useState('');
  const[error,seterror]=useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState('');
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const router=useRouter();
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get<reqse[]>('http://localhost:5000/api/leaverequests');
        setRequests(response.data);
        
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };
    fetchRequests();
  }, []);

  const handleApprove = async (id: string) => {
    setIsLoading(true);
    setDisabledButtons(id);
    try {
     
      // setDisabledButtons(id);
      // setShowApproveModal(true);
      
      // Simulating data fetching with setTimeout
      setTimeout(async () => {
        await axios.get(`http://localhost:5000/api/leaverequests/${id}?status=Approved`);
        setMessage('Request approved successfully');
        setIsLoading(false);
        seterror(true);
        location.reload(true);
        console.log("approved successfully");
      }, 2000); 
    
      //isLoading(true);
    } catch (error) {
      console.error('Error approving request:', error);
      setMessage('Error approving request');
    } finally {
       setIsLoading(true);
      //window.location.reload();
    }
  };

  const handleReject = async (id: string) => {
    setIsLoading(true);
    setDisabledButtons(id);
    try {
     
      setTimeout(async () => {
        await axios.get(`http://localhost:5000/api/leaverequests/${id}?status=Rejected`);
        setMessage('Request rejected successfully');
        setIsLoading(false);
        seterror(true);
        location.reload(true);
        console.log("Rejected successfully");
      }, 2000); 
     
    } catch (error) {
      console.error('Error rejecting request:', error);
      setMessage('Error rejecting request');
    } finally {
      setIsLoading(true);
      
    }

  };
  const handleConfirmApprove = async (id:string) => {
    // setIsLoading(true);
    // // Perform your approve logic here
    // setIsLoading(false);
    // setShowApproveModal(false);
    // location.reload(true);
    setShowApproveModal(false);
    handleApprove(id);
  };

  const handleConfirmReject = async (id:string) => {
    // setIsLoading(true);
    // // Perform your reject logic here
    // setIsLoading(false);
    // setShowRejectModal(false);
    // location.reload(true);
    setShowApproveModal(false);
    handleReject(id);
  };

  return (
    <>
      <Breadcrumb pageName="Leave Request" />
      
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                 ID
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                 Employee Name
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                  From Date
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  To Date
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Reason
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                  Status
                </th>
                <th className="px-4 py-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {req.map((employee) => (
                <tr key={employee._id}>
                  
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {employee.employeeId}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {employee.firstName}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {employee.employeeRole}
                    </h5>
                  </td>
                 
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {/* {employee.fromDate} */}
                      {/* {format(new Date(employee.fromDate.split('-').reverse().join('-')), 'dd-MM-yyyy')} */}
                      {moment(employee.fromDate, 'YYYY-MM-DD').format('DD-MM-YYYY')}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {/* {employee.toDate} */}
                      {/* {format(new Date(employee.toDate.split('-').reverse().join('-')), 'dd-MM-yyyy')} */}
                      {moment(employee.toDate, 'YYYY-MM-DD').format('DD-MM-YYYY')}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {employee.reason}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {employee.status}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                 
                   { (employee.status=='pending') ?(  
                    <div className="flex items-center space-x-3.5">
                        {/* <Link href={'/employees/edit-employees'}> */}
                    
                        {/* <button type='button'
                         className="hover:text-primary"  onClick={() => handleApprove(employee._id)}  disabled={disabledButtons == employee._id || isLoading}>
                        {isLoading ? (
                  "Processing..."
                ) :  (
                       <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                            <path
                              d="M16.5 9L11 14.5L7.5 11"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                        )} 
                         </button> */}
                        {/* </Link> */}
                      

                      {/* <button 
                      type='button'
                      className="hover:text-primary" onClick={() => handleReject(employee._id)}   disabled={disabledButtons==employee._id || isLoading}>
                      {isLoading ? (
                  "Processing..."
                ) :  (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="12" r="10" fill="#FF5252" />
                            <path
                              d="M7 7L17 17M17 7L7 17"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                      )}
                      </button> */}
                       <button
        type="button"
        className="hover:text-primary"
        onClick={() =>  setShowApproveModal(true)}
        disabled={disabledButtons === employee._id || isLoading}
      >
        {isLoading ? (
          'Processing...'
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#4CAF50" />
            <path d="M16.5 9L11 14.5L7.5 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <button
        type="button"
        className="hover:text-primary"
        onClick={() => setShowRejectModal(true)}
        disabled={disabledButtons === employee._id || isLoading}
      >
        {isLoading ? (
          'Processing...'
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#FF5252" />
            <path d="M7 7L17 17M17 7L7 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <ConfirmationModal
        isOpen={showApproveModal}
        onClose={() => setShowApproveModal(false)}
        onConfirm={handleConfirmApprove}
        message="Are you sure you want to approve?"
        id={employee._id}
      />

      <ConfirmationModal
        isOpen={showRejectModal}
        onClose={() => setShowRejectModal(false)}
        onConfirm={handleConfirmReject}
        message="Are you sure you want to reject?"
        id={employee._id}
      />
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
                ): (
                  <p className="none"> </p>
                )  }    
                      
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaveRequest;
