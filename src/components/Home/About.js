// Import React
import React from "react";

// Import necessary components from React Bootstrap
import { Col, Row, Container } from "react-bootstrap";

// Import necessary components from React Router Dom
import { Link } from "react-router-dom";

// Import useSelector to access Redux store
import { useSelector } from "react-redux";

// Import custom CSS for styling
import "./About.css";

// Import About image
import about from "../../assets/imgs/about.jpg";

// The About component
const About = () => {
  // Getting dark mode and language settings from Redux store
  const dataDarkMode = useSelector((state) => state.darkMode);
  const dataLanguage = useSelector((state) => state.language);

  // Data for the "About" section, dynamic based on the language
  const aboutData = {
    // Heading changes based on selected language (Arabic or English)
    heading: `${
      dataLanguage === "ar"
        ? "مرحبًا بكم في مدرستنا!"
        : "Welcome to Our School!"
    }`,

    // Paragraph changes based on selected language (Arabic or English)
    paragraph: `
    ${
      dataLanguage === "ar"
        ? `مناهجنا التعليمية ذات المستوى العالي تضمن للطلاب تحقيق كامل إمكاناتهم الأكاديمية تحت إشراف الخبراء. يتمتع معلمونا بمؤهلات عالية، وبرامجنا التعليمية مصممة لتحدي الطلاب وتعزيز شغفهم بالتعلم. نركز على التفكير النقدي، ومهارات حل المشكلات، والفهم العميق للمواد التي يتم تدريسها. يحصل كل طالب على اهتمام شخصي لمساعدته على التفوق في رحلته الأكاديمية.
بالإضافة إلى معاييرنا الأكاديمية الصارمة، نقدم مجموعة متنوعة من الفرص الإثرائية، بما في ذلك دورات الشرف، والدورات المتقدمة، وبرامج الدراسة المستقلة التي تتيح للطلاب متابعة اهتمامات متخصصة. التزام مدرستنا بالتميز الأكاديمي واضح في معدلات التخرج المرتفعة بشكل مستمر ونجاح طلابنا في التقييمات الوطنية والدولية.`
        : `Our top-tier curriculum ensures students reach their full academic potential with expert guidance. Our teachers are highly qualified, and our educational programs are designed to challenge students
    while fostering a passion for learning. We emphasize critical
    thinking, problem-solving skills, and a deep understanding of the
    subjects taught. Every student is given personalized attention to
    help them excel in their academic journey. In addition to our
    rigorous academic standards, we offer a range of enrichment
    opportunities, including honors courses, advanced placements, and
    independent study programs that allow students to pursue specialized
    interests. Our school’s commitment to academic excellence is evident
    in our consistently high graduation rates and the success of our
    students in national and international assessments.`
    }  
  `,

    // Additional details for the "About" section, such as teaching staff, classes, subjects (Dynamic icon based on language, Text based on language)
    details: [
      {
        icon: `fa ${
          dataLanguage === "ar" ? "fa-arrow-left" : "fa-arrow-right"
        }`,
        text: `${dataLanguage === "ar" ? "هيئة التدريس" : "Teaching Staff"}`,
      },
      {
        icon: `fa ${
          dataLanguage === "ar" ? "fa-arrow-left" : "fa-arrow-right"
        }`,
        text: `${dataLanguage === "ar" ? "الفصول الدراسية" : "Classes"}`,
      },
      {
        icon: `fa ${
          dataLanguage === "ar" ? "fa-arrow-left" : "fa-arrow-right"
        }`,
        text: `${dataLanguage === "ar" ? "المواد الدراسية" : "Subjects"}`,
      },
    ],
  };

  return (
    // Container for the "About" section
    <Container className="about" id="#about">
      {/* Heading section */}
      <Row className="text-center heading">
        <h2 className={`mb-5`} style={{ color: "var(--main-color)" }}>
          {dataLanguage === "ar" ? "من نحن" : "About Us"}
        </h2>
      </Row>

      <Row>
        {/* Content section */}
        <Col lg="4">
          {/* Image  section */}
          <div className="h-100">
            <img
              className="w-100 h-100 mobile-image-hidden"
              src={about}
              alt="About Img"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Col>

        {/* Text content section */}
        <Col lg="8">
          {/* Heading for the about section */}
          <h3 className="mb-2">{aboutData.heading}</h3>

          {/* Paragraph content */}
          <p className="mb-4">{aboutData.paragraph}</p>

          {/* Additional details section */}
          <Row className="mb-4">
            {aboutData.details.length
              ? aboutData.details.map((detail, index) => (
                  <Col xs="6" key={index}>
                    <p className="mb-0">
                      {/* Display icon and text */}
                      <i
                        className={`${detail.icon} ${
                          dataLanguage === "ar" ? "ms-2" : "me-2"
                        }`}
                        style={{ color: "var(--main-color)" }}
                      ></i>
                      {/* Text for the detail */}
                      {detail.text}
                    </p>
                  </Col>
                ))
              : null}
          </Row>

          {/* Link to another section or page */}
          <Link
            to="/"
            className={`btn btn-primary py-3 px-5 mt-2 ${
              dataDarkMode ? "dark-mode" : "light-mode"
            }`}
            href="#staff"
          >
            {dataLanguage === "ar" ? "اقرأ المزيد" : "Read More"}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

// Export the About component for use in other parts of the application
export default About;
