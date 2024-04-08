
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import ViewAttendance from "@/components/EmployeeAttendanceView/ViewAttendancePage";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const ViewAttendanceforms = () => {
  return (
    <DefaultLayout>
      <ViewAttendance/>
    </DefaultLayout>
  );
};

export default ViewAttendanceforms