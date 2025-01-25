import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/imgs/logo.png";
import dark_logo from "../../assets/imgs/logo-dark-mode.png";

import Menu from "../SubComponents/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDarkModeAction,
  toggleLanguageAction,
} from "../../redux/actions/actions";

import "./NavBar.css";

const NavBar = ({ logout }) => {
  const [language, setLanguage] = useState();
  const [darkMode, setdarkMode] = useState();

  const dispatchModes = useDispatch();

  const toggleLanguageFunction = () => {
    dispatchModes(toggleLanguageAction());
  };

  const dataLanguage = useSelector((state) => state.language);
  useEffect(() => {
    setLanguage(dataLanguage);
  }, [dataLanguage]);

  const toggleDarkModeFunction = () => {
    dispatchModes(toggleDarkModeAction());
  };
  const dataDarkMode = useSelector((state) => state.darkMode);
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
    <div className={`nav-style w-100 main-mode`}>
      <Container>
        <Row className="pt-2 " style={{ position: "relative" }}>
          <Col xs="2" lg="1">
            <Link to="/">
              <img
                className="logo"
                src={`${darkMode ? dark_logo : logo}`}
                alt="Logo"
              />
            </Link>
          </Col>
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
          <Col xs="2" lg="1" className="d-flex justify-content-center">
            {" "}
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

export default NavBar;
