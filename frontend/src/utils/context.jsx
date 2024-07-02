import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

export const IsLogin = ({children}) =>{
    const [login, setlogin] = useState(false)
    const toggleLogin = () =>{
        setlogin(!login)
    }
    return(
        <ThemeContext.Provider value = {{login, toggleLogin}}>{children}</ThemeContext.Provider>
    )
}