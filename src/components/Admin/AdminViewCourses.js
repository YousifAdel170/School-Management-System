// Import necessary hooks and components from React
import React from "react";

// Import Custom Component
import View from "../utilities/View";

// Import constants from configuration file
import {
  addSubjectsHeadings,
  SUBJECT_TYPE,
  UPDATE_SUBJECT_TYPE,
  URL_DELELE_SUBJECT,
  URL_GET_SUBJECTS,
} from "../../scripts/config";
import { subjectsObject } from "../../scripts/viewData";

/**
 * AdminViewCourses component displays a table of subjects and allows the admin to update or delete subject details.
 * The subjects are fetched from an API, and the table is dynamically rendered based on the fetched data.
 * It also handles language localization for Arabic and English.
 */
const AdminViewCourses = () => {
  return (
    <View
      url={URL_GET_SUBJECTS}
      object={subjectsObject}
      headings={addSubjectsHeadings}
      admin_delete={1}
      admin_update={1}
      type={SUBJECT_TYPE}
      update_type={UPDATE_SUBJECT_TYPE}
      deleted_url={URL_DELELE_SUBJECT}
      toast={1}
    />
  );
};

// Exporting the AdminViewCourses component to be used in other parts of the application
export default AdminViewCourses;
