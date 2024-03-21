import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddEmployees from "@/components/Employees/EmployeeAdd";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const AddEmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <AddEmployees />
        </DefaultLayout>
    );
  };
  
  export default AddEmployeesList;