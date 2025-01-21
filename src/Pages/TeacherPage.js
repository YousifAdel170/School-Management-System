import React from "react";
import NavBar from "../components/utilities/NavBar";
import Aside from "../components/utilities/Aside";
import { teacherLists } from "../scripts/config";
import { Outlet } from "react-router-dom";

const TeacherPage = () => {
  const heading = "Teacher";
  return (
    <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
      <NavBar logout={1} />
      <div style={{ flex: "1", display: "flex" }}>
        <Aside lists={teacherLists} heading={heading} />
        <Outlet />
      </div>
    </div>
  );
};

export default TeacherPage;
