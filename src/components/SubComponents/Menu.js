import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="links-mobile links">
      <span className="icon-mobile icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
