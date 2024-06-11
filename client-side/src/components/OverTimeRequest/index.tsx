"use client"
import React from 'react'
import Breadcrumb from '../Breadcrumbs/Breadcrumb'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
interface ClockOutRequest {
  _id: string;
  employeeId: string;
  clockInDate: string;
  clockInTime: string;
  requestedClockOutDate: string;
  requestedClockOutTime: string;
  remarks: string;
  requestedOvertime: string;
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

const OverTimeRequest = () => {

  //const [disabledButtons, setDisabledButtons] = useState<string[]>([]);
  const[rmes,setMessage]=useState('');
  const[eror,seterror]=useState(false);
 // const [isLoading, setIsLoading] = useState(false);
 // const [processing, setProcessing] = useState(false);
  const [requests, setRequests] = useState<ClockOutRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState('');
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [processing, setProcessing] = useState<boolean>(false);
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get<ClockOutRequest[]>('http://localhost:5000/api/attendance/clockout/requests');
        setRequests(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching clock-out requests');
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);
  const formatDate = (dateString: string) => {
    return moment(dateString, 'MM/DD/YYYY').format('DD-MM-YYYY');
  };

  const handleAccept = (id: number) => {
    // Implement accept action here
    console.log(`Accept request for employee with ID ${id}`);
  };

  const handleDeny = (id: number) => {
    // Implement deny action here
    console.log(`Deny request for employee with ID ${id}`);
  };
  
  const handleApprove = async (id: string) => {
    // if (confirm('Are you sure you want to approve this clock-out request?')) {
    setIsLoading(true);
    setDisabledButtons(id);
    try {
      
      // setIsLoading(true);
      // // Simulating data fetching with setTimeout
      // setTimeout(() => {
      //   // Your data fetching logic here
      //   setIsLoading(false);
      // }, 2000); 
      // await axios.get(`http://localhost:5000/api/leaverequests/${id}?status=Approved`);
      // setMessage('Request approved successfully');
   
      // seterror(true);
      // console.log("approved succeessfully");
      // setIsLoading(true);
      
      // Disable the button for the current request
      // setDisabledButtons(prevState => ({ ...prevState, [id]: true }));
     // setDisabledButtons([id]);
      // Simulating data fetching with setTimeout
      setTimeout(async () => {
        await axios.get(`http://localhost:5000/api/attendance/clockout/requests/${id}/process?action=accept`);
        setMessage('Request approved SuccessFully');
        setIsLoading(false);

        seterror(true);
        location.reload(true);
        console.log("approved successfully");
      }, 2000); 
      // location.reload(true);
    } catch (error) {
      console.error('Error approving request:', error);
      setMessage('Error approving request');
    }finally {
      setIsLoading(true);
    }
  //}
  };

  const handleReject = async (id: string) => {
    setIsLoading(true);
    setDisabledButtons(id);
    try {
      // setIsLoading({ ...isLoading, [id]: true });
      // // Simulating data fetching with setTimeout
  
      // await axios.get(`http://localhost:5000/api/leaverequests/${id}?status=Rejected`);
      // setMessage('Request rejected successfully');
     
      // seterror(true);
      // console.log("Rejected succeessfully");
      // setIsLoading(true);
   
      // Disable the button for the current request
      // setDisabledButtons(prevState => ({ ...prevState, [id]: true }));
      // setDisabledButtons([id]);
      // Simulating data fetching with setTimeout
      setTimeout(async () => {
        await axios.get(`http://localhost:5000/api/attendance/clockout/requests/${id}/process?action=reject}`);
        setMessage('Request rejected successfully');
        setIsLoading(false);
        seterror(true);
        location.reload(true);
        console.log("Rejected successfully");
      }, 2000); 
      // location.reload(true);
    } catch (error) {
      console.error('Error rejecting request:', error);
      setMessage('Error rejecting request');
    }finally {
      setIsLoading(true);
      
    }
  };
  const handleConfirmApprove = (id: string) => {
    setShowApproveModal(false);
    handleApprove(id);
  };

  const handleConfirmReject = (id:string) => {
    setShowRejectModal(false);
    handleReject(id);
  };


  return (
    
    <div className="overflow-x-auto w-full">
      <Breadcrumb pageName="Over Time Request" />
      
      <table className="min-w-full bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Employee ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
               Clock In Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
               Clock In Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Request Clock Out Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Request Clock Out Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Remarks
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Request OverTime
            </th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Status
            </th> */}
            <th className="px-6 py-3"> Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
        {requests.map(request => (
            <tr key={request._id}>
              <td className="px-6 py-4 whitespace-nowrap">{request.employeeId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatDate(request.clockInDate)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{request.clockInTime}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatDate(request.requestedClockOutDate)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{request.requestedClockOutTime}</td>
              <td className="px-6 py-4 whitespace-nowrap">{request.remarks}</td>
              <td className="px-6 py-4 whitespace-nowrap">{request.requestedOvertime}</td>
              <td className="px-6 py-4 whitespace-nowrap">{request.status}</td>
              {/* <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  employee.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  employee.status === 'Approved' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                } dark:bg-opacity-25 dark:bg-opacity-25 dark:text-opacity-75`}>
                  {employee.status}
                </span>
              </td> */}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                {/* <button
                  onClick={() => handleAccept(employee.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDeny(employee.id)}
                  className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Deny
                </button>
              */}
               { (request.status=='Pending') ?(  
                    <div className="flex items-center space-x-3.5">
                        {/* <Link href={'/employees/edit-employees'}> */}
                    
                        <button type='button'
                         className="hover:text-primary"  onClick={() => setShowApproveModal(true)}  disabled={disabledButtons == request._id || isLoading}>
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
                         </button>
                        {/* </Link> */}
                      

                      <button 
                      type='button'
                      className="hover:text-primary" onClick={() =>setShowRejectModal(true)}   disabled={disabledButtons == request._id || isLoading}>
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
                      </button>
                      <ConfirmationModal
        isOpen={showApproveModal}
        onClose={() => setShowApproveModal(false)}
        onConfirm={handleConfirmApprove}
        message="Are you sure you want to approve?"
        id={request._id}
      />

      <ConfirmationModal
        isOpen={showRejectModal}
        onClose={() => setShowRejectModal(false)}
        onConfirm={handleConfirmReject}
        message="Are you sure you want to reject?"
        id={request._id}
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
  );
};

export default OverTimeRequest;