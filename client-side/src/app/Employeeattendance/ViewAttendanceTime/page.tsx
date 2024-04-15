
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


import Approval from "@/components/EmployeeAttendanceView/AprrovalForm";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const ViewAttendance = () => {
  return (
    <DefaultLayout>
      <Approval/>
    </DefaultLayout>
  );
};

export default ViewAttendance