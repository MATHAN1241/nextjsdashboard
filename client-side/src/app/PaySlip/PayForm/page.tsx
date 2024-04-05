
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Bill from "@/components/PaySlip/PayForm/bill";



export const metadata: Metadata = {
  title: "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

const PaySlipPage = () => {
  return (
    <DefaultLayout>
      <Bill />
    </DefaultLayout>
  );
};

export default PaySlipPage;