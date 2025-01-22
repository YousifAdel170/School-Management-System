import React from "react";
import "./Landing.css";
import { useSelector } from "react-redux";

const Landing = () => {
  const dataLanguage = useSelector((state) => state.language);

  return (
    <div className="landing">
      <div className="overlay"></div>
      <div className="intro-text">
        <h1>{dataLanguage === "ar" ? "مرحبًا" : "Hello There"}</h1>
        <p>
          {dataLanguage === "ar"
            ? "نرحب بكم جميعًا! نأمل أن يوفر موقعنا لكم مقدمة مفيدة عن مدرستنا."
            : "Greetings To You All! We hope our website provides you with a helpful introduction to our school."}
        </p>
      </div>
    </div>
  );
};

export default Landing;
