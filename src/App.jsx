import { useState, useEffect, useContext } from 'react'
import './App.css'

import Login from './components/Auth/Login'

import EmployeeDeshboard from './components/Deshboard/EmployeeDeshboard'
import AdminDeshboard from './components/Deshboard/AdminDeshboard'

import CreateTask from './components/others/CreateTask'
import AllTask from './components/others/AllTask'

import { AuthContext } from './context/AuthProvider'


function App() {

  // -----------------------------------------
  // USER ROLE ->"What type of user is logged in?"
  // -----------------------------------------

  // ""          -> nobody logged in
  // "admin"     -> admin logged in
  // "employee"  -> employee logged in

  const [User, setUser] = useState("")


  // -----------------------------------------
  // LOGGED IN EMPLOYEE DATA ->stores that complete employee data as id,name ,password e.t.c.
  // -----------------------------------------

  const [loggedInUserData, setloggedInUserData] = useState(null)


  // -----------------------------------------
  // ADMIN PAGE
  // -----------------------------------------

  // dashboard -> Admin Dashboard
  // create    -> Create Task
  // allTasks  -> All Tasks

  const [adminPage, setAdminPage] = useState("dashboard")


  // -----------------------------------------
  // AUTH CONTEXT ->is used to get the data shared by your AuthProvider.Any component inside this provider can access UserData and setUserData."
  // -----------------------------------------

  const authData = useContext(AuthContext)


  console.log("authData:", authData)
  console.log("User:", User)
  console.log("loggedInUserData:", loggedInUserData)
  console.log("adminPage:", adminPage)


  

// -----------------------------------------
// RESTORE LOGIN AFTER REFRESH
// -----------------------------------------

useEffect(() => {

  const loggedInUser = localStorage.getItem("loggedInUser")

  if (loggedInUser) {

    const user = JSON.parse(loggedInUser)

    console.log("Saved User:", user)

    setUser(user.role)

    if (user.role === "employee" && user.data) {
      setloggedInUserData(user.data)
    }

  }

}, [])

// -----------------------------------------
// SYNC EMPLOYEE DATA AFTER TASK
//  UPDATE Keeps the logged-in employee's data updated
// whenever employee data changes in AuthContext.
// This is important when tasks are accepted,
// completed, or failed.
// -----------------------------------------

useEffect(() => {

  if (
    User === "employee" &&
    loggedInUserData &&
    authData?.UserData?.employees
  ) {

    const updatedEmployee =
      authData.UserData.employees.find(
        (employee) => employee.id === loggedInUserData.id
      )

    if (updatedEmployee) {
      setloggedInUserData(updatedEmployee)

      // Also keep localStorage updated
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: updatedEmployee
        })
      )
    }

  }

}, [authData?.UserData, User])  //Run this useEffect again when any of these values change.

// useEffect(() => {

//   if (
//     User === "employee" &&
//     loggedInUserData &&
//     authData &&
//     authData.UserData &&
//     authData.UserData.employees
//   ) {

//     const updatedEmployee =
//       authData.UserData.employees.find(
//         (employee) =>
//           employee.id === loggedInUserData.id
//       )

//     if (updatedEmployee) {

//       setloggedInUserData(updatedEmployee)

//     }

//   }

// }, [authData.UserData, User, loggedInUserData])


  // -----------------------------------------
  // LOGIN
  // -----------------------------------------

  const handleLogin = (email, password) => {


    // -----------------------------------------
    // ADMIN LOGIN
    // -----------------------------------------

    if (
      email === "admin@me.com" &&
      password === "123"
    ) {

      console.log("Admin logged in")


      setUser("admin")

      // Always start admin from dashboard
      setAdminPage("dashboard")


      // Save admin login
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin"
        })
      )

      return

    }


    // -----------------------------------------
    // EMPLOYEE LOGIN
    // -----------------------------------------

    if (
      authData &&
      authData.UserData &&
      authData.UserData.employees
    ) {

      const employee =
        authData.UserData.employees.find(
          (e) =>
            e.email === email &&
            e.password === password
        )


      if (employee) {

        console.log(
          "Employee found:",
          employee
        )


        setUser("employee")

        setloggedInUserData(employee)


        // Save employee login
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            data: employee
          })
        )


        return

      }

    }


    // -----------------------------------------
    // INVALID LOGIN
    // -----------------------------------------

    alert("Invalid person")

  }


  // -----------------------------------------
  // LOGOUT
  // -----------------------------------------

  const handleLogout = () => {

    localStorage.removeItem("loggedInUser")

    setUser("")

    setloggedInUserData(null)

    setAdminPage("dashboard")

  }


  // -----------------------------------------
  // UI
  // -----------------------------------------

  return (
    <>

      {/* -------------------------------- */}
      {/* LOGIN */}
      {/* -------------------------------- */}

      {!User && (
        <Login
          handleLogin={handleLogin}
        />
      )}


      {/* -------------------------------- */}
      {/* ADMIN DASHBOARD */}
      {/* -------------------------------- */}

      {User === "admin" &&
        adminPage === "dashboard" && (

          <AdminDeshboard
            setAdminPage={setAdminPage}
            handleLogout={handleLogout}
          />

      )}


      {/* -------------------------------- */}
      {/* CREATE TASK */}
      {/* -------------------------------- */}

      {User === "admin" &&
        adminPage === "create" && (

          <CreateTask
            setAdminPage={setAdminPage}
          />

      )}


      {/* -------------------------------- */}
      {/* ALL TASKS */}
      {/* -------------------------------- */}

      {User === "admin" &&
        adminPage === "allTasks" && (

          <AllTask
            setAdminPage={setAdminPage}
          />

      )}


      {/* -------------------------------- */}
      {/* EMPLOYEE DASHBOARD */}
      {/* -------------------------------- */}

      {User === "employee" &&
        loggedInUserData && (

          <EmployeeDeshboard
            data={loggedInUserData}
          />

      )}

    </>
  )
}


export default App