import { Metadata } from "next";
import  LeaveRequest from "@/components/LeaveRequest" ;
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const EmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <LeaveRequest />
        </DefaultLayout>
    );
  };
  
  export default EmployeesList;