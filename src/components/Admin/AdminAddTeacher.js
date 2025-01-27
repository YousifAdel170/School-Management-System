// Importing necessary React hooks
import React, { useRef, useState } from "react";

// Importing custom Compontent
import Add from "../utilities/Add";

// Importing configuration values
import { teacherFormConfig } from "../../scripts/addData";

/**
 * AdminAddTeacher component renders a form for adding a new teacher in the admin panel.
 * It handles form data, validation, API requests, and displays success/error messages.
 */
const AdminAddTeacher = () => {
  // State hooks to manage form data and validation messages
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

  // Refs for input fields to directly access DOM elements
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

  // Payload to send the data for the new student
  const payloadTeachers = {
    name,
    username,
    email,
    password,
    address,
    salary,
    BOD,
    gender,
    specialization,
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

  const selectsArraySets = [setGender, setSpecialization];

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

  return (
    <Add
      Config={teacherFormConfig}
      inputsArraySets={inputsArraySets}
      inputsArrayRefs={inputsArrayRefs}
      selectsArraySets={selectsArraySets}
      selectsArrayRefs={selectsArrayRefs}
      payload={payloadTeachers}
    />
  );
};

// Exporting the AdminAddStudent component for use in other parts of the application
export default AdminAddTeacher;
