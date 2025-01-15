import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/imgs/logo.png";
import Menu from "./SubComponents/Menu";

const NavBar = () => {
  return (
    <div className={`nav-style w-100 light-mode`}>
      <Container>
        <Row className="pt-2 " style={{ position: "relative" }}>
          <Col xs="2" lg="1">
            {" "}
            <a href="/">
              <img className="logo" src={logo} alt="Logo" />
            </a>
          </Col>
          <Col className="d-flex justify-content-end" xs="6" lg="9">
            <Menu />
          </Col>

          <Col xs="2" lg="1" className="d-flex justify-content-center">
            {" "}
            <button className={`language-btn light-mode`}>English</button>
          </Col>
          <Col xs="2" lg="1" className="d-flex justify-content-center">
            {" "}
            <button className={`language-btn light-mode`}>
              <i className="fa-solid fa-moon"></i>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
