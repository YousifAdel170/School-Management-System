import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminAddStudent.css";

const AdminAddStudent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [BOD, setBOD] = useState("");
  const [gender, setGender] = useState("1");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 5000);
  }, [msg]);

  // handling the chnage of the selection options
  const handleGenderChange = (e) => {
    setGender(e.target.value);
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
      case "BOD":
        setError("");
        setBOD(e.target.value);
        if (e.target.value === "") setError("Birthdate has left blank");
        break;
      default:
    }
  };

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if email and password are not empty
    if (email && password && username && BOD) {
      try {
        const url =
          "http://127.0.0.1/school-managment-system-full/backend/add_student.php";

        // Make the fetch request
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password, BOD, gender }),
        });

        const responseText = await response.text(); // Log raw response
        console.log("Raw Response:", responseText);

        // Parse JSON safely
        try {
          const data = JSON.parse(responseText);
          console.log(data);
          if (data.success) {
            setMsg("Student Has Been Added Successfully! Redirecting...");
            setTimeout(() => navigate("/supervisor/add_student"), 3000);
          } else {
            setError(data.message);
          }
        } catch (error) {
          console.error("Failed to parse JSON:", responseText);
        }
      } catch (error) {}
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <div
      className="add-std"
      style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}
    >
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit} className="add-student">
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">Add A New student</label>
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
            className="user-input mb-3 text-center mx-auto"
            name="username"
            value={username}
            onChange={(e) => handelInputChange(e, "username")}
          />
          <input
            placeholder="Email Address"
            type="text"
            className="user-input mb-3 text-center mx-auto"
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
          <input
            placeholder="Birthdate"
            type="date"
            className="user-input my-3 text-center mx-auto"
            name="BOD"
            value={BOD}
            onChange={(e) => handelInputChange(e, "BOD")}
          />
          <Form.Select name="gender" onChange={handleGenderChange}>
            <optgroup label="Select Gender">
              <option value="1">Male</option>
              <option value="2">Female</option>
            </optgroup>
          </Form.Select>
          <button className="btn-login mx-auto mt-4">Add Student</button>
        </Col>
      </form>
    </div>
  );
};

export default AdminAddStudent;
