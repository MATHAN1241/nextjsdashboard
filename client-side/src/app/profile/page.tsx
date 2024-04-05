
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Profile from "@/components/Profile";


export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const AttendancePage = () => {
  return (
    <DefaultLayout>
          

    <Profile />
          
    </DefaultLayout>
  );
};

export default AttendancePage;