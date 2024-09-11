import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../../utils/context";

const PrivateRoutes = () =>{
    const {login} = useContext(LoginContext)
    return login? <Outlet/> : <Navigate to='/'/>
}

export default PrivateRoutes