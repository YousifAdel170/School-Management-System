import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux"; // Import useSelector to get language from Redux
import { Link } from "react-router-dom";
import male from "../../assets/imgs/male.jpg";
import female from "../../assets/imgs/female.png";
import "./TeachingStaff.css";

const TeachingStaff = () => {
  const language = useSelector((state) => state.language); // Get language from the Redux store

  const icons = ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram"];

  const instructors =
    language === "ar"
      ? [
          { name: "أحمد علي", subject: "العربية", gender: male },
          { name: "مروة محمد", subject: "الحاسوب", gender: female },
          { name: "محمد مصطفى", subject: "العلوم", gender: male },
          { name: "فاطمة أحمد", subject: "الإنجليزية", gender: female },
        ]
      : [
          { name: "Ahmed Ali", subject: "Arabic", gender: male },
          { name: "Mona Mohamed", subject: "Computer", gender: female },
          { name: "Mohab Mostafa", subject: "Science", gender: male },
          { name: "Fatma Ahmed", subject: "English", gender: female },
        ]; // Adjust instructor details based on the selected language

  return (
    <Container className="teaching-staff" id="teaching-staff">
      <Row className="text-center">
        <h2 className="mb-5">
          {language === "ar" ? "المعلمين الخبراء" : "Expert Instructors"}
        </h2>
      </Row>
      <Row className="gx-4 row-staff">
        {instructors.length
          ? instructors.map((instructor, index) => (
              <Col className="teaching-staff-card" key={index}>
                <div className="image-div pt-4">
                  <img
                    src={instructor.gender}
                    alt={`${instructor.gender} Img`}
                  />
                </div>

                <div className="text-center pt-4">
                  <h5 className="mb-0">{instructor.name}</h5>
                  <small>{instructor.subject}</small>
                </div>
                <div className="d-flex justify-content-center pb-4">
                  <div className="pt-2 px-1 mt-2">
                    {icons.length
                      ? icons.map((icon, index) => (
                          <Link
                            to={"/"}
                            className="btn btn-sm-square btn-primary mx-1"
                            key={index}
                          >
                            <i className={icon}></i>
                          </Link>
                        ))
                      : null}
                  </div>
                </div>
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};

export default TeachingStaff;
