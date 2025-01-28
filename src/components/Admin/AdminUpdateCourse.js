// Importing necessary React hooks
import React, { useRef, useState } from "react";

// Importing custom Compontent
import Update from "../utilities/Update";

// Importing configuration values
import { subjectsUpdateonfig } from "../../scripts/updateData";

/**
 * AdminUpdateCourse component allows the admin to update a subject's details.
 * It fetches teacher IDs and allows the admin to modify subject name, code, and assign a teaching staff.
 */
const AdminUpdateCourse = () => {
  // State variables to store subject details and form state
  const [subjectName, setSubjectName] = useState(""); // Store the subject name
  const [subjectCode, setSubjectCode] = useState(""); // Store the subject code
  const [teachingstaffID, setTeachingstaffID] = useState(""); // Store the selected teacher ID

  // Refs for accessing the input fields in the form
  const subjectNameRef = useRef(null);
  const subjectCodeRef = useRef(null);
  const teachingstaffIDRef = useRef(null);

  // Payload to be sent for updating the subject
  const payloadUpdateSubjects = { subjectName, subjectCode, teachingstaffID };

  const inputsArraySets = [setSubjectName, setSubjectCode];
  const inputsArrayRefs = [subjectNameRef, subjectCodeRef];

  const selectsArraySets = [setTeachingstaffID];
  const selectsArrayRefs = [teachingstaffIDRef];

  return (
    <Update
      Config={subjectsUpdateonfig}
      inputsArraySets={inputsArraySets}
      inputsArrayRefs={inputsArrayRefs}
      selectsArraySets={selectsArraySets}
      selectsArrayRefs={selectsArrayRefs}
      payload={payloadUpdateSubjects}
    />
  );
};

// Exporting the component to be used in other parts of the application
export default AdminUpdateCourse;
