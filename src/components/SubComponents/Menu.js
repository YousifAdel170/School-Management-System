// Importing React
import React from "react";

// Importing Link for routing
import { Link } from "react-router-dom";

// Importing the CSS styles for the menu
import "./Menu.css";

// The Menu component displays a navigation menu with links that adapt based on the selected language
const Menu = ({ language }) => {
  return (
    <div className="links-mobile links">
      {/* Icon for mobile view, used for a collapsible menu */}
      <span className="icon-mobile icon">
        <span></span>
        <span></span>
        <span></span>
      </span>

      {/* List of menu links */}
      <ul>
        {/* Home link */}
        <li>
          <Link to="/">{language === "ar" ? "الصفحة الرئيسية" : "Home"}</Link>
        </li>

        {/* Register link */}
        <li>
          <Link to="/register">{language === "ar" ? "تسجيل" : "Register"}</Link>
        </li>

        {/* Login link */}
        <li>
          <Link to="/login">
            {language === "ar" ? "تسجيل الدخول" : "Login"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Exporting Menu to use in other parts of the app
export default Menu;
