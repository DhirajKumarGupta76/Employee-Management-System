// import React from 'react'
// import { createContext } from 'react'
// import { getLocalStorage } from '../utils/localstorage'
// import { useState } from 'react'

// export const AuthContext=createContext()



// const AuthProvider = ({children}) => {
//   const [UserData, setUserData] = useState(null)
// const data= getLocalStorage();
// console.log(data)
//   return (
//     <div>
//         <AuthContext.Provider value={"sarthak"}>
//            {children}
//         </AuthContext.Provider>
      
//     </div>
//   )
// }

// export default AuthProvider

// import React, { createContext, useState } from "react";
// import { getLocalStorage, setLocalStorage } from "../utils/localstorage";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   // Store initial data in localStorage
//   setLocalStorage();

//   // Get employee and admin data
//   const data = getLocalStorage();

//   // Store data in state
//   const [UserData, setUserData] = useState(data);

//   console.log("UserData:", UserData);
  


//   return (
//     <AuthContext.Provider value={{ UserData, setUserData }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;


import React, { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";
import { useEffect } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [UserData, setUserData] = useState(null);

  useEffect(() => {

    // Update localStorage with latest employee/admin data
    setLocalStorage();

    // Get the data from localStorage
    const data = getLocalStorage();

    // Store data in React state
    setUserData(data);

  }, []);


  // Always update localStorage with the latest
  // Employees and Admin data from the data file
  // setLocalStorage();

  // Get the latest data after updating localStorage
  // const data = getLocalStorage();

  // Store the data inside Context
  // const [UserData, setUserData] = useState(data);

  // console.log("UserData:", UserData);
  // console.log(UserData.employees)

  return (
    <AuthContext.Provider value={{ UserData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;