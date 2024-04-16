import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import EditEmployees from "@/components/Employees/EmployeeEdit";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const EditEmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <EditEmployees />
        
        </DefaultLayout>
    );
  };
  
  export default EditEmployeesList;