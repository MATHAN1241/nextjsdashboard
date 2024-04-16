import SignIn from "@/app/auth/signin/page";
import { AuthProvider } from "@/hooks/auth";
import { Metadata } from "next";
import { AppProps } from "next/app";


export const metadata: Metadata = {
  title:
    "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

export default function Home() {
  return (
    <AuthProvider>
    <>
    <SignIn />
    </>
    </AuthProvider>
    
  );
}
