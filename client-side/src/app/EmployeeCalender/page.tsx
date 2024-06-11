
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import EmpCalendar from "@/components/EmployeeCalender";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <EmpCalendar />
    </DefaultLayout>
  );
};

export default CalendarPage;
