import React, { useEffect, useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector to access language state
import "./AdminAddStudent.css";
import {
  MESSAGE_DELAY,
  POST_METHOD,
  SUPERVISOR_ROLE,
  URL_ADD_STUDENT,
  VIEW_STUDENT_TYPE,
} from "../../scripts/config";
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";

const AdminAddStudent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [BOD, setBOD] = useState("");
  const [gender, setGender] = useState("1");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const dataLanguage = useSelector((state) => state.language); // Get the language from redux

  // Refs for input Fields
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPassRef = useRef(null);
  const BODRef = useRef(null);
  const genderRef = useRef(null);

  const payloadStudents = { username, email, password, BOD, gender };

  useEffect(() => {
    setUsername(usernameRef.current.value);
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setConfirmationPassword(confirmPassRef.current.value);
    setBOD(BODRef.current.value);
    setGender(genderRef.current.value);
  }, []);

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  return (
    <div
      className="add-std"
      style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}
    >
      <h3>{dataLanguage === "ar" ? "إضافة طالب" : "Add Student"}</h3>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            setMsg,
            setError,
            dataLanguage,
            navigate,
            URL_ADD_STUDENT,
            POST_METHOD,
            payloadStudents,
            VIEW_STUDENT_TYPE,
            SUPERVISOR_ROLE
          )
        }
        className="add-student"
      >
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">
            {dataLanguage === "ar" ? "إضافة طالب جديد" : "Add A New Student"}
          </label>
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>
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
            ref={emailRef}
            type="text"
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
            className="user-input text-center mx-auto"
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
            className="user-input my-3 text-center mx-auto"
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
              label={dataLanguage === "ar" ? "اختر الجنس" : "Select Gender"}
            >
              <option value="1">
                {dataLanguage === "ar" ? "ذكر" : "Male"}
              </option>
              <option value="2">
                {dataLanguage === "ar" ? "أنثى" : "Female"}
              </option>
            </optgroup>
          </Form.Select>
          <button className="btn-login mx-auto mt-4">
            {dataLanguage === "ar" ? "إضافة طالب" : "Add Student"}
          </button>
        </Col>
      </form>
    </div>
  );
};

export default AdminAddStudent;
