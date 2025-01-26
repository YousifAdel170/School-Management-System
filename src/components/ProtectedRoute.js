// Importing React
import React from "react";

// Importing Navigate for redirection and Outlet to render child routes
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, userTypeRequired }) => {
  // Retrieving the user's role ID and user type from local storage
  const roleID = localStorage.getItem("roleID");
  const userType = localStorage.getItem("userType");

  // If the user is not logged in (roleID is missing), redirect to the login page
  if (!roleID) return <Navigate to={"/login"} />;

  // If the user's role ID is not in the list of allowed roles, redirect to the login page
  if (!allowedRoles.includes(roleID)) return <Navigate to={"/login"} />;

  if (userType !== userTypeRequired) {
    // If the role is '2' (possibly "admin" or "teacher"), check user type
    if (roleID === "2") {
      // If the user type is not in the allowed types, redirect to login
      if (!allowedRoles.includes(userType)) return <Navigate to={"/login"} />;
    }
  }

  // If all conditions are met, render the child routes (Outlet)
  return <Outlet />;
};

// Exporting ProtectedRoute to use in other parts of the app
export default ProtectedRoute;
