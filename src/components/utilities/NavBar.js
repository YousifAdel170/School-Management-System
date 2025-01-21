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
  }, [dataDarkMode]);

  return (
    <div className={`nav-style w-100 ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Container>
        <Row className="pt-2 " style={{ position: "relative" }}>
          <Col xs="2" lg="1">
            {" "}
            <a href="/">
              <img
                className="logo"
                src={`${darkMode ? dark_logo : logo}`}
                alt="Logo"
              />
            </a>
          </Col>
          <Col className="d-flex justify-content-end" xs="6" lg="9">
            {logout ? (
              <button
                className={`language-btn ${
                  darkMode ? "dark-mode" : "light-mode"
                }`}
              >
                <Link
                  to={"/"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Logout
                </Link>
              </button>
            ) : (
              <Menu />
            )}
          </Col>

          <Col xs="2" lg="1" className="d-flex justify-content-center">
            {" "}
            <button
              // onClick={() => toggleLanguageFunction()}
              className={`language-btn ${
                darkMode ? "dark-mode" : "light-mode"
              } `}
            >
              {" "}
              {language === "ar" ? "English" : "العربية"}
            </button>
          </Col>
          <Col xs="2" lg="1" className="d-flex justify-content-center">
            {" "}
            <button
              // onClick={() => toggleDarkModeFunction()}
              className={`language-btn ${
                darkMode ? "dark-mode" : "light-mode"
              } `}
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
