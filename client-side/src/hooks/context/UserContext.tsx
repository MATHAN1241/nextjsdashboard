// context/DataContext.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the data you want to pass
interface DataContextType {
  data: { name: string; age: number } | null;
  setData: (data: { name: string; age: number }) => void;
}

// Create a context with a default value
const DataContext = createContext<DataContextType | undefined>(undefined);

// Create a provider component
export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DataContextType['data']>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook to use the context
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// // context/UserContext.tsx
// import React, { createContext, useState, useContext, ReactNode } from 'react';

// interface User {
//     email: string;
//     name: string;
//     category: string;
// }

// interface UserContextType {
//     user: User | null;
//     setUser: (user: User) => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//     const [user, setUser] = useState<User | null>(null);

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = (): UserContextType => {
//     const context = useContext(UserContext);
//     if (!context) {
//         throw new Error('useUser must be used within a UserProvider');
//     }
//     return context;
// };
// context/UserContext.tsx
// "use client"
// import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
// import { parseCookies, setCookie, destroyCookie } from 'nookies';

// interface User {
//   email: string;
//   name: string;
//   category: string;
// }

// interface UserContextProps {
//   user: User | null;
//   setUser: (user: User) => void;
//   logout: () => void;
// }

// const UserContext = createContext<UserContextProps | undefined>(undefined);

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUserState] = useState<User | null>(null);

//   useEffect(() => {
//     const cookies = parseCookies();
//     if (cookies.user) {
//       setUserState(JSON.parse(cookies.user));
//     }
//   }, []);

//   const setUser = (user: User) => {
//     setUserState(user);
//     setCookie(null, 'user', JSON.stringify(user), {
//       maxAge: 30 * 24 * 60 * 60,
//       path: '/',
//     });
//   };

//   const logout = () => {
//     setUserState(null);
//     destroyCookie(null, 'user');
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error('useUser must be used within a UserProvider');
//   }
//   return context;
// };
// import { createContext, useState, useContext } from 'react';

// const DataContext = createContext("");

// export function DataProvider({ children }) {
//   const [data, setData] = useState(null);

//   return (
//     <DataContext.Provider value={{ data, setData }}>
//       {children}
//     </DataContext.Provider>
//   );
// }

// export function useData() {
//   return useContext(DataContext);
// }
