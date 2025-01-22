import React from "react";
import NavBar from "../components/utilities/NavBar";
import Aside from "../components/utilities/Aside";
import { studentLists } from "../scripts/config";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const StudentPage = () => {
  const dataLanguage = useSelector((state) => state.language);
  const heading = dataLanguage === "ar" ? "الطالب" : "Student";
  return (
    <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
      <NavBar logout={1} />
      <div style={{ flex: "1", display: "flex" }}>
        <Aside lists={studentLists} heading={heading} />
        <Outlet />
      </div>
    </div>
  );
};

export default StudentPage;
