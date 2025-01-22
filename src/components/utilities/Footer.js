import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const dataLanguage = useSelector((state) => state.language);

  return (
    <div className={`footer-background footer pt-4 light-mode`}>
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col
            sm="6"
            className="d-flex align-items-center mobile-footer-center"
          >
            <div className="footer-text mx-2">
              {dataLanguage === "ar"
                ? "الشروط والأحكام"
                : "Terms and Conditions"}
            </div>
            <div className="footer-text mx-2">
              {dataLanguage === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </div>
            <div className="footer-text mx-2">
              {dataLanguage === "ar" ? "اتصل بنا" : "Contact Us"}
            </div>
          </Col>
          <Col sm="6" className="mobile-footer-center footer-center">
            <div className="d-flex pt-3 mx-2">
              <i className="fa-solid fa-phone mx-2"></i>
              <p className="footer-phone mx-2">0123456789</p>
            </div>
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
        <Row className="d-flex justify-content-center">
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

export default Footer;
