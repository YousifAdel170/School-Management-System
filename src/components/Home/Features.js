import React from "react";
import "./Features.css";

const Features = () => {
  const features = {
    headings: {
      first: "Academic Excellence",
      second: "Teaching Staff",
      third: "Activities",
    },
    paragraphs: {
      first:
        "Our top-tier curriculum ensures students reach their full academic potential with expert guidance.",
      second:
        "Our dedicated teachers provide personalized support for every student’s growth.",
      third:
        "We offer diverse activities to help students explore new interests and build valuable skills.",
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
        Features
      </h2>
      <div className="features" id="feature">
        {Object.keys(features.headings).map((key, index) => (
          <div className="feat" key={index}>
            <i className={`fa-3x ${features.icons[key]} text-primary mb-4`}></i>
            <h3>{features.headings[key]}</h3>
            <p>{features.paragraphs[key]}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
