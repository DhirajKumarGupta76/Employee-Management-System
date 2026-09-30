import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDeshboard from './components/Deshboard/EmployeeDeshboard'
import AdminDeshboard from './components/Deshboard/AdminDeshboard'

import { setLocalStorage } from './utils/localstorage'
import { getLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider';
import React from 'react'
import { useContext } from 'react'




function App() {
 


  // console.log("🔥 APP.JSX IS RUNNING");


//  useEffect(() => {

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
const  authData  = useContext(AuthContext);
console.log("authData:",authData);
console.log(User)

// console.log("authData",authData.UserData.employees[4])

useEffect(() => {

  // Check if authentication data is available
  if (authData) {

    // Get the logged-in user's data from localStorage
    const loggedInUser = localStorage.getItem("loggedInUser");

    // Check if a user is already logged in
    if (loggedInUser) {

      // Set the user's role (admin/employee)
      setUser(loggedInUser.role);
    }
  }

}, [authData]); // Run this effect whenever authData changes




const handleLogin=(email,password)=>{
  if(email=='admin@me.com'&& password=='123'){
    
    setUser('admin')
    console.log(User)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
  else if (authData ){

    console.log('This is User')
    const employee=authData.UserData.employees.find((e)=>e.email==email && e.password==password)
    if(employee){
      setUser('employee');
      setloggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }
    
    // console.log(User)
  }
  else{
    alert("Invalid person")

  }
  
}
// handleLogin('admin@me.com','123')




  return (
    <>
    {!User?<Login handleLogin={handleLogin} /> : ""}
   

    {/* <EmployeeDeshboard /> */}
    {/* <AdminDeshboard /> */}
{/* 
    {User=='admin'?<AdminDeshboard /> : <EmployeeDeshboard data={loggedInUserData} />} */}

   {User === "admin" && (
  <AdminDeshboard />
)}

{User === "employee" && loggedInUserData && (
  <EmployeeDeshboard data={loggedInUserData} />
)}

    </>
   
  )
}

export default App




