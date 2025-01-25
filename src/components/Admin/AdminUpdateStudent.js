import React, { useEffect, useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AdminAddStudent.css";
import { ToastContainer } from "react-toastify";

import {
  MESSAGE_DELAY,
  POST_METHOD,
  SUPERVISOR_ROLE,
  URL_UPDATE_STUDENT,
  VIEW_STUDENT_TYPE,
} from "../../scripts/config";
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";

const AdminUpdateStudent = () => {
  const { id } = useParams();
  const dataLanguage = useSelector((state) => state.language); // Language data from Redux store

  const [userID, setUserID] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
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

  useEffect(() => {
    setUserID(id);
    setName(nameRef.current.value);
    setUsername(usernameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setConfirmationPassword(confirmPassRef.current.value);
    setBOD(BODRef.current.value);
    setGender(genderRef.current.value);
  }, [id]);

  // Clear the message after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  const payloadUpdateStudents = {
    userID,
    name,
    username,
    email,
    password,
    BOD,
    gender,
  };

  return (
    <div style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}>
      <h3>{dataLanguage === "ar" ? "تحديث الطالب" : "Update Student"}</h3>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            setMsg,
            setError,
            dataLanguage,
            navigate,
            URL_UPDATE_STUDENT,
            POST_METHOD,
            payloadUpdateStudents,
            VIEW_STUDENT_TYPE,
            SUPERVISOR_ROLE
          )
        }
        className="add-student"
      >
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">
            {dataLanguage === "ar"
              ? "تحديث بيانات الطالب"
              : "Update the student"}
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
            className="user-input mb-3 text-center mx-auto"
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
          >
            <optgroup
              label={dataLanguage === "ar" ? "حدد الجنس" : "Select Gender"}
            >
              <option value="1">
                {dataLanguage === "ar" ? "ذكر" : "Male"}
              </option>
              <option value="2">
                {dataLanguage === "ar" ? "أنثى" : "Female"}
              </option>
            </optgroup>
          </Form.Select>
          <button className="btn-login mx-auto mt-3">
            {dataLanguage === "ar" ? "تحديث الطالب" : "Update Student"}
          </button>
        </Col>
        <ToastContainer style={{ marginTop: "80px" }} />
      </form>
    </div>
  );
};

export default AdminUpdateStudent;
