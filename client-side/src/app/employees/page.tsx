import { Metadata } from "next";
import Employees from "@/components/Employees";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const EmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <Employees />
        </DefaultLayout>
    );
  };
  
  export default EmployeesList;