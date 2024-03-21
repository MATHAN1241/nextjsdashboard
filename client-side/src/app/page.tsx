import SignIn from "@/app/auth/signin/page";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

export default function Home() {
  return (
    <>
    <SignIn />
    </>
  );
}
