// Importing necessary React hooks
import React, { useRef, useState } from "react";

// Importing custom Compontent
import Add from "../utilities/Add";

// Import constants from configuration fil
import { studentFormConfig } from "../../scripts/addData";

/**
 * AdminAddStudent component renders a form for adding a new student in the admin panel.
 * It handles form data, validation, API requests, and displays success/error messages.
 */
const AdminAddStudent = () => {
  // State hooks to manage form data and validation messages
  const [username, setUsername] = useState(""); // Username of the student
  const [email, setEmail] = useState(""); // Email address of the student
  const [password, setPassword] = useState(""); // Password for the student account
  const [, setConfirmationPassword] = useState(""); // Password confirmation
  const [BOD, setBOD] = useState(""); // Date of Birth
  const [gender, setGender] = useState("1"); // Gender of the student (1 = Male, 2 = Female)

  // Refs for input fields to directly access DOM elements
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPassRef = useRef(null);
  const BODRef = useRef(null);
  const genderRef = useRef(null);

  // Payload to send the data for the new student
  const payloadStudents = { username, email, password, BOD, gender };

  const inputsArraySets = [
    setUsername,
    setEmail,
    setPassword,
    setConfirmationPassword,
    setBOD,
  ];

  const selectsArraySets = [setGender];

  const inputsArrayRefs = [
    usernameRef,
    emailRef,
    passwordRef,
    confirmPassRef,
    BODRef,
  ];
  const selectsArrayRefs = [genderRef];

  return (
    <Add
      Config={studentFormConfig}
      inputsArraySets={inputsArraySets}
      inputsArrayRefs={inputsArrayRefs}
      selectsArraySets={selectsArraySets}
      selectsArrayRefs={selectsArrayRefs}
      payload={payloadStudents}
    />
  );
};

// Exporting the AdminAddStudent component for use in other parts of the application
export default AdminAddStudent;
