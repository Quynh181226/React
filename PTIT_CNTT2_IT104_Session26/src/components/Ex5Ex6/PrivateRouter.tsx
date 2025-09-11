import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

export const PrivateRouter=()=> {
    const [isAuth] = useState<boolean>(true)

    return isAuth ? <Outlet /> : <Navigate to="/login" replace />
}