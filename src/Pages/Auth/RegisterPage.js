import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

const RegisterPage = () => {
  return (
    <div style={{ flex: "1" }}>
      <NavBar />{" "}
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center">
          <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto title-login">Welcome! Sign Up</label>
            <input
              placeholder="Username"
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
              placeholder="Email Address"
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="Password"
              type="password"
              className="user-input text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4">Register</button>
            <label className="mx-auto mt-4">
              Already registered?{" "}
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                {" "}
                <span style={{ cursor: "pointer" }} className="change-link">
                  Log In
                </span>
              </Link>
            </label>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
