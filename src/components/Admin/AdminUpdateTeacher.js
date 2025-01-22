import React, { useEffect, useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AdminAddStudent.css";
import { MESSAGE_DELAY, REDIRECTING_DELAY } from "../../scripts/config";

const AdminUpdateTeacher = () => {
  const { id } = useParams();
  const dataLanguage = useSelector((state) => state.language); // Language selection

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
    }, MESSAGE_DELAY);
  }, [msg]);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSpecializationChange = (e) => {
    setSpecialization(e.target.value);
  };

  const handelInputChange = (e, type) => {
    switch (type) {
      case "name":
        setError("");
        setName(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "الاسم الكامل فارغ"
              : "Full Name has left blank"
          );
        break;
      case "username":
        setError("");
        setUsername(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "اسم المستخدم فارغ"
              : "Username has left blank"
          );
        break;
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "البريد الإلكتروني فارغ"
              : "Email has left blank"
          );
        break;
      case "password":
        setError("");
        setPassword(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "كلمة المرور فارغة"
              : "Password has left blank"
          );
        break;
      case "confirmPass":
        setError("");
        setConfirmationPassword(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "تأكيد كلمة المرور فارغ"
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
              ? "تاريخ الميلاد فارغ"
              : "Birthdate has left blank"
          );
        break;
      case "specialization":
        setError("");
        setSpecialization(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar"
              ? "التخصص فارغ"
              : "Specialization has left blank"
          );
        break;
      case "salary":
        setError("");
        setSalary(e.target.value);
        if (e.target.value === "")
          setError(
            dataLanguage === "ar" ? "الراتب فارغ" : "Salary has left blank"
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
            dataLanguage === "ar" ? "العنوان فارغ" : "Address has left blank"
          );
        break;
      default:
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

        const responseText = await response.text();

        try {
          const data = JSON.parse(responseText);
          if (data.success) {
            setMsg(
              dataLanguage === "ar"
                ? "تم تحديث المعلم بنجاح! جارٍ التحويل..."
                : "Teacher Has Been Updated Successfully! Redirecting..."
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
    <div style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}>
      <h3>{dataLanguage === "ar" ? "تحديث المعلم" : "Update Teacher"}</h3>
      <form
        onSubmit={handleSubmit}
        className="add-student"
        style={{ margin: "15px auto" }}
      >
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">
            {dataLanguage === "ar" ? "تحديث المعلم" : "Update The Teacher"}
          </label>
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>
          <input
            placeholder={dataLanguage === "ar" ? "الاسم الكامل" : "Full Name"}
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
              dataLanguage === "ar" ? "البريد الإلكتروني" : "Email Address"
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
          <Form.Select
            name="specialization"
            ref={specializationRef}
            onChange={handleSpecializationChange}
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
                {dataLanguage === "ar" ? "معلومات" : "Information"}
              </option>
              <option value="3">
                {dataLanguage === "ar" ? "علوم البيانات" : "Data Science"}
              </option>
            </optgroup>
          </Form.Select>
          <button className="btn-login mx-auto mt-3">
            {dataLanguage === "ar" ? "تحديث المعلم" : "Update Teacher"}
          </button>
        </Col>
      </form>
    </div>
  );
};

export default AdminUpdateTeacher;
