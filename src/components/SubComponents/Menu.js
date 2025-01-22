import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ language }) => {
  return (
    <div className="links-mobile links">
      <span className="icon-mobile icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <ul>
        <li>
          <Link to="/">{language === "ar" ? "الصفحة الرئيسية" : "Home"}</Link>
        </li>
        <li>
          <Link to="/register">{language === "ar" ? "تسجيل" : "Register"}</Link>
        </li>
        <li>
          <Link to="/login">
            {language === "ar" ? "تسجيل الدخول" : "Login"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
