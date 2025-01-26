// Import necessary hooks and components from React
import React, { useEffect, useRef, useState } from "react";

// Import necessary components from React Bootstrap
import { Col, Form } from "react-bootstrap";

// Import navigation hooks from React Router
import { useNavigate, useParams } from "react-router-dom";

// Import useSelector to access Redux store
import { useSelector } from "react-redux";

// Import ToastContainer for displaying notifications
import { ToastContainer } from "react-toastify";

/**
 * Import Custom Functions
 * fetchData is a custom function to fetch data from an API
 * handleInputChange is a funtion to Handle input changes and validate based on the type of input.
 * handleSelectChange is a funtion to Handle the change of the selection options in a dropdown.
 */
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";

// Import constants from configuration file
import {
  MESSAGE_DELAY,
  POST_METHOD,
  SUPERVISOR_ROLE,
  URL_UPDATE_STUDENT,
  VIEW_STUDENT_TYPE,
} from "../../scripts/config";

// Import custom CSS for styling
import "./AdminAddStudent.css";

/**
 * AdminUpdateStudent component allows the admin to update a student's details.
 */
const AdminUpdateStudent = () => {
  /**
   * Retrieve the course ID from the URL using useParams.
   * This will be used to fetch and update the subject details.
   * @param {string} id - The ID of the course to be updated.
   */
  const { id } = useParams();

  // Access language data from Redux store
  const dataLanguage = useSelector((state) => state.language);

  // State variables for form data
  const [userID, setUserID] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [BOD, setBOD] = useState("");
  const [gender, setGender] = useState("1");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  // Navigation hook for redirecting after form submission
  const navigate = useNavigate();

  // Refs for input fields
  const nameRef = useRef(null);
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPassRef = useRef(null);
  const BODRef = useRef(null);
  const genderRef = useRef(null);

  // Effect hook to pre-fill form fields with existing student data
  useEffect(() => {
    setUserID(id);
    setName(nameRef.current.value);
    setUsername(usernameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setConfirmationPassword(confirmPassRef.current.value);
    setBOD(BODRef.current.value);
    setGender(genderRef.current.value);
  }, [id]);

  /**
   * useEffect hook to clear the success message after a specified delay.
   * This helps in clearing out notifications after they are shown.
   */
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  // Payload for updating student data
  const payloadUpdateStudents = {
    userID,
    name,
    username,
    email,
    password,
    BOD,
    gender,
  };

  return (
    <div style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}>
      {/* Render the title of the page */}
      <h3>{dataLanguage === "ar" ? "تحديث الطالب" : "Update Student"}</h3>

      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            setMsg,
            setError,
            dataLanguage,
            navigate,
            URL_UPDATE_STUDENT,
            POST_METHOD,
            payloadUpdateStudents,
            VIEW_STUDENT_TYPE,
            SUPERVISOR_ROLE
          )
        }
        className="add-student"
      >
        {/* Form columns and input fields */}
        <Col sm="12" className="d-flex flex-column">
          {/* Title for the form */}
          <label className="mx-auto title-login">
            {dataLanguage === "ar"
              ? "تحديث بيانات الطالب"
              : "Update the student"}
          </label>

          {/* Display error or success message */}
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>

          {/* Form fields for student details */}

          {/* Name input field */}
          <input
            placeholder={dataLanguage === "ar" ? "الاسم الكامل" : "Full Name"}
            type="text"
            ref={nameRef}
            className="user-input mb-3 text-center mx-auto"
            name="name"
            value={name}
            onChange={(e) =>
              handelInputChange(e, "name", setError, setName, dataLanguage)
            }
          />

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
            type="text"
            ref={emailRef}
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
            className="user-input mb-3 text-center mx-auto"
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

          {/* Confirmation Password input field */}
          <input
            placeholder={
              dataLanguage === "ar"
                ? "تأكيد كلمة المرور"
                : "Password Confirmation"
            }
            type="password"
            ref={confirmPassRef}
            className="user-input text-center mx-auto mb-3"
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
            className="user-input mb-3 text-center mx-auto"
            name="BOD"
            value={BOD}
            onChange={(e) =>
              handelInputChange(e, "BOD", setError, setBOD, dataLanguage)
            }
          />

          {/* Gender selection dropdown */}
          <Form.Select
            name="gender"
            onChange={(e) => handleSelectChange(e, setGender)}
            ref={genderRef}
          >
            <optgroup
              label={dataLanguage === "ar" ? "حدد الجنس" : "Select Gender"}
            >
              <option value="1">
                {dataLanguage === "ar" ? "ذكر" : "Male"}
              </option>
              <option value="2">
                {dataLanguage === "ar" ? "أنثى" : "Female"}
              </option>
            </optgroup>
          </Form.Select>

          {/* Submit button for form */}
          <button className="btn-login mx-auto mt-3">
            {dataLanguage === "ar" ? "تحديث الطالب" : "Update Student"}
          </button>
        </Col>

        {/* Toast notifications for success or error messages */}
        <ToastContainer style={{ marginTop: "80px" }} />
      </form>
    </div>
  );
};

// Exporting the component to be used in other parts of the application
export default AdminUpdateStudent;
