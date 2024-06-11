"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import ReduxProvider from "@/hooks/redux/provider";
//import { AuthProvider } from "@/hooks/auth";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AppProps } from "next/app";
import SignIn from "@/components/Auth/SignIn";
import { DataProvider } from "@/hooks/context/UserContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      
      
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
           
 <DataProvider>
          {loading ? <Loader />  : children  } 
          </DataProvider>
        </div>
       
      </body>
    </html>
   
    </>
  );
}
// const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  
//     //   // <AuthProvider>
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     //  // </AuthProvider>
//      const [loading, setLoading] = useState<boolean>(true);
    
//     //   // const pathname = usePathname();
    
//       useEffect(() => {
//         setTimeout(() => setLoading(false), 1000);
//       }, []);
//   return (
//     <>
//     <html lang="en">
    
//       <body>
//         <UserProvider>
//           {/* <PageLayout>{children}</PageLayout> */}
//           <div className="dark:bg-boxdark-2 dark:text-bodydark">
           
//            {loading ? <Loader /> : children}
//           </div>
//         </UserProvider>
//       </body>
//     </html>
//     </>
//   );
// };

// export default RootLayout;
