import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AdminContext } from "../../utils/context";

const AdminRoutes = () =>{
    const {admin} = useContext(AdminContext)
    return admin? <Outlet/> : <Navigate to='/'/>
}

export default AdminRoutes