// Import necessary hooks and components from React
import React from "react";

// Import Custom Component
import View from "../utilities/View";

// Import constants from configuration fil
import {
  addStudentHeadings,
  STUDENT_TYPE,
  UPDATE_STUDENT_TYPE,
  URL_DELELE_STUDENT,
  URL_GET_STUDENTS,
} from "../../scripts/config";
import { studentsObject } from "../../scripts/viewData";

/**
 * AdminViewStudents component displays a table of students and allows the admin to update or delete student details.
 * The students are fetched from an API, and the table is dynamically rendered based on the fetched data.
 * It also handles language localization for Arabic and English.
 */
const AdminViewStudents = () => {
  return (
    <View
      url={URL_GET_STUDENTS}
      object={studentsObject}
      headings={addStudentHeadings}
      admin_delete={1}
      admin_update={1}
      type={STUDENT_TYPE}
      update_type={UPDATE_STUDENT_TYPE}
      deleted_url={URL_DELELE_STUDENT}
      toast={1}
    />
  );
};

// Exporting the AdminViewStudents component to be used in other parts of the application
export default AdminViewStudents;
