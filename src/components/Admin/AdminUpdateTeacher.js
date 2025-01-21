import React, { useEffect, useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./AdminAddStudent.css";

const AdminUpdateTeacher = () => {
  const { id } = useParams();

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

  useEffect(() => {
    // console.log(id);
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

  // Clear the message after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, 5000);
  }, [msg]);

  // handling the chnage of the selection options
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // handling the change of the selection options
  const handleSpecializationChange = (e) => {
    setSpecialization(e.target.value);
  };

  // Handle Entering Data
  const handelInputChange = (e, type) => {
    switch (type) {
      case "name":
        setError("");
        setName(e.target.value);
        if (e.target.value === "") setError("Full Name has left blank");
        break;
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

      case "BOD":
        setError("");
        setBOD(e.target.value);
        if (e.target.value === "") setError("Birthdate has left blank");
        break;

      case "specialization":
        setError("");
        setSpecialization(e.target.value);
        if (e.target.value === "") setError("Specialization has left blank");
        break;

      case "salary":
        setError("");
        setSalary(e.target.value);
        if (e.target.value === "") setError("Salary has left blank");
        else if (e.target.value < 0) setError("Salary Can't Be Negative");
        else if (e.target.value < 1000)
          setError("Salary Can't Be Less Than 1000");
        break;

      case "address":
        setError("");
        setAddress(e.target.value);
        if (e.target.value === "") setError("Address has left blank");
        break;

      default:
    }
  };

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if inputs are not empty
    if (
      email &&
      password &&
      username &&
      name &&
      BOD &&
      name &&
      gender &&
      confirmationPassword &&
      salary &&
      specialization &&
      address &&
      confirmationPassword === password
    ) {
      try {
        const url =
          "http://127.0.0.1/school-managment-system-full/backend/update_teacher.php";

        // Make the fetch request
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
          }),
        });

        const responseText = await response.text(); // Log raw response
        // console.log("Raw Response:", responseText);

        // Parse JSON safely
        try {
          const data = JSON.parse(responseText);
          // console.log(data);
          if (data.success) {
            setMsg("Teacher Has Been Updated Successfully! Redirecting...");
            setTimeout(() => navigate("/supervisor/view_teachers"), 3000);
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
    <div style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}>
      <h3>Update Teacher</h3>
      <form
        onSubmit={handleSubmit}
        className="add-student"
        style={{ margin: "15px auto" }}
      >
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">Update The Teacher</label>
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>
          <input
            placeholder="Full Name"
            type="text"
            ref={nameRef}
            className="user-input mb-3 text-center mx-auto"
            name="name"
            value={name}
            onChange={(e) => handelInputChange(e, "name")}
          />
          <input
            placeholder="Username"
            type="text"
            ref={usernameRef}
            className="user-input mb-3 text-center mx-auto"
            name="username"
            value={username}
            onChange={(e) => handelInputChange(e, "username")}
          />
          <input
            placeholder="Email Address"
            type="text"
            ref={emailRef}
            className="user-input mb-3 text-center mx-auto"
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
          <input
            placeholder="Address"
            type="text"
            ref={addressRef}
            className="user-input text-center mx-auto mb-3"
            value={address}
            name="address"
            onChange={(e) => handelInputChange(e, "address")}
          />
          <input
            placeholder="Salary"
            type="number"
            ref={salaryRef}
            className="user-input text-center mx-auto mb-3"
            value={salary}
            name="salary"
            onChange={(e) => handelInputChange(e, "salary")}
          />
          <input
            placeholder="Birthdate"
            type="date"
            ref={BODRef}
            className="user-input mb-3 text-center mx-auto"
            name="BOD"
            value={BOD}
            onChange={(e) => handelInputChange(e, "BOD")}
          />
          <Form.Select
            name="gender"
            onChange={handleGenderChange}
            ref={genderRef}
            className="mb-3"
          >
            <optgroup label="Select Gender">
              <option value="1">Male</option>
              <option value="2">Female</option>
            </optgroup>
          </Form.Select>
          <Form.Select
            name="specialization"
            ref={specializationRef}
            onChange={handleSpecializationChange}
            value={specialization}
          >
            <optgroup label="Select Specialization">
              <option value="1">Software</option>
              <option value="2">History</option>
              <option value="3">Mathematics</option>
              <option value="4">Physics</option>
              <option value="5">Biology</option>
              <option value="6">Computer Science</option>
              <option value="7">Literature</option>
            </optgroup>
          </Form.Select>
          <button className="btn-login mx-auto mt-3">Update Teacher</button>
        </Col>
      </form>
    </div>
  );
};

export default AdminUpdateTeacher;
