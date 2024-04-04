
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Attendanceviewfour from "@/components/Attendance/AttendanceIndividualfour";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const AttendancePage = () => {
  return (
    <DefaultLayout>
       <Attendanceviewfour/>
    </DefaultLayout>
  );
};

export default AttendancePage;
