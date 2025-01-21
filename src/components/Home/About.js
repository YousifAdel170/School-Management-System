import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import about from "../../assets/imgs/about.jpg";
import { Link } from "react-router-dom";
import "./About.css";
import { useSelector } from "react-redux";

const About = () => {
  const dataDarkMode = useSelector((state) => state.darkMode);
  const aboutData = {
    heading: "Welcome to Our School!",
    paragraph: `
    Our top-tier curriculum ensures students reach their full academic
    potential with expert guidance. Our teachers are highly qualified,
    and our educational programs are designed to challenge students
    while fostering a passion for learning. We emphasize critical
    thinking, problem-solving skills, and a deep understanding of the
    subjects taught. Every student is given personalized attention to
    help them excel in their academic journey. In addition to our
    rigorous academic standards, we offer a range of enrichment
    opportunities, including honors courses, advanced placements, and
    independent study programs that allow students to pursue specialized
    interests. Our school’s commitment to academic excellence is evident
    in our consistently high graduation rates and the success of our
    students in national and international assessments.
  `,
    details: [
      { icon: "fa fa-arrow-right", text: "Teaching Staff" },
      { icon: "fa fa-arrow-right", text: "Classes" },
      { icon: "fa fa-arrow-right", text: "Subjects" },
    ],
  };
  return (
    <Container className="about" id="#about">
      {" "}
      <Row className="text-center heading">
        <h2
          className={`mb-5 ${
            dataDarkMode ? "main-dark-color" : "main-blue-color "
          }`}
        >
          About Us
        </h2>
      </Row>
      <Row>
        <Col lg="4">
          <div className="h-100">
            <img
              className="w-100 h-100 mobile-image-hidden"
              src={about}
              alt="About Img"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Col>
        <Col lg="8">
          <h3 className="mb-2">{aboutData.heading}</h3>
          <p className="mb-4">{aboutData.paragraph}</p>
          <Row className="mb-4">
            {aboutData.details.length
              ? aboutData.details.map((detail, index) => (
                  <Col xs="6" key={index}>
                    <p className="mb-0">
                      <i className={`${detail.icon} text-primary me-2`}></i>
                      {detail.text}
                    </p>
                  </Col>
                ))
              : null}
          </Row>
          <Link
            to="/"
            className={`btn btn-primary py-3 px-5 mt-2 ${
              dataDarkMode ? "dark-mode" : "light-mode"
            }`}
            href="#staff"
          >
            Read More
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
