import { useState } from "react";
import { createContext } from "react";

export const LoginContext = createContext()
export const AdminContext = createContext()

export const IsLogin = ({children}) =>{
    const [login, setlogin] = useState(false)
    const toggleLogin = () =>{
        setlogin(!login)
    }
    return(
        <LoginContext.Provider value = {{login, toggleLogin}}>{children}</LoginContext.Provider>
    )
}

export const IsAdmin = ({children}) =>{
    const [admin, setAdmin]=useState(false)
    const toggleAdmin = ()=>{
        setAdmin(!admin)
    }
    return(
        <AdminContext.Provider value = {{admin, toggleAdmin}}>{children}</AdminContext.Provider>
    )
}