// Import necessary hooks and components from React
import React, { useRef, useState } from "react";

// Importing custom Compontent
import Update from "../utilities/Update";

// Import constants from configuration file
import { teacherUpdateConfig } from "../../scripts/updateData";

/**
 * AdminUpdateTeacher component allows the admin to update a teacher's details.
 */
const AdminUpdateTeacher = () => {
  // State variables for form data
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setConfirmationPassword] = useState("");
  const [address, setAddress] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [salary, setSalary] = useState("");
  const [BOD, setBOD] = useState("");
  const [gender, setGender] = useState("1");

  // Refs for input Fields
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPassRef = useRef(null);
  const BODRef = useRef(null);
  const genderRef = useRef(null);
  const specializationRef = useRef(null);
  const addressRef = useRef(null);
  const salaryRef = useRef(null);

  // Payload for updating teacher data
  const payloadUpdateTeachers = {
    name,
    username,
    email,
    password,
    BOD,
    gender,
    salary,
    specialization,
    address,
  };

  const inputsArraySets = [
    setName,
    setUsername,
    setEmail,
    setPassword,
    setConfirmationPassword,
    setAddress,
    setSalary,
    setBOD,
  ];

  const inputsArrayRefs = [
    nameRef,
    usernameRef,
    emailRef,
    passwordRef,
    confirmPassRef,
    addressRef,
    salaryRef,
    BODRef,
  ];
  const selectsArrayRefs = [genderRef, specializationRef];

  const selectsArraySets = [setGender, setSpecialization];

  return (
    <Update
      Config={teacherUpdateConfig}
      inputsArraySets={inputsArraySets}
      inputsArrayRefs={inputsArrayRefs}
      selectsArraySets={selectsArraySets}
      selectsArrayRefs={selectsArrayRefs}
      payload={payloadUpdateTeachers}
    />
  );
};

// Exporting the component to be used in other parts of the application
export default AdminUpdateTeacher;
