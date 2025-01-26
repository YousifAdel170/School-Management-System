// React library and hooks (useEffect, useState)
import React, { useEffect, useState } from "react";

// React-Bootstrap components for grid system
import { Col, Container, Row } from "react-bootstrap";

// Importing Link for routing
import { Link } from "react-router-dom";

// Redux hooks to dispatch actions and access the state
import { useDispatch, useSelector } from "react-redux";

// Importing the Custom Menu component
import Menu from "../SubComponents/Menu";

// Importing customized actions [Redux]
import {
  toggleDarkModeAction,
  toggleLanguageAction,
} from "../../redux/actions/actions";

// Custom CSS file for styling the NavBar
import "./NavBar.css";

// Importing the Logo Imags with both modes
import logo from "../../assets/imgs/logo.png";
import dark_logo from "../../assets/imgs/logo-dark-mode.png";

// NavBar component that displays the Navbar section of the website
const NavBar = ({ logout }) => {
  // Local state variables for language and dark mode
  const [language, setLanguage] = useState();
  const [darkMode, setdarkMode] = useState();

  // Dispatch function to trigger actions
  const dispatchModes = useDispatch();

  // Function to toggle language (switching between Arabic and English)
  const toggleLanguageFunction = () => {
    // Dispatching the language toggle action
    dispatchModes(toggleLanguageAction());
  };

  // Accessing the current language state from Redux
  const dataLanguage = useSelector((state) => state.language);

  // Syncing the local language state with Redux whenever the language changes
  useEffect(() => {
    setLanguage(dataLanguage);
  }, [dataLanguage]);

  // Function to toggle dark mode
  const toggleDarkModeFunction = () => {
    // Dispatching the dark mode toggle action
    dispatchModes(toggleDarkModeAction());
  };

  // Accessing the current dark mode state from Redux
  const dataDarkMode = useSelector((state) => state.darkMode);

  // Applying dark/light mode styles based on the current dark mode state
  useEffect(() => {
    setdarkMode(dataDarkMode);
    if (dataDarkMode) {
      // Dark mode styles
      document.documentElement.style.setProperty("--main-color", "#333");
      document.documentElement.style.setProperty("--hover-main-color", "black");
      document.documentElement.style.setProperty(
        "--main-color-rgb",
        "51, 51, 51"
      );
    } else {
      // Light mode styles
      document.documentElement.style.setProperty("--main-color", "#0d6efd");
      document.documentElement.style.setProperty(
        "--hover-main-color",
        "#0056b3"
      );
      document.documentElement.style.setProperty(
        "--main-color-rgb",
        "13, 110, 253"
      );
    }
  }, [dataDarkMode]);

  return (
    // Main NavBar container with a custom class for styling
    <div className={`nav-style w-100 main-mode`}>
      <Container>
        {/* Row to structure the NavBar items */}
        <Row className="pt-2 " style={{ position: "relative" }}>
          {/* Column for the logo */}
          <Col xs="2" lg="1">
            {/* Logo link to homepage */}
            <Link to="/">
              <img
                className="logo"
                src={`${darkMode ? dark_logo : logo}`}
                alt="Logo"
              />
            </Link>
          </Col>

          {/* Column for the menu or logout button */}
          <Col className="d-flex justify-content-end" xs="6" lg="9">
            {logout ? (
              <button className={`language-btn main-mode`}>
                <Link
                  to={"/login"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {language === "ar" ? "تسجيل الخروج" : "Logout"}
                </Link>
              </button>
            ) : (
              <Menu language={dataLanguage} />
            )}
          </Col>

          {/* Column for toggling language */}
          <Col xs="2" lg="1" className="d-flex justify-content-center">
            {" "}
            <button
              onClick={() => toggleLanguageFunction()}
              className={`language-btn main-mode`}
            >
              {" "}
              {language === "ar" ? "English" : "العربية"}
            </button>
          </Col>

          {/* Column for toggling dark mode */}
          <Col xs="2" lg="1" className="d-flex justify-content-center">
            {/* Conditionally displaying dark mode icon (moon) or light mode icon (sun) */}
            <button
              onClick={() => toggleDarkModeFunction()}
              className={`language-btn main-mode`}
            >
              {darkMode ? (
                <i className="fa-solid fa-moon"></i>
              ) : (
                <i className="fa-solid fa-sun"></i>
              )}{" "}
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Exporting NavBar component to be used in other parts of the application
export default NavBar;
