import { Types } from "../types/Types";

const InitialState = {
  darkMode: localStorage.getItem("darkMode") === "true",
  language: localStorage.getItem("language") || "ar",
};

export const schoolReducer = (state = InitialState, action) => {
  switch (action.type) {
    case Types.toggleDarkMode:
      const newDarkMode = !state.darkMode;
      localStorage.setItem("darkMode", newDarkMode); // Persist to localStorage
      return { ...state, darkMode: newDarkMode };
    case Types.toggleLanguage:
      const newLanguage = state.language === "ar" ? "en-US" : "ar";
      localStorage.setItem("language", newLanguage); // Persist to localStorage
      return { ...state, language: newLanguage };
    default:
      return state;
  }
};
