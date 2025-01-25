import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../../components/utilities/NavBar";
import { handelInputChange } from "../../Logic/handleChange";
import {
  MESSAGE_DELAY,
  POST_METHOD,
  TYPE_AUTH_LOGIN,
  URL_AUT_LOGIN,
} from "../../scripts/config";
import { handleSubmit } from "../../Logic/handleSubmit";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const dataLanguage = useSelector((state) => state.language);

  const payloadLogin = { email, password };

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  return (
    <div style={{ flex: "1" }}>
      <NavBar logout={0} />
      <Container>
        <Row className="py-5 d-flex justify-content-center">
          <form
            onSubmit={(e) =>
              handleSubmit(
                e,
                setMsg,
                setError,
                dataLanguage,
                navigate,
                URL_AUT_LOGIN,
                POST_METHOD,
                payloadLogin,
                TYPE_AUTH_LOGIN
              )
            }
          >
            <Col sm="12" className="d-flex flex-column">
              <label className="mx-auto title-login">
                {dataLanguage === "ar"
                  ? "تسجيل الدخول إلى حسابك"
                  : "Log Into Your Account"}
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
                  dataLanguage === "ar" ? "البريد الإلكتروني" : "Email Address"
                }
                type="text"
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
                className="user-input text-center mx-auto"
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
              <button className="btn-login mx-auto mt-4">
                {dataLanguage === "ar" ? "دخول" : "Login"}
              </button>
              <label className="mx-auto mt-4">
                {dataLanguage === "ar"
                  ? "ليس لديك حساب؟ "
                  : "Don't have an account? "}
                <Link to={"/register"} style={{ textDecoration: "none" }}>
                  <span style={{ cursor: "pointer" }} className="change-link">
                    {dataLanguage === "ar" ? "سجل الآن" : "Sign Up"}
                  </span>
                </Link>
              </label>
            </Col>
            <ToastContainer style={{ marginTop: "80px" }} />
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
