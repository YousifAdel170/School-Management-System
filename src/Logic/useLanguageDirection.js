import { useEffect } from "react";
import { useSelector } from "react-redux";

/**
 * Custom hook to handle the language direction and language settings for the page.
 * It updates the document's language and text direction based on the selected language in the Redux store.
 */
const useLanguageDirection = () => {
  // Get the current language from the Redux store (e.g., "en" or "ar")
  const dataLanguage = useSelector((state) => state.language); // Get language from Redux store

  // useEffect hook to update document settings whenever `dataLanguage` changes
  useEffect(() => {
    // If the selected language is not Arabic (ar), set to English (en)
    if (dataLanguage !== "ar") {
      document.documentElement.lang = "en"; // Set language to English
      document.documentElement.dir = "ltr"; // Set direction to left-to-right
    } else {
      // If the selected language is Arabic (ar), set language to Arabic and direction to RTL
      document.documentElement.lang = "ar"; // Set language to Arabic
      document.documentElement.dir = "rtl"; // Set direction to right-to-left
    }
  }, [dataLanguage]); // Dependency array: the effect runs whenever `dataLanguage` changes
};

export default useLanguageDirection;
