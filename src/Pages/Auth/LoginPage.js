import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/utilities/NavBar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 5000);
  }, [msg]);

  // Handle Entering Data
  const handelInputChange = (e, type) => {
    switch (type) {
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
      default:
    }
  };

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if email and password are not empty
    if (email !== "" && password !== "") {
      try {
        const url =
          "http://127.0.0.1/school-managment-system-full/backend/login_check.php";

        // Make the fetch request
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        // Check if the response is not OK
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse JSON response
        const data = await response.json();

        // Handle response based on success or failure
        if (data.success) {
          localStorage.setItem("roleID", data.roleID);
          localStorage.setItem("userType", data.userType);

          console.log("Login Successful, redirecting...", data.message);
          setMsg("Logged in successfully! Redirecting...");
          console.log(data.roleID);
          // Redirect after a delay
          setTimeout(() => {
            switch (data.roleID) {
              case "1":
                navigate("/student");
                break;
              case "2":
                if (data.ID === "1") navigate("/supervisor");
                else navigate("/teacher");
                break;
              case "3":
                navigate("/parent");
                break;
              default:
            }
          }, 3000);
        } else {
          setError(data.message);
          console.error("Login failed:", data.message);
        }
      } catch (error) {
        // Handle network or unexpected errors
        console.error("There was a problem with the fetch operation:", error);
        setError("Something went wrong. Please try again.");
      }
    } else {
      // Handle empty input fields
      setError("All fields are required");
    }
  };
  return (
    <div style={{ flex: "1" }}>
      <NavBar logout={0} />{" "}
      <Container>
        <Row className="py-5 d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <Col sm="12" className="d-flex flex-column">
              <label className="mx-auto title-login">
                Log Into Your Account
              </label>
              <p>
                {error !== "" ? (
                  <span className="error">{error}</span>
                ) : (
                  <span className="success">{msg}</span>
                )}
              </p>
              <input
                placeholder="Email Address"
                type="text"
                className="user-input my-3 text-center mx-auto"
                name="email"
                value={email}
                onChange={(e) => handelInputChange(e, "email")}
              />
              <input
                placeholder="Password"
                type="password"
                className="user-input text-center mx-auto"
                value={password}
                name="password"
                onChange={(e) => handelInputChange(e, "password")}
              />
              <button className="btn-login mx-auto mt-4" onClick={handleSubmit}>
                Login
              </button>
              <label className="mx-auto mt-4">
                Don't have an account?{" "}
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  {" "}
                  <span style={{ cursor: "pointer" }} className="change-link">
                    Sign Up
                  </span>
                </Link>
              </label>
            </Col>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
