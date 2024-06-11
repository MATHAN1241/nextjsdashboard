import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MyApprovalAppraisalForm from "@/components/Appraisal/AppraisalRequest";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const AddEmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <MyApprovalAppraisalForm />
        </DefaultLayout>
    );
  };
  
  export default AddEmployeesList;