import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import Login from './components/Auth/Login'
import EmployeeDeshboard from './components/Deshboard/EmployeeDeshboard'
import AdminDeshboard from './components/Deshboard/AdminDeshboard'

import { setLocalStorage } from './utils/localstorage'
import { getLocalStorage } from './utils/localstorage'

import { AuthContext } from './context/AuthProvider'
import React from 'react'
import { useContext } from 'react'


function App() {


  // console.log("🔥 APP.JSX IS RUNNING");


  // useEffect(() => {

  //   // Runs when the App component is loaded/mounted for the first time
  //   console.log("App component loaded");

  //   // Stores the latest Employees and Admin data in localStorage
  //   setLocalStorage();

  //   // Gets the Employees and Admin data from localStorage
  //   getLocalStorage();

  //   // Clears all data stored in localStorage
  //   // Used only for testing/debugging
  //   // localStorage.clear();

  // }, []);


  const [User, setUser] = useState("")

  const [loggedInUserData, setloggedInUserData] = useState(null)

  const authData = useContext(AuthContext);

  console.log("authData:", authData);
  console.log("User:", User);
  console.log("loggedInUserData:", loggedInUserData);


  // -----------------------------------------
  // CHECK USER AFTER REFRESH
  // -----------------------------------------

  useEffect(() => {

    // Get the logged-in user's data from localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");


    // Check if user is already logged in
    if (loggedInUser) {

      // Convert localStorage string into object
      const user = JSON.parse(loggedInUser);

      console.log("Saved User:", user);


      // Set user's role
      setUser(user.role);


      // If employee, restore employee data
      if (user.role === "employee") {

        setloggedInUserData(user.data);

      }

    }

  }, []);


  // -----------------------------------------
  // LOGIN FUNCTION
  // -----------------------------------------

  const handleLogin = (email, password) => {


    // -----------------------------------------
    // ADMIN LOGIN
    // -----------------------------------------

    if (email == 'admin@me.com' && password == '123') {

      setUser('admin');

      console.log("Admin logged in");


      // Save admin login in localStorage
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'admin'
        })
      );

    }


    // -----------------------------------------
    // EMPLOYEE LOGIN
    // -----------------------------------------

    else if (authData) {

      console.log('This is User');


      const employee = authData.UserData.employees.find(
        (e) => e.email == email && e.password == password
      );


      if (employee) {

        console.log("Employee found:", employee);


        // Set employee role
        setUser('employee');


        // Store employee data in state
        setloggedInUserData(employee);


        // -----------------------------------------
        // SAVE EMPLOYEE LOGIN
        // -----------------------------------------

        // Store role + employee data
        // So we can restore it after refresh
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            role: 'employee',
            data: employee
          })
        );

      }

      else {

        alert("Invalid person");

      }

    }


    else {

      alert("Invalid person");

    }

  }


  // -----------------------------------------
  // DISPLAY
  // -----------------------------------------

  return (
    <>
      
      {/* 
        If no user is logged in,
        show Login page
      */}

      {!User && (
        <Login handleLogin={handleLogin} />
      )}


      {/* 
        If admin is logged in,
        show Admin Dashboard
      */}

      {User === "admin" && (
        <AdminDeshboard />
      )}


      {/* 
        If employee is logged in,
        show Employee Dashboard
      */}

      {User === "employee" && loggedInUserData && (
        <EmployeeDeshboard data={loggedInUserData} />
      )}

    </>
  )
}


export default App