
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


import Attendanceviewtwo from "@/components/Attendance/AttendanceIndividualtwo";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const AttendancePage = () => {
  return (
    <DefaultLayout>
          <Attendanceviewtwo/>
    </DefaultLayout>
  );
};

export default AttendancePage;