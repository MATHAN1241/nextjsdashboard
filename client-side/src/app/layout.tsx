"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import ReduxProvider from "@/hooks/redux/provider";
//import { AuthProvider } from "@/hooks/auth";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // <AuthProvider>
  const [sidebarOpen, setSidebarOpen] = useState(false);
 // </AuthProvider>
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
 
    <html lang="en">
      <body suppressHydrationWarning={true}>
      <ReduxProvider>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
           
          {loading ? <Loader /> : children}
        </div>
        </ReduxProvider>
      </body>
    </html>
   
    </>
  );
}
