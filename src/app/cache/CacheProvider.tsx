"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type LoggedInType = {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const CacheContext = createContext<LoggedInType | undefined>(undefined);

export function CacheProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    fetch(process.env.SERVER_DOMAIN + "/member/currentUser", {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        credentials: 'include'
      })
        .then(async (response) => {
          setLoggedIn(await response.text() !== "")
        }
      ).catch((error) => {
        console.log('Login check error!', error);
      })
  }, [])

//   useEffect(()=>{
//     console.log(`Cache used. loggedIn: ${loggedIn}`);
//   }, [loggedIn]);

  return (
    <CacheContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </CacheContext.Provider>
  );
}

export function useCache() {
    const context = useContext(CacheContext);
    if (!context) { throw new Error("useCache must be used within a CacheProvider"); }

    return context;
}
