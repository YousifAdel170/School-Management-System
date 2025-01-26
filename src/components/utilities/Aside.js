// React and useState hook for managing active link state
import React, { useState } from "react";

// Link component from React Router for navigation
import { Link } from "react-router-dom";

// useSelector hook to access the Redux store's language state
import { useSelector } from "react-redux";

// Custom CSS for styling the sidebar
import "./Aside.css";

// Aside component to display a sidebar with links
const Aside = ({ lists, heading }) => {
  // State variable to track the active link (index of the clicked link)
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to set the active class based on the clicked link
  const handleActiveClass = (index) => {
    // Update the activeIndex to the clicked link's index
    setActiveIndex(index);
  };

  // Accessing the current language from Redux store (Arabic or English)
  const dataLanguage = useSelector((state) => state.language);

  return (
    <div className="sidebar">
      {/* Heading of the sidebar */}
      <h3>{heading}</h3>

      {/* Conditional rendering to check if lists are available */}
      {lists && lists.length > 0 ? (
        // If lists are available, display them in an unordered list
        <ul className="aside-links">
          {/* Loop through the lists and display each link */}
          {lists.map((list, index) => (
            <li key={index}>
              {/* Link component for navigation with dynamic URL */}
              <Link
                to={list.link}
                className={activeIndex === index ? "active" : ""}
                onClick={() => handleActiveClass(index)}
                alt={`${dataLanguage === "ar" ? list.name.ar : list.name.en}`}
                title={`${dataLanguage === "ar" ? list.name.ar : list.name.en}`}
              >
                {/* Icon rendering, either custom icon from list or a default icon */}
                {list.icon ? (
                  <i
                    className={`${list.icon}`}
                    style={{ marginLeft: "15px" }}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-chart-bar fa-fw"
                    style={{ marginLeft: "15px" }}
                  ></i>
                )}

                {/* Text rendering based on the selected language (Arabic or English) */}
                <span>{`${
                  dataLanguage === "ar" ? list.name.ar : list.name.en
                }`}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No links available</p>
      )}
    </div>
  );
};

// Exporting the Aside component to be used elsewhere in the application
export default Aside;
