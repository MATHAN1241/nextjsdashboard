import Signup from "@/components/Auth/Signup/index";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const BasicSignupPage: React.FC = () => {
  return (
      <Signup />
  );
};

export default BasicSignupPage;