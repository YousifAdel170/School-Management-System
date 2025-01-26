// Import React
import React from "react";

// Importing Bootstrap components
import { Col, Container, Row } from "react-bootstrap";

// Import useSelector to get language from Redux
import { useSelector } from "react-redux";

// Import Link for navigating between pages
import { Link } from "react-router-dom";

// Import custom CSS for styling
import "./TeachingStaff.css";

// Import  Images
import male from "../../assets/imgs/male.jpg";
import female from "../../assets/imgs/female.png";

// TeachingStaff component - displays the list of instructors based on the selected language
const TeachingStaff = () => {
  // Using Redux to get the current language preference (Arabic or English)
  const language = useSelector((state) => state.language); // Get language from the Redux store

  // Social media icons for the instructors
  const icons = ["fab fa-facebook-f", "fab fa-twitter", "fab fa-instagram"];

  // Defining the list of instructors with their names, subjects, and gender-based images
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
        ];

  return (
    <Container className="teaching-staff" id="teaching-staff">
      {/* Section title */}
      <Row className="text-center">
        <h2 className="mb-5">
          {/* Heading dynamically changes based on the language */}
          {language === "ar" ? "المعلمين الخبراء" : "Expert Instructors"}
        </h2>
      </Row>

      {/* Displaying instructors in a grid layout */}
      <Row className="gx-4 row-staff">
        {instructors.length
          ? instructors.map((instructor, index) => (
              <Col className="teaching-staff-card" key={index}>
                {/* Instructor image */}
                <div className="image-div pt-4">
                  <img
                    src={instructor.gender}
                    alt={`${instructor.gender} Img`}
                  />
                </div>

                {/* Instructor name and subject */}
                <div className="text-center pt-4">
                  <h5 className="mb-0">{instructor.name}</h5>
                  <small>{instructor.subject}</small>
                </div>

                {/* Social media links for each instructor */}
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

// Exporting the TeachingStaff component for use in other parts of the application
export default TeachingStaff;
