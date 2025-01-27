// Import necessary hooks and components from React
import React, { useState } from "react";

// Import Custom Component
import View from "../utilities/View";

// Import constants from configuration fil
import {
  TEACHER_TYPE,
  URL_GET_TEACHER,
  viewTeacherHeading,
} from "../../scripts/config";
import { nontAuthTeachersObject } from "../../scripts/viewData";

/**
 * TeacherViewTeachers component displays a table of teachers.
 * The teachers are fetched from an API, and the table is dynamically rendered based on the fetched data.
 * It also handles language localization for Arabic and English.
 */
const TeacherViewTeachers = () => {
  // State variables for form data
  const [teachersData, setTeachersData] = useState([]);

  return (
    <View
      data={teachersData}
      setData={setTeachersData}
      url={URL_GET_TEACHER}
      object={nontAuthTeachersObject}
      headings={viewTeacherHeading}
      type={TEACHER_TYPE}
    />
  );
};

// Exporting the TeacherViewTeachers component to be used in other parts of the application
export default TeacherViewTeachers;
