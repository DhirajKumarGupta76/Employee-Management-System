import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

import Login from './components/Auth/Login'
import EmployeeDeshboard from './components/Deshboard/EmployeeDeshboard'
import AdminDeshboard from './components/Deshboard/AdminDeshboard'

import { AuthContext } from './context/AuthProvider'
import React from 'react'
import { useContext } from 'react'


function App() {

  // Stores which type of user is logged in
  // ""          → Nobody logged in
  // "admin"     → Admin logged in
  // "employee"  → Employee logged in
  const [User, setUser] = useState("")


  // Stores the complete data of the logged-in employee
  // Example:
  // {
  //   id,
  //   name,
  //   email,
  //   password,
  //   tasks,
  //   taskNumbers
  // }
  const [loggedInUserData, setloggedInUserData] = useState(null)


  // Gets employee/admin data from AuthContext
  const authData = useContext(AuthContext);


  console.log("authData:", authData);
  console.log("User:", User);
  console.log("loggedInUserData:", loggedInUserData);


  // -----------------------------------------
  // CHECK USER AFTER REFRESH
  // -----------------------------------------

  useEffect(() => {
      // localStorage.clear()

    // Get saved login information
    const loggedInUser = localStorage.getItem("loggedInUser");


    if (loggedInUser) {

      // Convert string back into JavaScript object
      const user = JSON.parse(loggedInUser);

      console.log("Saved User:", user);


      // Restore role
      setUser(user.role);


      // Restore employee data
      if (user.role === "employee" && user.data) {

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

    if (email === 'admin@me.com' && password === '123') {

      setUser('admin');

      console.log("Admin logged in");


      // Save admin role
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'admin'
        })
      );

      return;
    }


    // -----------------------------------------
    // EMPLOYEE LOGIN
    // -----------------------------------------

    if (authData && authData.UserData) {
      

      console.log('This is User');


      const employee = authData.UserData.employees.find(
        (e) => e.email === email && e.password === password
      );


      if (employee) {

        console.log("Employee found:", employee);


        // Store employee role
        setUser('employee');


        // Store complete employee data in React state
        setloggedInUserData(employee);


        // Save role + employee data
        // This is used to restore login after refresh
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            role: 'employee',
            data: employee
          })
        );


        console.log(
          "Saved Login:",
          JSON.parse(localStorage.getItem("loggedInUser"))
        );

        return;
      }

    }


    // If no admin or employee was found
    alert("Invalid person");

  }


  // -----------------------------------------
  // DISPLAY
  // -----------------------------------------

  return (
    <>

      {/* Show Login when nobody is logged in */}
      {!User && (
        <Login handleLogin={handleLogin} />
      )}


      {/* Show Admin Dashboard */}
      {User === "admin" && (
        <AdminDeshboard />
      )}


      {/* Show Employee Dashboard */}
      {User === "employee" && loggedInUserData && (
        <EmployeeDeshboard data={loggedInUserData} />
      )}

    </>
  )
}


export default App