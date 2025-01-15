import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-background footer pt-2">
      <Container>
        <Row className="d-flex justify-content-between align-items-center ">
          <Col
            sm="6"
            className="d-flex align-items-center mobile-footer-center"
          >
            <div className="footer-text">Terms and Conditions</div>
            <div className="footer-text mx-2">Privacy Policy</div>
            <div className="footer-text mx-2">Contact Us</div>
          </Col>
          <Col sm="6" className="mobile-footer-center footer-center">
            <div className="d-flex pt-3 mx-2">
              <i className="fa-solid fa-phone mx-2"></i>{" "}
              <p className="footer-phone mx-2">0123456789</p>
            </div>
            <div className="d-flex mx-2">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="d-flex mx-2">
              <i className="fa-brands fa-twitter"></i>{" "}
            </div>
            <div className="d-flex mx-2">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
