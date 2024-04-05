
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import ProfileEmployees from "@/components/Profile/Profileform";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const AttendancePage = () => {
  return (
    <DefaultLayout>

<ProfileEmployees/>
    </DefaultLayout>
  );
};

export default AttendancePage;
