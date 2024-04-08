import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddLeave from "@/components/EmployeeLeaveRequest/LeaveAdd";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const AddEmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <AddLeave />
        </DefaultLayout>
    );
  };
  
  export default AddEmployeesList;