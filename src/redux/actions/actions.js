import { Types } from "../types/Types";

// function responsible to toggle the mode (dark/light)
export const toggleDarkModeAction = () => {
  return { type: Types.toggleDarkMode };
};

// function responsible to toggle the language (arabic/english)
export const toggleLanguageAction = () => {
  return {
    type: Types.toggleLanguage,
  };
};
