import React from "react";
import NavBar from "../components/utilities/NavBar";
import Aside from "../components/utilities/Aside";
import { Outlet } from "react-router-dom";
import { supervisorLists } from "../scripts/config";

const SupervisorPage = () => {
  const heading = "Supervisor";
  return (
    <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
      <NavBar logout={1} />
      <div style={{ flex: "1", display: "flex" }}>
        <Aside lists={supervisorLists} heading={heading} />
        <Outlet />
      </div>
    </div>
  );
};

export default SupervisorPage;
