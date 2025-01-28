// React library and hooks (useEffect, useState)
import React, { useEffect, useState } from "react";

// Redux hooks to dispatch actions and access the state
import { useDispatch, useSelector } from "react-redux";

// Importing Link for routing
import { Link } from "react-router-dom";

// Importing the CSS styles for the menu
import "./Menu.css";

// Importing customized actions [Redux]
import {
  toggleDarkModeAction,
  toggleLanguageAction,
} from "../../redux/actions/actions";

// The Menu component displays a navigation menu with links that adapt based on the selected language
const Menu = () => {
  const Menu = {
    home: { ar: "الصفحة الرئيسية", "en-US": "Home" },
    register: { ar: "تسجيل جديد", "en-US": "Register" },
    login: { ar: "تسجيل الدخول", "en-US": "Login" },
    lang: { ar: "English", "en-US": "العربية" },
    modeIcon: { dark: "fa-solid fa-moon", light: "fa-solid fa-sun" },
  };

  // Local state variables for language and dark mode
  const [language, setLanguage] = useState();
  const [darkMode, setdarkMode] = useState();

  // Dispatch function to trigger actions
  const dispatchModes = useDispatch();

  // Function to toggle language (switching between Arabic and English)
  const toggleLanguageFunction = () => {
    // Dispatching the language toggle action
    dispatchModes(toggleLanguageAction());
  };

  // Accessing the current language state from Redux
  const dataLanguage = useSelector((state) => state.language);

  // Syncing the local language state with Redux whenever the language changes
  useEffect(() => {
    const linksMobile = document.querySelector(".links-mobile ul");
    setLanguage(dataLanguage);
    if (dataLanguage === "ar") {
      linksMobile.style.right = "-80px";
      document.documentElement.style.setProperty(
        "--right-before-mobile",
        "80px"
      );
    } else {
      linksMobile.style.right = "0";
      document.documentElement.style.setProperty(
        "--right-before-mobile",
        "5px"
      );
    }
  }, [dataLanguage]);

  // Function to toggle dark mode
  const toggleDarkModeFunction = () => {
    // Dispatching the dark mode toggle action
    dispatchModes(toggleDarkModeAction());
  };

  // Accessing the current dark mode state from Redux
  const dataDarkMode = useSelector((state) => state.darkMode);

  // Applying dark/light mode styles based on the current dark mode state
  useEffect(() => {
    setdarkMode(dataDarkMode);
    if (dataDarkMode) {
      // Dark mode styles
      document.documentElement.style.setProperty("--main-color", "#333");
      document.documentElement.style.setProperty("--hover-main-color", "black");
      document.documentElement.style.setProperty(
        "--main-color-rgb",
        "51, 51, 51"
      );
    } else {
      // Light mode styles
      document.documentElement.style.setProperty("--main-color", "#0d6efd");
      document.documentElement.style.setProperty(
        "--hover-main-color",
        "#0056b3"
      );
      document.documentElement.style.setProperty(
        "--main-color-rgb",
        "13, 110, 253"
      );
    }
  }, [dataDarkMode]);

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
          <Link to="/">{Menu.home[language]}</Link>
        </li>

        {/* Register link */}
        <li>
          <Link to="/register">{Menu.register[language]}</Link>
        </li>

        {/* Login link */}
        <li>
          <Link to="/login">{Menu.login[language]}</Link>
        </li>
        <li>
          <button onClick={() => toggleLanguageFunction()}>
            {Menu.lang[language]}
          </button>
        </li>
        <li>
          <button onClick={() => toggleDarkModeFunction()}>
            <i
              className={`${
                darkMode ? Menu.modeIcon.dark : Menu.modeIcon.light
              }`}
            ></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

// Exporting Menu to use in other parts of the app
export default Menu;
