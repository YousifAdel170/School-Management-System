// Import necessary hooks and components from React
import React from "react";

// Import Custom Component
import View from "../utilities/View";

// Import constants from configuration fil
import {
  addTeacherHeadings,
  TEACHER_TYPE,
  UPDATE_TEACHER_TYPE,
  URL_DELELE_TEACHER,
  URL_GET_TEACHER,
} from "../../scripts/config";
import { teachersObject } from "../../scripts/viewData";

/**
 * AdminViewTeachers component displays a table of teachers and allows the admin to update or delete teacher details.
 * The teachers are fetched from an API, and the table is dynamically rendered based on the fetched data.
 * It also handles language localization for Arabic and English.
 */
const AdminViewTeachers = () => {
  return (
    <View
      url={URL_GET_TEACHER}
      object={teachersObject}
      headings={addTeacherHeadings}
      admin_delete={1}
      admin_update={1}
      type={TEACHER_TYPE}
      update_type={UPDATE_TEACHER_TYPE}
      deleted_url={URL_DELELE_TEACHER}
      toast={1}
    />
  );
};

// Exporting the AdminViewTeachers component to be used in other parts of the application
export default AdminViewTeachers;
