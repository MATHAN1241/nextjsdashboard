import SignIn from "@/components/Auth/SignIn/index";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const BasicSignInPage: React.FC = () => {
  return (
      <SignIn />
  );
};

export default BasicSignInPage;