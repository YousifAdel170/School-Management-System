// Import React
import React from "react";

// Import useSelector to access Redux store
import { useSelector } from "react-redux";

// Import custom CSS for styling
import "./Landing.css";

// Landing component - the introductory section of the website
const Landing = () => {
  // Using Redux to get the current language preference (Arabic or English)
  const dataLanguage = useSelector((state) => state.language);

  return (
    <div className="landing">
      {/* Overlay to give a visual effect on the background */}
      <div className="overlay"></div>

      {/* Introductory text section */}
      <div className="intro-text">
        {/* Main heading changes based on the selected language */}
        <h1>{dataLanguage === "ar" ? "مرحبًا بكم" : "Hello There"}</h1>

        {/* Description paragraph changes based on the selected language */}
        <p>
          {dataLanguage === "ar"
            ? "نرحب بكم جميعًا! نأمل أن يوفر موقعنا لكم مقدمة مفيدة عن مدرستنا."
            : "Greetings To You All! We hope our website provides you with a helpful introduction to our school."}
        </p>
      </div>
    </div>
  );
};

// Exporting the Landing component for use in other parts of the application
export default Landing;
