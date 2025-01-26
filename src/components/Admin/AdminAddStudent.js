// Importing necessary React hooks
import React, { useEffect, useRef, useState } from "react";

// Importing Bootstrap components for form and layout
import { Col, Form } from "react-bootstrap";

// Importing useNavigate hook to navigate to different routes
import { useNavigate } from "react-router-dom";

// Importing useSelector hook to access Redux store
import { useSelector } from "react-redux";

// Library for displaying toast notifications
import { ToastContainer } from "react-toastify";

// Importing custom functions to handle form input changes, handle submit
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";

// Importing configuration values
import {
  MESSAGE_DELAY,
  POST_METHOD,
  SUPERVISOR_ROLE,
  URL_ADD_STUDENT,
  VIEW_STUDENT_TYPE,
} from "../../scripts/config";

// Importing custom CSS for styling
import "./AdminAddStudent.css";

/**
 * AdminAddStudent component renders a form for adding a new student in the admin panel.
 * It handles form data, validation, API requests, and displays success/error messages.
 */
const AdminAddStudent = () => {
  // State hooks to manage form data and validation messages
  const [username, setUsername] = useState(""); // Username of the student
  const [email, setEmail] = useState(""); // Email address of the student
  const [password, setPassword] = useState(""); // Password for the student account
  const [confirmationPassword, setConfirmationPassword] = useState(""); // Password confirmation
  const [BOD, setBOD] = useState(""); // Date of Birth
  const [gender, setGender] = useState("1"); // Gender of the student (1 = Male, 2 = Female)
  const [error, setError] = useState(""); // Stores any error messages
  const [msg, setMsg] = useState(""); // Stores success messages

  // Hook to navigate between pages
  const navigate = useNavigate();

  // Hook to get the current language from Redux store
  const dataLanguage = useSelector((state) => state.language);

  // Refs for input fields to directly access DOM elements
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPassRef = useRef(null);
  const BODRef = useRef(null);
  const genderRef = useRef(null);

  // Payload to send the data for the new student
  const payloadStudents = { username, email, password, BOD, gender };

  /**
   * useEffect hook to initialize form values and set up delayed message reset.
   */
  useEffect(() => {
    setUsername(usernameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setConfirmationPassword(confirmPassRef.current.value);
    setBOD(BODRef.current.value);
    setGender(genderRef.current.value);
  }, []);

  /**
   * useEffect hook to reset the success message after a specified delay.
   */
  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  return (
    <div
      className="add-std"
      style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}
    >
      {/* Header section with dynamic language-based title */}
      <h3>{dataLanguage === "ar" ? "إضافة طالب" : "Add Student"}</h3>

      {/* Form to add a new student, handling form submission */}
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            setMsg,
            setError,
            dataLanguage,
            navigate,
            URL_ADD_STUDENT,
            POST_METHOD,
            payloadStudents,
            VIEW_STUDENT_TYPE,
            SUPERVISOR_ROLE
          )
        }
        className="add-student"
      >
        {/* Main form column with layout for inputs */}
        <Col sm="12" className="d-flex flex-column">
          {/* Form title */}
          <label className="mx-auto title-login">
            {dataLanguage === "ar" ? "إضافة طالب جديد" : "Add A New Student"}
          </label>

          {/* Displaying error or success message based on form submission status */}
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>

          {/* Username input field */}
          <input
            placeholder={dataLanguage === "ar" ? "اسم المستخدم" : "Username"}
            type="text"
            ref={usernameRef}
            className="user-input mb-3 text-center mx-auto"
            name="username"
            value={username}
            onChange={(e) =>
              handelInputChange(
                e,
                "username",
                setError,
                setUsername,
                dataLanguage
              )
            }
          />

          {/* Email input field */}
          <input
            placeholder={
              dataLanguage === "ar" ? "البريد الإلكتروني" : "Email Address"
            }
            ref={emailRef}
            type="text"
            className="user-input mb-3 text-center mx-auto"
            name="email"
            value={email}
            onChange={(e) =>
              handelInputChange(e, "email", setError, setEmail, dataLanguage)
            }
          />

          {/* Password input field */}
          <input
            placeholder={dataLanguage === "ar" ? "كلمة المرور" : "Password"}
            type="password"
            ref={passwordRef}
            className="user-input text-center mx-auto mb-3"
            value={password}
            name="password"
            onChange={(e) =>
              handelInputChange(
                e,
                "password",
                setError,
                setPassword,
                dataLanguage
              )
            }
          />

          {/* Password confirmation input field */}
          <input
            placeholder={
              dataLanguage === "ar"
                ? "تأكيد كلمة المرور"
                : "Password Confirmation"
            }
            type="password"
            ref={confirmPassRef}
            className="user-input text-center mx-auto"
            value={confirmationPassword}
            name="confirmPass"
            onChange={(e) =>
              handelInputChange(
                e,
                "confirmPass",
                setError,
                setConfirmationPassword,
                dataLanguage,
                password
              )
            }
          />

          {/* Birthdate input field */}
          <input
            placeholder={dataLanguage === "ar" ? "تاريخ الميلاد" : "Birthdate"}
            type="date"
            ref={BODRef}
            className="user-input my-3 text-center mx-auto"
            name="BOD"
            value={BOD}
            onChange={(e) =>
              handelInputChange(e, "BOD", setError, setBOD, dataLanguage)
            }
          />

          {/* Gender dropdown selection */}
          <Form.Select
            name="gender"
            onChange={(e) => handleSelectChange(e, setGender)}
            ref={genderRef}
          >
            <optgroup
              label={dataLanguage === "ar" ? "اختر الجنس" : "Select Gender"}
            >
              <option value="1">
                {dataLanguage === "ar" ? "ذكر" : "Male"}
              </option>
              <option value="2">
                {dataLanguage === "ar" ? "أنثى" : "Female"}
              </option>
            </optgroup>
          </Form.Select>

          {/* Submit button for the form */}
          <button className="btn-login mx-auto mt-4">
            {dataLanguage === "ar" ? "إضافة طالب" : "Add Student"}
          </button>
        </Col>

        {/* Toast container to show success/error messages */}
        <ToastContainer style={{ marginTop: "80px" }} />
      </form>
    </div>
  );
};

// Exporting the AdminAddStudent component for use in other parts of the application
export default AdminAddStudent;
