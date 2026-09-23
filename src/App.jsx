import { useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDeshboard from './components/Deshboard/EmployeeDeshboard'
import AdminDeshboard from './components/Deshboard/AdminDeshboard'
import AuthContext from './context/AuthContext'
import { setLocalStorage } from './utils/localstorage'

function App() {
 
  

  return (
    <>
    <Login />

    {/* <EmployeeDeshboard /> */}
    {/* <AdminDeshboard /> */}

   

    </>
   
  )
}

export default App
