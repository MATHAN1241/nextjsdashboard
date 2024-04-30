// import { Signup } from '@/types/signup';
// import { createContext, useContext, useState, ReactNode } from 'react';



// interface AuthContextType {
//   user: Signup | null;
//   login: (userData: Signup) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType>({
//   user: null,
//   login: () => {},
//   logout: () => {},
// });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<Signup | null>(null);

//   const login = (userData: Signup) => {
//     setUser(userData);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => useContext(AuthContext);
// context/AuthContext.tsx
"use client"
import { ReactNode, createContext, useContext, useState } from 'react';

interface UserData {
  role: string;
  uemail: string;
  id:string;
  name:string;
}

interface AuthContextType {
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  userData: null,
  setUserData: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC <AuthProviderProps>= ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
// export const useUser = () => useContext(useContext);