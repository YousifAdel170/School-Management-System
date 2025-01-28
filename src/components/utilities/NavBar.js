// React react
import React from "react";

// React-Bootstrap components for grid system
import { Col, Container, Row } from "react-bootstrap";

// Importing Link for routing
import { Link } from "react-router-dom";

// Redux hooks to dispatch actions and access the state
import { useSelector } from "react-redux";

// Importing the Custom Menu component
import Menu from "../SubComponents/Menu";

// Custom CSS file for styling the NavBar
import "./NavBar.css";

// Importing the Logo Imags with both modes
import logo from "../../assets/imgs/logo.png";
import dark_logo from "../../assets/imgs/logo-dark-mode.png";

// NavBar component that displays the Navbar section of the website
const NavBar = ({ logout }) => {
  // Accessing the current language state from Redux
  const dataLanguage = useSelector((state) => state.language);

  // Accessing the current dark mode state from Redux
  const dataDarkMode = useSelector((state) => state.darkMode);

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
                src={`${dataDarkMode ? dark_logo : logo}`}
                alt="Logo"
              />
            </Link>
          </Col>

          {/* Column for the menu or logout button */}
          <Col className="d-flex justify-content-end" xs="10" lg="10">
            {logout ? (
              <button className={`language-btn main-mode`}>
                <Link
                  to={"/login"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {dataLanguage === "ar" ? "تسجيل الخروج" : "Logout"}
                </Link>
              </button>
            ) : (
              <Menu language={dataLanguage} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Exporting NavBar component to be used in other parts of the application
export default NavBar;
