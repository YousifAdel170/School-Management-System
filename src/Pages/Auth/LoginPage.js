import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

const LoginPage = () => {
  return (
    <div style={{ flex: "1" }}>
      <NavBar />{" "}
      <Container>
        <Row className="py-5 d-flex justify-content-center">
          <Col sm="12" className="d-flex flex-column">
            <label className="mx-auto title-login">Log Into Your Account</label>
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
            <button className="btn-login mx-auto mt-4">Login</button>
            <label className="mx-auto mt-4">
              Don't have an account?{" "}
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                {" "}
                <span style={{ cursor: "pointer" }} className="change-link">
                  Sign Up
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
