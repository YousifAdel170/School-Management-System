import React, { useState } from "react";
import "./Aside.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Aside = ({ lists, heading }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActiveClass = (index) => {
    setActiveIndex(index);
  };
  const dataLanguage = useSelector((state) => state.language);

  return (
    <div className="sidebar">
      <h3>{heading}</h3>
      {lists && lists.length > 0 ? (
        <ul className="aside-links">
          {lists.map((list, index) => (
            <li key={index}>
              <Link
                to={list.link}
                className={activeIndex === index ? "active" : ""}
                onClick={() => handleActiveClass(index)}
                alt={`${dataLanguage === "ar" ? list.name.ar : list.name.en}`}
                title={`${dataLanguage === "ar" ? list.name.ar : list.name.en}`}
              >
                {list.icon ? (
                  <i
                    className={`${list.icon}`}
                    style={{ marginLeft: "15px" }}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-chart-bar fa-fw"
                    style={{ marginLeft: "15px" }}
                  ></i>
                )}
                <span>{`${
                  dataLanguage === "ar" ? list.name.ar : list.name.en
                }`}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No links available</p>
      )}
    </div>
  );
};

export default Aside;
