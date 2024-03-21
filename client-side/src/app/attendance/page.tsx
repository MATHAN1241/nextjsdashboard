
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AttendanceList from "@/components/Attendance";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const AttendancePage = () => {
  return (
    <DefaultLayout>
      <AttendanceList />
    </DefaultLayout>
  );
};

export default AttendancePage;