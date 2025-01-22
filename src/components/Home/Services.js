import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux"; // Import useSelector to get language from Redux
import "./Services.css";

const Services = () => {
  const language = useSelector((state) => state.language); // Get language from the Redux store

  const subjects =
    language === "ar"
      ? [
          "العربية",
          "الإنجليزية",
          "الرياضيات",
          "الهولندية",
          "التاريخ",
          "الجغرافيا",
          "العلوم",
          "الحاسوب",
        ]
      : [
          "Arabic",
          "English",
          "Mathematics",
          "Dutch",
          "History",
          "Geography",
          "Science",
          "Computer",
        ]; // Adjust subject names based on the selected language

  return (
    <Container className="subjects" id="course">
      <h2>{language === "ar" ? "الدورات المتميزة" : "Top courses"}</h2>
      <Row className="gx-4">
        {subjects.length
          ? subjects.map((subject, index) => (
              <Col key={index} className="course-card">
                <div className="text-center pt-3">
                  <div className="p-4">
                    <i
                      className="fa fa-3x fa-book-open mb-4"
                      style={{ color: "var(--main-color)" }}
                    ></i>
                    <h5 className="mb-3">{subject}</h5>
                  </div>
                </div>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};

export default Services;
