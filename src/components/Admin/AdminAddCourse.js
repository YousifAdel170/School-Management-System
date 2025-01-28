// Importing necessary React hooks
import React, { useRef, useState } from "react";

// Importing custom Compontent
import Add from "../utilities/Add";

// Import constants from configuration fil
import { subjectsUpdateonfig } from "../../scripts/updateData";

/**
 * AdminAddCourse component renders a form for adding a new subject in the admin panel.
 * It handles form data, validation, API requests, and displays success/error messages.
 */
const AdminAddCourse = () => {
  // State hooks to manage form data and validation messages
  const [subjectName, setSubjectName] = useState(""); // State for the subject name
  const [subjectCode, setSubjectCode] = useState(""); // State for the subject code
  const [teachingstaffID, setTeachingstaffID] = useState(""); // State for the selected teaching staff ID

  // Refs to manage input fields
  const subjectNameRef = useRef(null);
  const subjectCodeRef = useRef(null);
  const teachingstaffIDRef = useRef(null);

  // Payload to send the data for the new student
  const payloadSubjects = { subjectName, subjectCode, teachingstaffID };

  const inputsArraySets = [setSubjectName, setSubjectCode];
  const inputsArrayRefs = [subjectNameRef, subjectCodeRef];

  const selectsArraySets = [setTeachingstaffID];
  const selectsArrayRefs = [teachingstaffIDRef];

  return (
    <Add
      Config={subjectsUpdateonfig}
      inputsArraySets={inputsArraySets}
      inputsArrayRefs={inputsArrayRefs}
      selectsArraySets={selectsArraySets}
      selectsArrayRefs={selectsArrayRefs}
      payload={payloadSubjects}
    />
  );
};

// Exporting the AdminAddCourse component for use in other parts of the application
export default AdminAddCourse;
