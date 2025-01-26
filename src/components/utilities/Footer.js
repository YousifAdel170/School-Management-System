// React library
import React from "react";

// React-Bootstrap components for responsive layout
import { Col, Container, Row } from "react-bootstrap";

// useSelector hook to access the Redux store's language state
import { useSelector } from "react-redux";

// Custom CSS file for footer styling
import "./Footer.css";

// Footer component that displays the footer section of the website
const Footer = () => {
  // Getting the current year for copyright display
  const currentYear = new Date().getFullYear();

  // Accessing the current language (Arabic or English) from the Redux store
  const dataLanguage = useSelector((state) => state.language);

  return (
    // Main footer container with a background and padding
    <div className={`footer-background footer pt-4 main-mode`}>
      <Container>
        {/* Row for the footer links (terms, privacy policy, contact us) */}
        <Row className="d-flex justify-content-between align-items-center">
          {/* Column for the left side links */}
          <Col
            sm="6"
            className="d-flex align-items-center mobile-footer-center"
          >
            {/* Link for Terms and Conditions */}
            <div className="footer-text mx-2">
              {dataLanguage === "ar"
                ? "الشروط والأحكام"
                : "Terms and Conditions"}
            </div>

            {/* Link for Privacy Policy */}
            <div className="footer-text mx-2">
              {dataLanguage === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </div>

            {/* Link for Contact Us */}
            <div className="footer-text mx-2">
              {dataLanguage === "ar" ? "اتصل بنا" : "Contact Us"}
            </div>
          </Col>

          {/* Column for the right side (social media and contact) */}
          <Col sm="6" className="mobile-footer-center footer-center">
            {/* Phone number section */}
            <div className="d-flex pt-3 mx-2">
              <i className="fa-solid fa-phone mx-2"></i>
              <p className="footer-phone mx-2">0123456789</p>
            </div>

            {/* Social media icons */}
            <div className="d-flex mx-2">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="d-flex mx-2">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="d-flex mx-2">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </Col>
        </Row>

        {/* Row for the copyright section */}
        <Row className="d-flex justify-content-center">
          {/* Copyright text */}
          <p className="footer-text copyright">
            &copy; <span>{currentYear}</span>{" "}
            {dataLanguage === "ar"
              ? "نظام إدارة المدرسة. جميع الحقوق محفوظة."
              : "School Management System. All Rights Reserved."}
          </p>
        </Row>
      </Container>
    </div>
  );
};

// Exporting the Footer component to be used in other parts of the application
export default Footer;
