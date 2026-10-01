import React, {
  createContext,
  useState,
  useEffect
} from "react";

import {
  getLocalStorage,
  setLocalStorage
} from "../utils/LocalStorage";


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

  // -----------------------------------------
  // USER DATA
  // -----------------------------------------

  const [UserData, setUserData] = useState(null);


  // -----------------------------------------
  // LOAD DATA
  // -----------------------------------------

  useEffect(() => {

    // Create initial localStorage data
    // only if it doesn't already exist
    setLocalStorage();


    // Get employee/admin data
    const data = getLocalStorage();


    // Store data in React state
    setUserData(data);


  }, []);


  console.log("UserData:", UserData);


  return (

    <AuthContext.Provider
      value={{
        UserData,
        setUserData
      }}
    >

      {children}

    </AuthContext.Provider>

  );

};


export default AuthProvider;