import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles, userTypeRequired }) => {
  const roleID = localStorage.getItem("roleID");
  const userType = localStorage.getItem("userType");

  if (!roleID) return <Navigate to={"/login"} />;

  if (!allowedRoles.includes(roleID)) return <Navigate to={"/login"} />;

  if (userType !== userTypeRequired) {
    if (roleID === "2") {
      if (!allowedRoles.includes(userType)) return <Navigate to={"/login"} />;

      // if (userType === "teacher") return <Navigate to={"/teacher"} />;
      // else if (userType === "supervisor")
      //   return <Navigate to={"/supervisor"} />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
