import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ThemeContext } from "../../utils/context";

const PrivateRoutes = () =>{
    const {login} = useContext(ThemeContext)
    const user = login
    return user? <Outlet/> : <Navigate to='/'/>
}

export default PrivateRoutes