
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


import RequestStatus from "@/components/EmployeeAttendanceView/RequestForm";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const ViewRequest = () => {
  return (
    <DefaultLayout>
      <RequestStatus/>
    </DefaultLayout>
  );
};

export default ViewRequest