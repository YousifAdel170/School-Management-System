// Import React library for creating the component
import React from "react";

// Importing Outlet component to render child routes
import { Outlet } from "react-router-dom";

// Importing useSelector hook to access Redux store
import { useSelector } from "react-redux";

// Import custom components used within the parnet page
import NavBar from "../components/utilities/NavBar";
import Aside from "../components/utilities/Aside";

// Importing the teacherLists configuration for sidebar items
import { teacherLists } from "../scripts/config";

/**
 * TeacherPage component renders the teacher page layout with a navigation bar, sidebar,
 * and dynamic content based on the selected language and routing.
 */
const TeacherPage = () => {
  // Using Redux to get the current language from the store
  const dataLanguage = useSelector((state) => state.language);

  // Setting the page heading based on the selected language (Arabic or English)
  const heading = dataLanguage === "ar" ? "المعلم" : "Teacher";
  return (
    <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
      {/* Render the NavBar component with the logout option */}
      <NavBar logout={1} />

      <div style={{ flex: "1", display: "flex" }}>
        {/* Render the Aside component with dynamic list and heading */}
        <Aside lists={teacherLists} heading={heading} />

        {/* Render the child route content using Outlet */}
        <Outlet />
      </div>
    </div>
  );
};

// Exporting the TeacherPage component to be used in other parts of the application
export default TeacherPage;
