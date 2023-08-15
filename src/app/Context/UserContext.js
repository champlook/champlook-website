"use client";
import {
  createContext,
  useEffect,
  useState,
  useReducer,
  useContext,
} from "react";
import { auth } from "../Firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("in context", user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  },[]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
