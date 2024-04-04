"use client";
import CardDataStats from "@/components/CardDataStats";
import React from "react";

const Details: React.FC = () => {

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <CardDataStats  total={""} rate={""} title={""} children={undefined} >
          
        </CardDataStats>
        <CardDataStats title={""} total={""} rate={""} children={undefined} >
         
        </CardDataStats>
        <CardDataStats title={""} total={""} rate={""} children={undefined} >
          
        </CardDataStats>
        <CardDataStats title={""} total={""} rate={""} children={undefined}>
         
        </CardDataStats>
      </div>

     

      
    </>
  );
};

export default Details;
