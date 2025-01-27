// Import necessary hooks and components from React
import React, { useState } from "react";

// Import navigation hooks from React Router
import { useNavigate } from "react-router-dom";

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
  // State variables for form data
  const [teachersData, setTeachersData] = useState([]);

  // Hook to navigate between pages
  const navigate = useNavigate();

  return (
    <View
      data={teachersData}
      setData={setTeachersData}
      url={URL_GET_TEACHER}
      object={teachersObject}
      headings={addTeacherHeadings}
      admin_delete={1}
      admin_update={1}
      navigate={navigate}
      type={TEACHER_TYPE}
      update_type={UPDATE_TEACHER_TYPE}
      deleted_url={URL_DELELE_TEACHER}
      toast={1}
    />
  );
};

// Exporting the AdminViewTeachers component to be used in other parts of the application
export default AdminViewTeachers;
