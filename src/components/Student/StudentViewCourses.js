// Import necessary hooks and components from React
import React, { useState } from "react";

// Import Custom Component
import View from "../utilities/View";

// Import constants from configuration file
import {
  SUBJECT_TYPE,
  URL_GET_SUBJECTS,
  viewSubjectsHeadings,
} from "../../scripts/config";
import { subjectsObject } from "../../scripts/viewData";

/**
 * StudentViewCourses component displays a table of subjects.
 * The subjects are fetched from an API, and the table is dynamically rendered based on the fetched data.
 * It also handles language localization for Arabic and English.
 */
const StudentViewCourses = () => {
  // State variables for form data
  const [subjectsData, setSubjectsData] = useState([]);

  return (
    <View
      data={subjectsData}
      setData={setSubjectsData}
      url={URL_GET_SUBJECTS}
      object={subjectsObject}
      headings={viewSubjectsHeadings}
      type={SUBJECT_TYPE}
    />
  );
};

// Exporting the AdminViewCourses component to be used in other parts of the application
export default StudentViewCourses;
