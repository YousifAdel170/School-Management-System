// Import React library, useEffect, useRef, and useState hooks for component creation and state management
import React, { useEffect, useRef, useState } from "react";

// Import necessary components from react-bootstrap for layout and styling
import { Col, Container, Form, Row } from "react-bootstrap";

// Import react-router-dom components for navigation and routing functionality
import { Link, useNavigate } from "react-router-dom";

// Import useSelector from redux for selecting the data from the global state
import { useSelector } from "react-redux";

// Import ToastContainer component for displaying toast notifications on form
import { ToastContainer } from "react-toastify";

// Import NavBar component
import NavBar from "../../components/utilities/NavBar";

// Import functions for handling input changes, handling select change and form submission in the register form
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";

// Import necessary constants and utilities from the config file
import {
  MESSAGE_DELAY,
  POST_METHOD,
  TYPE_AUT_REGISTER,
  URL_AUT_REGISTER,
} from "../../scripts/config";

/**
 * RegisterPage component allows a new user to sign up by providing their username, email, password,
 * password confirmation, and role. It handles form validation, success and error messages, and redirects
 * the user upon successful registration.
 */
const RegisterPage = () => {
  // State hooks for form values and error/success messages
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [roleID, setRoleID] = useState("1");

  // useNavigate hook for page redirection after registration
  const navigate = useNavigate();

  // Refs to directly interact with form input elements
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPassRef = useRef(null);

  // Fetch the current language from Redux store
  const dataLanguage = useSelector((state) => state.language);

  // Payload for the registration request
  const payloadRegister = { username, email, password, roleID };

  // useEffect to initialize form fields on first render
  useEffect(() => {
    setEmail(emailRef.current.value);
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    setConfirmationPassword(confirmPassRef.current.value);
  }, []);

  // useEffect to clear success message after the specified delay (defined in config)
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  return (
    <div style={{ flex: "1" }}>
      <NavBar logout={0} />{" "}
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center">
          {/* Form submission handler on form submit */}
          <form
            onSubmit={(e) =>
              handleSubmit(
                e,
                setMsg,
                setError,
                dataLanguage,
                navigate,
                URL_AUT_REGISTER,
                POST_METHOD,
                payloadRegister,
                TYPE_AUT_REGISTER
              )
            }
          >
            <Col sm="12" className="d-flex flex-column">
              {/* Heading */}
              <label className="mx-auto title-login">
                {dataLanguage === "ar" ? "مرحبًا! سجل هنا" : "Welcome! Sign Up"}
              </label>

              {/* Error or success message */}
              <p>
                {error !== "" ? (
                  <span className="error">{error}</span>
                ) : (
                  <span className="success">{msg}</span>
                )}
              </p>

              {/* Username input */}
              <input
                placeholder={
                  dataLanguage === "ar" ? "اسم المستخدم" : "Username"
                }
                type="text"
                ref={usernameRef}
                className="user-input mt-3 text-center mx-auto"
                value={username}
                name="username"
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

              {/* Email input */}
              <input
                placeholder={
                  dataLanguage === "ar" ? "البريد الإلكتروني" : "Email Address"
                }
                type="text"
                ref={emailRef}
                className="user-input my-3 text-center mx-auto"
                name="email"
                value={email}
                onChange={(e) =>
                  handelInputChange(
                    e,
                    "email",
                    setError,
                    setEmail,
                    dataLanguage
                  )
                }
              />

              {/* Password input */}
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

              {/* Password confirmation input */}
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

              {/* Select dropdown for user role */}
              <Form.Select
                name="roleID"
                onChange={(e) => handleSelectChange(e, setRoleID)}
              >
                <optgroup
                  label={
                    dataLanguage === "ar" ? "اختار دورك" : "Select Your Role"
                  }
                >
                  <option value="1">
                    {dataLanguage === "ar" ? "طالب" : "Student"}
                  </option>
                  <option value="2">
                    {dataLanguage === "ar" ? "معلم" : "Teacher"}
                  </option>
                  <option value="3">
                    {dataLanguage === "ar" ? "ولي أمر" : "Parent"}
                  </option>
                </optgroup>
              </Form.Select>

              {/* Submit button */}
              <button className="btn-login mx-auto mt-4">
                {dataLanguage === "ar" ? "سجل" : "Register"}
              </button>
              <label className="mx-auto mt-4">
                {dataLanguage === "ar"
                  ? "هل أنت مسجل بالفعل؟ "
                  : "Already registered? "}
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  {" "}
                  <span style={{ cursor: "pointer" }} className="change-link">
                    {dataLanguage === "ar" ? "تسجيل الدخول" : "Log In"}
                  </span>
                </Link>
              </label>
            </Col>

            {/* ToastContainer for notifications */}
            <ToastContainer style={{ marginTop: "80px" }} />
          </form>
        </Row>
      </Container>
    </div>
  );
};

// Exporting the RegisterPage component to be used in other parts of the application
export default RegisterPage;
