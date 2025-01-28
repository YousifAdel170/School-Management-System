// Import React library, useEffect, and useState hooks for creating the component and managing state
import React, { useEffect, useState } from "react";

// Import necessary components from react-bootstrap for layout and styling
import { Col, Container, Row } from "react-bootstrap";

// Import react-router-dom components for navigation and routing functionality
import { Link, useNavigate } from "react-router-dom";

// Import useSelector from redux for selecting the data from the global state
import { useSelector } from "react-redux";

// Import ToastContainer component for displaying toast notifications on form submission
import { ToastContainer } from "react-toastify";

// Import the NavBar component for the header/navigation section of the page
import NavBar from "../../components/utilities/NavBar";

// Import functions for handling input changes and form submission in the login form
import { handelInputChange } from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";

// Import necessary constants and utilities from the config file
import {
  MESSAGE_DELAY,
  POST_METHOD,
  TYPE_AUTH_LOGIN,
  URL_AUT_LOGIN,
} from "../../scripts/config";

/**
 * LoginPage component allows the user to log in by providing their email and password.
 * It manages form inputs, validation errors, and redirects the user after successful login.
 */
const LoginPage = () => {
  // State hooks to manage the form data, error messages, and success messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  // useNavigate hook to programmatically navigate the user after successful login
  const navigate = useNavigate();

  // Redux selector to get the current language setting (e.g., "en" or "ar")
  const dataLanguage = useSelector((state) => state.language);

  // Create the payload object for login submission
  const payloadLogin = { email, password };

  // useEffect hook to reset the success message after a specified delay (set in MESSAGE_DELAY)
  useEffect(() => {
    setTimeout(function () {
      setMsg(""); // Clear the success message after the delay
    }, MESSAGE_DELAY);
  }, [msg]); // Dependency on `msg` to trigger the effect whenever it changes

  return (
    <div style={{ flex: "1" }}>
      {/* Navigation Bar component, passing logout flag as 0 */}
      <NavBar logout={0} />
      <Container>
        <Row className="py-5 d-flex justify-content-center">
          <form
            className="form-add-update"
            onSubmit={(e) =>
              handleSubmit(
                // Handle form submission by calling the handleSubmit function
                e,
                setMsg,
                setError,
                dataLanguage,
                navigate,
                URL_AUT_LOGIN,
                POST_METHOD,
                payloadLogin,
                TYPE_AUTH_LOGIN
              )
            }
          >
            <Col sm="12" className="d-flex flex-column">
              {/* Display title based on the selected language */}
              <label className="mx-auto title-login">
                {dataLanguage === "ar"
                  ? "تسجيل الدخول إلى حسابك"
                  : "Log Into Your Account"}
              </label>

              {/* Conditional rendering for error or success message */}
              <p>
                {error !== "" ? (
                  <span className="error">{error}</span>
                ) : (
                  <span className="success">{msg}</span>
                )}
              </p>

              {/* Email input field */}
              <input
                placeholder={
                  dataLanguage === "ar" ? "البريد الإلكتروني" : "Email Address"
                }
                type="text"
                className="user-input my-3 text-center mx-auto"
                name="email"
                value={email}
                onChange={(e) =>
                  handelInputChange(
                    e,
                    "email", // Handle email field change
                    setError,
                    setEmail,
                    dataLanguage
                  )
                }
              />

              {/* Password input field */}
              <input
                placeholder={dataLanguage === "ar" ? "كلمة المرور" : "Password"}
                type="password"
                className="user-input text-center mx-auto"
                value={password}
                name="password"
                onChange={(e) =>
                  handelInputChange(
                    e,
                    "password", // Handle password field change
                    setError,
                    setPassword,
                    dataLanguage
                  )
                }
              />

              {/* Login button */}
              <button className="btn-login mx-auto mt-4">
                {dataLanguage === "ar" ? "دخول" : "Login"}
              </button>

              {/* Link to the registration page */}
              <label className="mx-auto mt-4">
                {dataLanguage === "ar"
                  ? "ليس لديك حساب؟ "
                  : "Don't have an account? "}
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  <span style={{ cursor: "pointer" }} className="change-link">
                    {dataLanguage === "ar" ? "سجل الآن" : "Sign Up"}
                  </span>
                </Link>
              </label>
            </Col>

            {/* Toast container to show notifications (success/error messages) */}
            <ToastContainer style={{ marginTop: "80px" }} />
          </form>
        </Row>
      </Container>
    </div>
  );
};

// Exporting the LoginPage component to be used in other parts of the application
export default LoginPage;
