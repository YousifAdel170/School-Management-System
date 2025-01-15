import React from "react";
import { Col, Row } from "react-bootstrap";
import about from "../../assets/imgs/about.jpg";
const About = () => {
  return (
    <div className="container-xxl py-5 About" id="about">
      <Row>
        <Col className="col-lg-6" style={{ minHeight: "400px" }}>
          <div className="position-relative h-100">
            <img
              className="img-fluid position-absolute w-100 h-100"
              src={about}
              alt="About Img"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Col>
        <div className="col-lg-6" data-wow-delay="0.3s">
          <h2 className="mb-2">Welcome to Our School!</h2>
          <p className="mb-4">
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
          </p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2"></i>
                Teaching Staff
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2"></i>
                Classes
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2"></i>
                Subjects
              </p>
            </div>
          </div>
          <a className="btn btn-primary py-3 px-5 mt-2" href="#staff">
            Read More
          </a>
        </div>
      </Row>
    </div>
  );
};

export default About;
