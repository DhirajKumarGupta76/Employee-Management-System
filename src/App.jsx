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
 
  // useEffect(() => {
  //   console.log("App component loaded");
  //   setLocalStorage();
  //   getLocalStorage();
  //   // localStorage.clear();
    
  // },[]);
  
const [User, setUser] = useState("")

const handleLogin=(email,password)=>{
  if(email=='Admin@me.com'&& password=='123'){
    console.log('This is admin')
    setUser('admin')
    console.log(User)
  }
  else if (email=='User@me.com'&& password=='123'){
    console.log('This is User')
    setUser('employee')
    console.log(User)
  }
  else{
    alert("Invalid person")

  }
  
}
// handleLogin('admin@me.com','123')


  return (
    <>
    {!User?<Login handleLogin={handleLogin} />:""}
   

    {/* <EmployeeDeshboard /> */}
    {/* <AdminDeshboard /> */}

    {User=='admin'?<AdminDeshboard /> : <EmployeeDeshboard />}

   

    </>
   
  )
}

export default App




