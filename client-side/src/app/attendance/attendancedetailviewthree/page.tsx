
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


import Attendanceviewtwo from "@/components/Attendance/AttendanceIndividualtwo";
import Attendanceviewthree from "@/components/Attendance/Attendanceindividualthree";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const AttendancePage = () => {
  return (
    <DefaultLayout>
          <Attendanceviewthree/>
    </DefaultLayout>
  );
};

export default AttendancePage;