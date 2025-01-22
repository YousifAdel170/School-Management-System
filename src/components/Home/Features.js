import React from "react";
import "./Features.css";
import { useSelector } from "react-redux";

const Features = () => {
  const dataLanguage = useSelector((state) => state.language);
  const features = {
    headings: {
      first: dataLanguage === "ar" ? "التميز الأكاديمي" : "Academic Excellence",
      second: dataLanguage === "ar" ? "هيئة التدريس" : "Teaching Staff",
      third: dataLanguage === "ar" ? "الأنشطة" : "Activities",
    },
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
    icons: {
      first: "fas fa-book-open",
      second: "fas fa-chalkboard-teacher",
      third: "fas fa-running",
    },
  };
  return (
    <>
      <h2
        style={{
          color: "var(--main-color)",
          paddingTop: "var(--section-padding)",
          textAlign: "center",
        }}
      >
        {dataLanguage === "ar" ? "الميزات" : "Features"}
      </h2>
      <div className="features" id="feature">
        {Object.keys(features.headings).map((key, index) => (
          <div className="feat" key={index}>
            <i
              className={`fa-3x ${features.icons[key]} mb-4`}
              style={{ color: "var(--main-color)" }}
            ></i>
            <h3>{features.headings[key]}</h3>
            <p>{features.paragraphs[key]}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
