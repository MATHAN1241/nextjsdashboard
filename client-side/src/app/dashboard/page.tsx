import Ecommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import { AppProps } from "next/app";

export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const BasicEcommercePage: React.FC = () => {
  return (
    
    <DefaultLayout >
      <Ecommerce  />
    </DefaultLayout>
  );
};

export default BasicEcommercePage;