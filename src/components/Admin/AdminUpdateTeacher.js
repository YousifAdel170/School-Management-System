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
 * handleInputChange is a Handle input changes and validate based on the type of input.
 * handleSelectChange is a Handle the change of the selection options in a dropdown.
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
  URL_UPDATE_TEACHER,
  VIEW_TEACHER_TYPE,
} from "../../scripts/config";

// Import custom CSS for styling
import "./AdminAddStudent.css";

/**
 * AdminUpdateTeacher component allows the admin to update a teacher's details.
 */
const AdminUpdateTeacher = () => {
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
  const [address, setAddress] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [salary, setSalary] = useState("");
  const [BOD, setBOD] = useState("");
  const [gender, setGender] = useState("1");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  // Navigation hook for redirecting after form submission
  const navigate = useNavigate();

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

  // Effect hook to pre-fill form fields with existing teacher data
  useEffect(() => {
    setUserID(id);
    setName(nameRef.current.value);
    setUsername(usernameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setConfirmationPassword(confirmPassRef.current.value);
    setBOD(BODRef.current.value);
    setSpecialization(specializationRef.current.value);
    setAddress(addressRef.current.value);
    setSalary(salaryRef.current.value);
  }, [id]);

  /**
   * useEffect hook to clear the success message after a specified delay.
   * This helps in clearing out notifications after they are shown.
   */
  useEffect(() => {
    // Clear success message after MESSAGE_DELAY milliseconds
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  // Payload for updating teacher data
  const payloadUpdateTeachers = {
    userID,
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

  return (
    <div style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}>
      {/* Render the title of the page */}
      <h3>{dataLanguage === "ar" ? "تحديث المعلم" : "Update Teacher"}</h3>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            setMsg,
            setError,
            dataLanguage,
            navigate,
            URL_UPDATE_TEACHER,
            POST_METHOD,
            payloadUpdateTeachers,
            VIEW_TEACHER_TYPE,
            SUPERVISOR_ROLE
          )
        }
        className="add-student"
        style={{ margin: "15px auto" }}
      >
        {/* Form columns and input fields */}

        <Col sm="12" className="d-flex flex-column">
          {/* Title for the form */}
          <label className="mx-auto title-login">
            {dataLanguage === "ar" ? "تحديث المعلم" : "Update The Teacher"}
          </label>

          {/* Display error or success message */}
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>

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

          {/* Password Confirmation input field */}
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

          {/* Address input field */}
          <input
            placeholder={dataLanguage === "ar" ? "العنوان" : "Address"}
            type="text"
            ref={addressRef}
            className="user-input text-center mx-auto mb-3"
            value={address}
            name="address"
            onChange={(e) =>
              handelInputChange(
                e,
                "address",
                setError,
                setAddress,
                dataLanguage
              )
            }
          />

          {/* Salary input field */}
          <input
            placeholder={dataLanguage === "ar" ? "الراتب" : "Salary"}
            type="number"
            ref={salaryRef}
            className="user-input text-center mx-auto mb-3"
            value={salary}
            name="salary"
            onChange={(e) =>
              handelInputChange(e, "salary", setError, setSalary, dataLanguage)
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
            className="mb-3"
          >
            <optgroup
              label={dataLanguage === "ar" ? "اختيار الجنس" : "Select Gender"}
            >
              <option value="1">
                {dataLanguage === "ar" ? "ذكر" : "Male"}
              </option>
              <option value="2">
                {dataLanguage === "ar" ? "أنثى" : "Female"}
              </option>
            </optgroup>
          </Form.Select>

          {/* Specialization selection dropdown */}
          <Form.Select
            name="specialization"
            ref={specializationRef}
            onChange={(e) => handleSelectChange(e, setSpecialization)}
            value={specialization}
          >
            <optgroup
              label={
                dataLanguage === "ar"
                  ? "اختيار التخصص"
                  : "Select Specialization"
              }
            >
              <option value="1">
                {dataLanguage === "ar" ? "برمجيات" : "Software"}
              </option>
              <option value="2">
                {dataLanguage === "ar" ? "تاريخ" : "History"}
              </option>
              <option value="3">
                {" "}
                {dataLanguage === "ar" ? "رياضيات" : "Mathematics"}
              </option>
              <option value="4">
                {dataLanguage === "ar" ? "فيزياء" : "Physics"}
              </option>
              <option value="5">
                {" "}
                {dataLanguage === "ar" ? "أحياء" : "Biology"}
              </option>
              <option value="6">
                {dataLanguage === "ar" ? "علوم الكمبيوتر" : "Computer Science"}
              </option>
              <option value="7">
                {" "}
                {dataLanguage === "ar" ? "أدب" : "Literature"}
              </option>
            </optgroup>
          </Form.Select>

          {/* Submit button for form */}
          <button className="btn-login mx-auto mt-3">
            {dataLanguage === "ar" ? "تحديث المعلم" : "Update Teacher"}
          </button>
        </Col>

        {/* Toast notifications for success or error messages */}
        <ToastContainer style={{ marginTop: "80px" }} />
      </form>
    </div>
  );
};

// Exporting the component to be used in other parts of the application
export default AdminUpdateTeacher;
