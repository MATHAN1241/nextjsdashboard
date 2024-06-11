import SignIn from "@/app/auth/signin/page";
import { AuthProvider } from "@/hooks/auth";
import { DataProvider } from "@/hooks/context/UserContext";
// import { UserProvider } from "@/hooks/context/UserContext";
import { store } from "@/hooks/store";

import { Metadata } from "next";
import { AppProps } from "next/app";
import RootLayout from "./layout";


export const metadata: Metadata = {
  title:
    "Lyzoo AI Attendance Dashboard",
  description: "This is Lyzoo AI Attendance Dashboard",
};

export default function Home() {
  return (

    <>
     {/* <RootLayout> */}
     
     <SignIn />
     {/* </RootLayout> */}
      {/* <SignIn /> */}
     

    
    {/* <Component {...pageProps} /> */}


    </>


  );
}
//pages/_app.tsx
// import { Provider } from 'react-redux';


// const Home: React.FC<{ pageProps: any }> = ({ pageProps }) => {
//     return (
//         <Provider store={store}>
//             <SignIn {...pageProps} />
//         </Provider>
//     );
// };

// export default Home;

