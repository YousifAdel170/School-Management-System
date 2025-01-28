// Import necessary hooks and components from React
import React, { useRef, useState } from "react";

// Importing custom Compontent
import Update from "../utilities/Update";

// Import constants from configuration file
import { studentUpdateConfig } from "../../scripts/updateData";

/**
 * AdminUpdateStudent component allows the admin to update a student's details.
 */
const AdminUpdateStudent = () => {
  // State variables for form data
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setConfirmationPassword] = useState("");
  const [BOD, setBOD] = useState("");
  const [gender, setGender] = useState("1");

  // Refs for input fields
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPassRef = useRef(null);
  const BODRef = useRef(null);
  const genderRef = useRef(null);

  // Payload for updating student data
  const payloadUpdateStudents = {
    name,
    username,
    email,
    password,
    BOD,
    gender,
  };

  const inputsArraySets = [
    setName,
    setUsername,
    setEmail,
    setPassword,
    setConfirmationPassword,
    setBOD,
  ];

  const inputsArrayRefs = [
    nameRef,
    usernameRef,
    emailRef,
    passwordRef,
    confirmPassRef,
    BODRef,
  ];
  const selectsArrayRefs = [genderRef];

  const selectsArraySets = [setGender];

  return (
    <Update
      Config={studentUpdateConfig}
      inputsArraySets={inputsArraySets}
      inputsArrayRefs={inputsArrayRefs}
      selectsArraySets={selectsArraySets}
      selectsArrayRefs={selectsArrayRefs}
      payload={payloadUpdateStudents}
    />
  );
};

// Exporting the component to be used in other parts of the application
export default AdminUpdateStudent;
