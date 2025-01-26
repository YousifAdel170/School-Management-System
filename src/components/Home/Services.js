// Import React
import React from "react";

// Importing Bootstrap components
import { Col, Container, Row } from "react-bootstrap";

// Import useSelector to get language from Redux
import { useSelector } from "react-redux";

// Import custom CSS for styling
import "./Services.css";

// Services component - displays a list of courses based on the selected language
const Services = () => {
  // Using Redux to get the current language preference (Arabic or English)
  const language = useSelector((state) => state.language); // Get language from the Redux store

  // Defining the list of subjects based on the selected language
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
        ];

  return (
    <Container className="subjects" id="course">
      {/* Heading for the courses section, dynamically changes based on the language */}
      <h2>{language === "ar" ? "الدورات المتميزة" : "Top courses"}</h2>

      {/* Bootstrap grid to display the courses */}
      <Row className="gx-4">
        {/* Iterating over the subjects and rendering them in individual course cards */}
        {subjects.length
          ? subjects.map((subject, index) => (
              <Col key={index} className="course-card">
                {/* Card layout for each subject */}
                <div className="text-center pt-3">
                  <div className="p-4">
                    {/* Icon representing the course */}
                    <i
                      className="fa fa-3x fa-book-open mb-4"
                      style={{ color: "var(--main-color)" }}
                    ></i>

                    {/* Subject name */}
                    <h5 className="mb-3">{subject}</h5>
                  </div>
                </div>
              </Col>
            ))
          : null}
        {/* Render nothing if no subjects */}
      </Row>
    </Container>
  );
};

// Exporting the Services component for use in other parts of the application
export default Services;
