import React, { useEffect, useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AdminAddStudent.css";
import {
  MESSAGE_DELAY,
  POST_METHOD,
  SUPERVISOR_ROLE,
  URL_UPDATE_TEACHER,
  VIEW_TEACHER_TYPE,
} from "../../scripts/config";
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";

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
            onChange={(e) =>
              handelInputChange(e, "name", setError, setName, dataLanguage)
            }
          />
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
          <button className="btn-login mx-auto mt-3">
            {dataLanguage === "ar" ? "تحديث المعلم" : "Update Teacher"}
          </button>
        </Col>
      </form>
    </div>
  );
};

export default AdminUpdateTeacher;
