// Import React
import React from "react";

// Import useSelector to access Redux store
import { useSelector } from "react-redux";

// Import custom CSS for styling
import "./Features.css";

// Features component displaying key features of the application
const Features = () => {
  // Using Redux to get the current language preference (Arabic or English)
  const dataLanguage = useSelector((state) => state.language);

  // Object holding the feature data (headings, paragraphs, and icons), dynamically set based on the selected language
  const features = {
    // Headings for the features section
    headings: {
      first: dataLanguage === "ar" ? "التميز الأكاديمي" : "Academic Excellence",
      second: dataLanguage === "ar" ? "هيئة التدريس" : "Teaching Staff",
      third: dataLanguage === "ar" ? "الأنشطة" : "Activities",
    },

    // Corresponding paragraphs for each feature heading
    paragraphs: {
      first:
        dataLanguage === "ar"
          ? "مناهجنا التعليمية ذات المستوى العالي تضمن للطلاب تحقيق كامل إمكاناتهم الأكاديمية تحت إشراف الخبراء."
          : "Our top-tier curriculum ensures students reach their full academic potential with expert guidance.",
      second:
        dataLanguage === "ar"
          ? "معلمونا المتفانون يقدمون الدعم الشخصي لنمو كل طالب."
          : "Our dedicated teachers provide personalized support for every student’s growth.",
      third:
        dataLanguage === "ar"
          ? "نقدم أنشطة متنوعة لمساعدة الطلاب على استكشاف اهتمامات جديدة وبناء مهارات قيمة."
          : "We offer diverse activities to help students explore new interests and build valuable skills.",
    },

    // Icons for each feature (representing the categories)
    icons: {
      first: "fas fa-book-open",
      second: "fas fa-chalkboard-teacher",
      third: "fas fa-running",
    },
  };

  return (
    <>
      {/* Section title for the Features section */}
      <h2
        style={{
          color: "var(--main-color)",
          paddingTop: "var(--section-padding)",
          textAlign: "center",
        }}
      >
        {/* Title changes based on the selected language */}
        {dataLanguage === "ar" ? "الميزات" : "Features"}
      </h2>

      {/* Main container for the features */}
      <div className="features" id="feature">
        {/* Looping through the feature headings and rendering each feature dynamically */}
        {Object.keys(features.headings).map((key, index) => (
          <div className="feat" key={index}>
            {/* Displaying the icon associated with each feature */}
            <i
              className={`fa-3x ${features.icons[key]} mb-4`}
              style={{ color: "var(--main-color)" }}
            ></i>

            {/* Displaying the heading of the feature */}
            <h3>{features.headings[key]}</h3>

            {/* Displaying the corresponding paragraph of the feature */}
            <p>{features.paragraphs[key]}</p>
          </div>
        ))}
      </div>
    </>
  );
};

// Exporting the Features component for use in other parts of the application
export default Features;
