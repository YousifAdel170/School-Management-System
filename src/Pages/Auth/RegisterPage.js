import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/utilities/NavBar";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [roleID, setRoleID] = useState("1");
  const navigate = useNavigate();

  // Refs for input Fields
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPassRef = useRef(null);

  useEffect(() => {
    setEmail(emailRef.current.value);
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    setConfirmationPassword(confirmPassRef.current.value);
  }, []);

  // Clear the message after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 5000);
  }, [msg]);

  // handling the chnage of the selection options
  const handleRoleChange = (e) => {
    setRoleID(e.target.value);
  };

  // Handle Entering Data
  const handelInputChange = (e, type) => {
    switch (type) {
      case "username":
        setError("");
        setUsername(e.target.value);
        if (e.target.value === "") setError("Username has left blank");
        break;
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") setError("Email has left blank");
        break;
      case "password":
        setError("");
        setPassword(e.target.value);
        if (e.target.value === "") setError("Password has left blank");
        break;
      case "confirmPass":
        setError("");
        setConfirmationPassword(e.target.value);
        if (e.target.value === "")
          setError("Confirmation Password has left blank");
        else if (e.target.value !== password) {
          setError("Confirmation Password doesn't match with the Password");
        }
        break;
      default:
    }
  };

  const handleRegister = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if email and password are not empty
    if (
      email &&
      password &&
      username &&
      confirmationPassword &&
      confirmationPassword === password
    ) {
      try {
        const url =
          "http://127.0.0.1/school-managment-system-full/backend/register_check.php";

        // Make the fetch request
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password, roleID }),
        });

        const responseText = await response.text(); // Log raw response
        console.log("Raw Response:", responseText);

        // Parse JSON safely
        try {
          const data = JSON.parse(responseText);
          if (data.success) {
            setMsg("Registration successful! Redirecting...");
            setTimeout(() => navigate("/login"), 3000);
          } else {
            setError(data.message);
          }
        } catch (error) {
          console.error("Failed to parse JSON:", responseText);
          setError("Unexpected response from the server.");
        }
      } catch (error) {
        console.error("Fetch Error:", error.message);
        setError("Something went wrong. Please try again.");
      }
    } else {
      setError("All fields are required.");
      console.log({
        username,
        email,
        password,
        roleID,
      });
    }
  };

  return (
    <div style={{ flex: "1" }}>
      <NavBar logout={0} />{" "}
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center">
          <form onSubmit={handleRegister}>
            <Col sm="12" className="d-flex flex-column">
              <label className="mx-auto title-login">Welcome! Sign Up</label>
              <p>
                {error !== "" ? (
                  <span className="error">{error}</span>
                ) : (
                  <span className="success">{msg}</span>
                )}
              </p>
              <input
                placeholder="Username"
                type="text"
                ref={usernameRef}
                className="user-input mt-3 text-center mx-auto"
                value={username}
                name="username"
                onChange={(e) => handelInputChange(e, "username")}
              />
              <input
                placeholder="Email Address"
                type="text"
                ref={emailRef}
                className="user-input my-3 text-center mx-auto"
                name="email"
                value={email}
                onChange={(e) => handelInputChange(e, "email")}
              />
              <input
                placeholder="Password"
                type="password"
                ref={passwordRef}
                className="user-input text-center mx-auto mb-3"
                value={password}
                name="password"
                onChange={(e) => handelInputChange(e, "password")}
              />
              <input
                placeholder="Password Confirmation"
                type="password"
                ref={confirmPassRef}
                className="user-input text-center mx-auto mb-3"
                value={confirmationPassword}
                name="confirmPass"
                onChange={(e) => handelInputChange(e, "confirmPass")}
              />

              <Form.Select name="roleID" onChange={handleRoleChange}>
                <optgroup label="Select Your Role">
                  <option value="1">Student</option>
                  <option value="2">Teacher</option>
                  <option value="3">Parent</option>
                </optgroup>
              </Form.Select>

              <button className="btn-login mx-auto mt-4">Register</button>
              <label className="mx-auto mt-4">
                Already registered?{" "}
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  {" "}
                  <span style={{ cursor: "pointer" }} className="change-link">
                    Log In
                  </span>
                </Link>
              </label>
            </Col>{" "}
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterPage;
