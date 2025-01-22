import React, { useEffect, useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminAddStudent.css";
import { useSelector } from "react-redux";
import { MESSAGE_DELAY, REDIRECTING_DELAY } from "../../scripts/config";

const AdminAddTeacher = () => {
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

  const dataLanguage = useSelector((state) => state.language);

  useEffect(() => {
    setName(nameRef.current.value);
    setUsername(usernameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setConfirmationPassword(confirmPassRef.current.value);
    setBOD(BODRef.current.value);
    setGender(genderRef.current.value);
    setSpecialization(specializationRef.current.value);
    setAddress(addressRef.current.value);
    setSalary(salaryRef.current.value);
  }, []);

  // Clear the message after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  // handling the change of the selection options
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
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "الاسم كامل مفقود"
              : "Full Name has left blank"
          );
        break;
      case "username":
        setError("");
        setUsername(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "اسم المستخدم مفقود"
              : "Username has left blank"
          );
        break;

      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "البريد الإلكتروني مفقود"
              : "Email has left blank"
          );
        break;

      case "password":
        setError("");
        setPassword(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "كلمة المرور مفقودة"
              : "Password has left blank"
          );
        break;

      case "confirmPass":
        setError("");
        setConfirmationPassword(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "تأكيد كلمة المرور مفقود"
              : "Confirmation Password has left blank"
          );
        else if (e.target.value !== password) {
          setError(
            dataLanguage === "ar"
              ? "تأكيد كلمة المرور لا يتطابق مع كلمة المرور"
              : "Confirmation Password doesn't match with the Password"
          );
        }
        break;

      case "BOD":
        setError("");
        setBOD(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "تاريخ الميلاد مفقود"
              : "Birthdate has left blank"
          );
        break;

      case "specialization":
        setError("");
        setSpecialization(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "التخصص مفقود"
              : "Specialization has left blank"
          );
        break;

      case "salary":
        setError("");
        setSalary(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar" ? "الراتب مفقود" : "Salary has left blank"
          );
        else if (e.target.value < 0)
          setError(
            dataLanguage === "ar"
              ? "الراتب لا يمكن أن يكون سالباً"
              : "Salary Can't Be Negative"
          );
        else if (e.target.value < 1000)
          setError(
            dataLanguage === "ar"
              ? "الراتب لا يمكن أن يكون أقل من 1000"
              : "Salary Can't Be Less Than 1000"
          );
        break;

      case "address":
        setError("");
        setAddress(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar" ? "العنوان مفقود" : "Address has left blank"
          );
        break;

      default:
    }
  };

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if email and password are not empty
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
          "http://127.0.0.1/school-managment-system-full/backend/add_teacher.php";

        // Make the fetch request
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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

        const responseText = await response.text();
        // console.log("Raw Response:", responseText);

        // Parse JSON safely
        try {
          const data = JSON.parse(responseText);
          // console.log(data);
          if (data.success) {
            setMsg(
              dataLanguage === "ar"
                ? "تم إضافة المعلم بنجاح! سيتم التوجيه..."
                : "Teacher Has Been Added Successfully! Redirecting..."
            );
            setTimeout(
              () => navigate("/supervisor/view_teachers"),
              REDIRECTING_DELAY
            );
          } else {
            setError(data.message);
          }
        } catch (error) {
          console.error("Failed to parse JSON:", responseText);
        }
      } catch (error) {}
    } else {
      setError(
        dataLanguage === "ar"
          ? "جميع الحقول مطلوبة."
          : "All fields are required."
      );
    }
  };

  return (
    <div
      className="add-std"
      style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}
    >
      <h3>{dataLanguage === "ar" ? "إضافة معلم" : "Add Teacher"}</h3>
      <form
        onSubmit={handleSubmit}
        className="add-student"
        style={{ margin: "15px auto" }}
      >
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">
            {dataLanguage === "ar" ? "إضافة معلم جديد" : "Add a New Teacher"}
          </label>
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>
          <input
            placeholder={dataLanguage === "ar" ? "الاسم كامل" : "Full Name"}
            type="text"
            ref={nameRef}
            className="user-input mb-3 text-center mx-auto"
            name="name"
            value={name}
            onChange={(e) => handelInputChange(e, "name")}
          />
          <input
            placeholder={dataLanguage === "ar" ? "اسم المستخدم" : "Username"}
            type="text"
            ref={usernameRef}
            className="user-input mb-3 text-center mx-auto"
            name="username"
            value={username}
            onChange={(e) => handelInputChange(e, "username")}
          />
          <input
            placeholder={
              dataLanguage === "ar"
                ? "عنوان البريد الإلكتروني"
                : "Email Address"
            }
            type="text"
            ref={emailRef}
            className="user-input mb-3 text-center mx-auto"
            name="email"
            value={email}
            onChange={(e) => handelInputChange(e, "email")}
          />
          <input
            placeholder={dataLanguage === "ar" ? "كلمة المرور" : "Password"}
            type="password"
            ref={passwordRef}
            className="user-input text-center mx-auto mb-3"
            value={password}
            name="password"
            onChange={(e) => handelInputChange(e, "password")}
          />
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
            onChange={(e) => handelInputChange(e, "confirmPass")}
          />
          <input
            placeholder={dataLanguage === "ar" ? "العنوان" : "Address"}
            type="text"
            ref={addressRef}
            className="user-input text-center mx-auto mb-3"
            value={address}
            name="address"
            onChange={(e) => handelInputChange(e, "address")}
          />
          <input
            placeholder={dataLanguage === "ar" ? "الراتب" : "Salary"}
            type="number"
            ref={salaryRef}
            className="user-input text-center mx-auto mb-3"
            value={salary}
            name="salary"
            onChange={(e) => handelInputChange(e, "salary")}
          />
          <input
            placeholder={dataLanguage === "ar" ? "تاريخ الميلاد" : "Birthdate"}
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
            <optgroup
              label={dataLanguage === "ar" ? "اختار الجنس" : "Select Gender"}
            >
              <option value="1">
                {dataLanguage === "ar" ? "ذكر" : "Male"}
              </option>
              <option value="2">
                {dataLanguage === "ar" ? "أنثى" : "Female"}
              </option>
            </optgroup>
          </Form.Select>
          <Form.Select
            name="specialization"
            ref={specializationRef}
            onChange={handleSpecializationChange}
            value={specialization}
          >
            <optgroup
              label={
                dataLanguage === "ar" ? "اختار التخصص" : "Select Specialization"
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
          <button className="btn-login mx-auto mt-3">
            {" "}
            {dataLanguage === "ar" ? "إضافة معلم" : "Add Teacher"}
          </button>
        </Col>
      </form>
    </div>
  );
};

export default AdminAddTeacher;
