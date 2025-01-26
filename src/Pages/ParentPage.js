// Import React library for creating the component
import React from "react";

// Importing Outlet component to render child routes
import { Outlet } from "react-router-dom";

// Importing useSelector hook to access Redux store
import { useSelector } from "react-redux";

// Import custom components used within the parnet page
import NavBar from "../components/utilities/NavBar";
import Aside from "../components/utilities/Aside";

// Importing the parentLists configuration for sidebar items
import { parentLists } from "../scripts/config";

/**
 * ParentPage component renders the parent page layout with a navigation bar, sidebar,
 * and dynamic content based on the selected language and routing.
 */
const ParentPage = () => {
  // Using Redux to get the current language from the store
  const dataLanguage = useSelector((state) => state.language);

  // Setting the page heading based on the selected language (Arabic or English)
  const heading = dataLanguage === "ar" ? "ولي الامر" : "Parent";
  return (
    <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
      {/* Render the NavBar component with the logout option */}
      <NavBar logout={1} />

      <div style={{ flex: "1", display: "flex" }}>
        {/* Render the Aside component with dynamic list and heading */}
        <Aside lists={parentLists} heading={heading} />

        {/* Render the child route content using Outlet */}
        <Outlet />
      </div>
    </div>
  );
};

// Exporting the ParentPage component to be used in other parts of the application
export default ParentPage;
