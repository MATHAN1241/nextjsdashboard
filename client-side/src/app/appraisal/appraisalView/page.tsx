import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MyComponentView from "@/components/Appraisal/AppraisalView";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const AddEmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <MyComponentView />
        </DefaultLayout>
    );
  };
  
  export default AddEmployeesList;