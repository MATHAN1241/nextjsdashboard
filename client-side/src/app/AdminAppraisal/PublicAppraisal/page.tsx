import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Publicappraisal from "@/components/AdminAppraisalview/PublicApproval";

export const metadata: Metadata = {
    title: "Lyzoo AI Attendance Dashboard",
    description: "This is Lyzoo AI Attendance Dashboard",
  };
  



const AddEmployeesList: React.FC = () => {
    return (
        <DefaultLayout>
        <Publicappraisal/>
        </DefaultLayout>
    );
  };
  
  export default AddEmployeesList;