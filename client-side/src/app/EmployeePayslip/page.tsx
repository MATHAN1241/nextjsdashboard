
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AttendanceList from "@/components/Attendance";
import Card from "@/components/EmployeeAttendanceView";
import Payslipcardview from "@/components/PayslipCard";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const Employeeattendance = () => {
  return (
    <DefaultLayout>
      <Payslipcardview/>
    </DefaultLayout>
  );
};

export default Employeeattendance