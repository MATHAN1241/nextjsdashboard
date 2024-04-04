
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Attendanceview from "@/components/Attendance/AttendanceIndividual";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const AttendancePage = () => {
  return (
    <DefaultLayout>
          <Attendanceview/>
    </DefaultLayout>
  );
};

export default AttendancePage;
