// import { useRouter } from "next/router";
// import { useEffect } from "react";



// const ProtectedRoute: React.FC = ({children}) => {
//     const {userData} = useAuth();
//     const router =useRouter();

//     useEffect(()=> {
//         if(!userData) {
//             router.push('SignIn');
//         }
//     },[userData, router]);
    
//     return<>{userData && children}</>;
// };

// export default ProtectedRoute;