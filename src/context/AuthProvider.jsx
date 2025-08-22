import React, { useState, createContext ,useEffect} from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()



const AuthProvider = ({children}) => {
  // localStorage.clear()

const [userData, setUserData] = useState(null)

// const data= getLocalStorage()
// console.log(data.employees)

useEffect(() => {
  const {employees} =getLocalStorage()
  setUserData(employees)


}, [])

  return (
    <AuthContext.Provider value={{userData,setUserData}}>
<div>{children}</div>
    </AuthContext.Provider>
    
  )
}

export default AuthProvider