
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AttendanceList from "@/components/Attendance";
import Card from "@/components/EmployeeAttendanceView";
import Registerform from "@/components/EmployeeAttendanceView/RegisterAttendanceForm";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const Employeeattendance = () => {
  return (
    <DefaultLayout>
      <Registerform/>
    </DefaultLayout>
  );
};
export default Employeeattendance