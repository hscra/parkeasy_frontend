"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type LoggedInType = {
    loggedIn: boolean;
    setLoggedIn: (loggedIn: boolean) => void;
}

const CacheContext = createContext<LoggedInType | undefined>(undefined);

export function CacheProvider({ children }: { children: ReactNode }) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(()=>{
    console.log(`Cache used. loggedIn: ${loggedIn}`);
  }, [loggedIn]);

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
