import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../contexts/AuthContext.js";

export function UserRouteGuard({ children }) {

    const { currentUser } = useContext(AuthContext);

    if (currentUser === null) {
        return <Navigate to={'/login'} replace />
    }

    if (children) {
        return children;
    }
    return <Outlet />;
}