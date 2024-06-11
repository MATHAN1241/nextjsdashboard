import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Attendancemonth from "@/components/Attendance/Attendncemonth";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const AttendancePage = () => {
  return (
    <DefaultLayout>
          <Attendancemonth/>
    </DefaultLayout>
  );
};

export default AttendancePage;