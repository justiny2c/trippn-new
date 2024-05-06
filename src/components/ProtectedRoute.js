import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = () => {
    const { user } = useAuth();
    console.log`${ user }`

    if (!user) {
        // If not logged in, redirect to the login page
        return <Navigate to="/signin" replace />;
    }

    return <Outlet />; // Render the child routes
}


export default ProtectedRoute