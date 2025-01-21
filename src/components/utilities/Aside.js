import React, { useState } from "react";
import "./Aside.css";
import { Link } from "react-router-dom";
const Aside = ({ lists, heading }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActiveClass = (index) => {
    setActiveIndex(index);
  };
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
                alt={`${list.name}`}
                title={`${list.name}`}
              >
                {list.icon ? (
                  <i className={`${list.icon}`}></i>
                ) : (
                  <i className="fa-regular fa-chart-bar fa-fw"></i>
                )}
                <span>{list.name}</span>
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
