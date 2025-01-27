// Import necessary hooks and components from React
import React, { useState } from "react";

// Import Custom Component
import View from "../utilities/View";

// Import constants from configuration file
import {
  STUDENT_TYPE,
  URL_GET_STUDENTS,
  viewStudentHeadings,
} from "../../scripts/config";
import { nonAuthStudentsObject } from "../../scripts/viewData";

/**
 * TeacherViewStudents component displays a table of students.
 * The students are fetched from an API, and the table is dynamically rendered based on the fetched data.
 * It also handles language localization for Arabic and English.
 */
const TeacherViewStudents = () => {
  // State variables for form data
  const [studentsData, setStudentsData] = useState([]);

  return (
    <View
      data={studentsData}
      setData={setStudentsData}
      url={URL_GET_STUDENTS}
      object={nonAuthStudentsObject}
      headings={viewStudentHeadings}
      type={STUDENT_TYPE}
    />
  );
};

// Exporting the TeacherViewStudents component to be used in other parts of the application
export default TeacherViewStudents;
