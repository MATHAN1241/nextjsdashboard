"use client";
//import jsVectorMap from "jsvectormap";
//import "jsvectormap/dist/css/jsvectormap.css";
import React, { useEffect } from "react";
//import "../../js/us-aea-en";

const MapOne: React.FC = () => {
  // useEffect(() => {
  //   const mapOne = new jsVectorMap({
  //     selector: "#mapOne",
  //     map: "us_aea_en",
  //     zoomButtons: true,

  //     regionStyle: {
  //       initial: {
  //         fill: "#C8D0D8",
  //       },
  //       hover: {
  //         fillOpacity: 1,
  //         fill: "#3056D3",
  //       },
  //     },
  //     regionLabelStyle: {
  //       initial: {
  //         fontFamily: "Satoshi",
  //         fontWeight: "semibold",
  //         fill: "#fff",
  //       },
  //       hover: {
  //         cursor: "pointer",
  //       },
  //     },

  //     labels: {
  //       regions: {
  //         render(code: string) {
  //           return code.split("-")[1];
  //         },
  //       },
  //     },
  //   });

  //   return () => {
  //     mapOne.destroy();
  //   };
  // }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      {/* <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Region labels
      </h4> */}
    
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4002.2770051974685!2d80.20449919332049!3d12.950089016203403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525da751a02335%3A0xee1312bdfe2fd9a3!2sLYZOO%20TECHNOLOGIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1712061559324!5m2!1sen!2sin" width="900" height="600" loading="lazy" ></iframe>
    </div>
  );
};

export default MapOne;
