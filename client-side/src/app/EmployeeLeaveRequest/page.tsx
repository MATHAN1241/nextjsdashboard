import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import EmployeeLeaveRequestComponent from "@/components/EmployeeLeaveRequest";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const EmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <EmployeeLeaveRequestComponent />
        </DefaultLayout>
    );
  };
  
  export default EmployeesList;