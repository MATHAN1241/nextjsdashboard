
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PaySlip from "@/components/PaySlip";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const AttendancePage = () => {
  return (
    <DefaultLayout>
      <PaySlip />
    </DefaultLayout>
  );
};

export default AttendancePage;