import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const FormElementsPage = () => {
  return (
    <DefaultLayout>
      <FormElements />
    </DefaultLayout>
  );
};

export default FormElementsPage;



// import React from 'react';
// import LeaveRequestForm from '../form-layout/page';

// const LeaveRequest = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-4">Employee Leave Request Form</h1>
//         <LeaveRequestForm />
//       </div>
//     </div>
//   );
// };

// export default LeaveRequest;


