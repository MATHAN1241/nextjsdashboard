// _app.tsx

// import DefaultLayout from "@/components/Layouts/DefaultLayout";
// import { store } from "@/hooks/store";

// import { AppProps } from "next/app";
// import { Provider } from "react-redux";


// const MyApp: React.FC<{ Component: React.FC<AppProps>; pageProps: AppProps }> = ({ Component, pageProps }) => {
//   return (
//     <Provider store={store}>
      
//         <DefaultLayout>
//           <Component {...pageProps} />
        
//         </DefaultLayout>
//     </Provider>
//   );
// };

// export default MyApp;
import { AppProps } from 'next/app';
import { UserProvider } from '../../hooks/context/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
