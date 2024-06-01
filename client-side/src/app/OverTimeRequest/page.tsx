import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import OverTimeRequest from "@/components/OverTimeRequest";


export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const BasicEcommercePage: React.FC = () => {
  return (
    <DefaultLayout>
      <OverTimeRequest />
    </DefaultLayout>
  );
};

export default BasicEcommercePage;