import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  const subjects = [
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
      <h2>Top courses</h2>
      <Row className="gx-4">
        {subjects.length
          ? subjects.map((subject, index) => (
              <Col key={index} className="course-card">
                <div className="text-center pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
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
