import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDeshboard from './components/Deshboard/EmployeeDeshboard'
import AdminDeshboard from './components/Deshboard/AdminDeshboard'
import AuthContext from './context/AuthContext'
import { setLocalStorage } from './utils/localstorage'
import { getLocalStorage } from './utils/localstorage'

function App() {
  console.log("🔥 APP.JSX IS RUNNING");
 
  useEffect(() => {
    console.log("App component loaded");
    setLocalStorage();
    getLocalStorage();
    // localStorage.clear();
    
  },[]);
  

  return (
    <>
    <Login />
   

    {/* <EmployeeDeshboard /> */}
    {/* <AdminDeshboard /> */}

   

    </>
   
  )
}

export default App




