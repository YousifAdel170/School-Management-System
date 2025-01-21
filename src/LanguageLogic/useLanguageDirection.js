import { useEffect } from "react";
import { useSelector } from "react-redux";

const useLanguageDirection = () => {
  const dataLanguage = useSelector((state) => state.language); // Get language from Redux store

  useEffect(() => {
    if (dataLanguage !== "ar") {
      document.documentElement.lang = "en"; // Set language to English
      document.documentElement.dir = "ltr"; // Set direction to left-to-right
    } else {
      document.documentElement.lang = "ar"; // Set language to Arabic
      document.documentElement.dir = "rtl"; // Set direction to right-to-left
    }
  }, [dataLanguage]); // Re-run when `dataLanguage` changes
};

export default useLanguageDirection;
