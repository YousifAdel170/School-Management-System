import React from "react";
import NavBar from "../components/utilities/NavBar";
import Aside from "../components/utilities/Aside";
import { parentLists } from "../scripts/config";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ParentPage = () => {
  const dataLanguage = useSelector((state) => state.language);
  const heading = dataLanguage === "ar" ? "ولي الامر" : "Parent";
  return (
    <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
      <NavBar logout={1} />
      <div style={{ flex: "1", display: "flex" }}>
        <Aside lists={parentLists} heading={heading} />
        <Outlet />
      </div>
    </div>
  );
};

export default ParentPage;
