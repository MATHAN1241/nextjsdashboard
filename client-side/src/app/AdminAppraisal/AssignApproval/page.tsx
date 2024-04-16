import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MyComponentView from "@/components/Appraisal/AppraisalView";
import Adminappraisal from "@/components/AdminAppraisalview/Assign Approval";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const AddEmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <Adminappraisal/>
        </DefaultLayout>
    );
  };
  
  export default AddEmployeesList;