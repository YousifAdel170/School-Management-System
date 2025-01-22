import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/utilities/NavBar";
import { useSelector } from "react-redux";
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { handleSubmit } from "../../Logic/handleSubmit";
import {
  MESSAGE_DELAY,
  POST_METHOD,
  TYPE_AUT_REGISTER,
  URL_AUT_REGISTER,
} from "../../scripts/config";

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

  const dataLanguage = useSelector((state) => state.language);

  const payloadRegister = { username, email, password, roleID };

  useEffect(() => {
    setEmail(emailRef.current.value);
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    setConfirmationPassword(confirmPassRef.current.value);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  return (
    <div style={{ flex: "1" }}>
      <NavBar logout={0} />{" "}
      <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center">
          <form
            onSubmit={(e) =>
              handleSubmit(
                e,
                setMsg,
                setError,
                dataLanguage,
                navigate,
                URL_AUT_REGISTER,
                POST_METHOD,
                payloadRegister,
                TYPE_AUT_REGISTER
              )
            }
          >
            <Col sm="12" className="d-flex flex-column">
              <label className="mx-auto title-login">
                {dataLanguage === "ar" ? "مرحبًا! سجل هنا" : "Welcome! Sign Up"}
              </label>
              <p>
                {error !== "" ? (
                  <span className="error">{error}</span>
                ) : (
                  <span className="success">{msg}</span>
                )}
              </p>
              <input
                placeholder={
                  dataLanguage === "ar" ? "اسم المستخدم" : "Username"
                }
                type="text"
                ref={usernameRef}
                className="user-input mt-3 text-center mx-auto"
                value={username}
                name="username"
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
                className="user-input my-3 text-center mx-auto"
                name="email"
                value={email}
                onChange={(e) =>
                  handelInputChange(
                    e,
                    "email",
                    setError,
                    setEmail,
                    dataLanguage
                  )
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

              <Form.Select
                name="roleID"
                onChange={(e) => handleSelectChange(e, setRoleID)}
              >
                <optgroup
                  label={
                    dataLanguage === "ar" ? "اختار دورك" : "Select Your Role"
                  }
                >
                  <option value="1">
                    {dataLanguage === "ar" ? "طالب" : "Student"}
                  </option>
                  <option value="2">
                    {dataLanguage === "ar" ? "معلم" : "Teacher"}
                  </option>
                  <option value="3">
                    {dataLanguage === "ar" ? "ولي أمر" : "Parent"}
                  </option>
                </optgroup>
              </Form.Select>

              <button className="btn-login mx-auto mt-4">
                {dataLanguage === "ar" ? "سجل" : "Register"}
              </button>
              <label className="mx-auto mt-4">
                {dataLanguage === "ar"
                  ? "هل أنت مسجل بالفعل؟ "
                  : "Already registered? "}
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  {" "}
                  <span style={{ cursor: "pointer" }} className="change-link">
                    {dataLanguage === "ar" ? "تسجيل الدخول" : "Log In"}
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

export default RegisterPage;
