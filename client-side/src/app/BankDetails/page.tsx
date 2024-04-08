import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import BankDetails from "@/components/BankDetails";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const AddEmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <BankDetails />
        </DefaultLayout>
    );
  };
  
  export default AddEmployeesList;