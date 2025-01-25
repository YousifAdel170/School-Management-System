import React, { useEffect, useRef, useState } from "react";
import { Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./AdminAddStudent.css";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

import {
  GET_METHOD,
  MESSAGE_DELAY,
  POST_METHOD,
  SUPERVISOR_ROLE,
  URL_GET_TEACHER_IDS,
  URL_UPDATE_SUBJECT,
  VIEW_SUBJECT_TYPE,
} from "../../scripts/config";
import {
  handelInputChange,
  handleSelectChange,
} from "../../Logic/handleChange";
import { fetchData } from "../../Logic/fetchData";
import { handleSubmit } from "../../Logic/handleSubmit";

const AdminUpdateCourse = () => {
  const { id } = useParams();

  const dataLanguage = useSelector((state) => state.language);

  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [teachingstaffID, setTeachingstaffID] = useState("");
  const [updatedID, setUpdatedID] = useState(null);

  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const [teacherIDs, setTeacherIDs] = useState([]);
  const navigate = useNavigate();

  // Refs for input Fields
  const subjectNameRef = useRef(null);
  const subjectCodeRef = useRef(null);
  const teachingstaffIDRef = useRef(null);

  const payloadUpdateSubjects = {
    updatedID,
    subjectName,
    subjectCode,
    teachingstaffID,
  };

  useEffect(() => {
    fetchData(
      setTeacherIDs,
      setMsg,
      setError,
      GET_METHOD,
      URL_GET_TEACHER_IDS,
      dataLanguage
    );
    setUpdatedID(id);
    setSubjectName(subjectNameRef.current.value);
    setSubjectCode(subjectCodeRef.current.value);
    setTeachingstaffID(teachingstaffIDRef.current.value);
  }, [id, dataLanguage]);

  // Clear the message after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setMsg("");
    }, MESSAGE_DELAY);
  }, [msg]);

  return (
    <div
      className="add-std"
      style={{ padding: "20px", color: "var(--main-color)", flex: "1" }}
    >
      <h3>{dataLanguage === "ar" ? "تحديث المادة" : "Update Subject"}</h3>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            setMsg,
            setError,
            dataLanguage,
            navigate,
            URL_UPDATE_SUBJECT,
            POST_METHOD,
            payloadUpdateSubjects,
            VIEW_SUBJECT_TYPE,
            SUPERVISOR_ROLE
          )
        }
        className="add-student"
        style={{ margin: "15px auto" }}
      >
        <Col sm="12" className="d-flex flex-column">
          <label className="mx-auto title-login">
            {dataLanguage === "ar" ? "تحديث المادة" : "Update The Subject"}
          </label>
          <p>
            {error !== "" ? (
              <span className="error">{error}</span>
            ) : (
              <span className="success">{msg}</span>
            )}
          </p>
          <input
            placeholder={dataLanguage === "ar" ? "اسم المادة" : "Subject Name"}
            type="text"
            ref={subjectNameRef}
            className="user-input mb-3 text-center mx-auto"
            name="subjectName"
            value={subjectName}
            onChange={(e) =>
              handelInputChange(
                e,
                "subjectName",
                setError,
                setSubjectName,
                dataLanguage
              )
            }
          />
          <input
            placeholder={dataLanguage === "ar" ? "رمز المادة" : "Subject Code"}
            type="text"
            ref={subjectCodeRef}
            className="user-input mb-3 text-center mx-auto"
            name="subjectCode"
            value={subjectCode}
            onChange={(e) =>
              handelInputChange(
                e,
                "subjectCode",
                setError,
                setSubjectCode,
                dataLanguage
              )
            }
          />

          <Form.Select
            name="teachingstaffID"
            onChange={(e) => handleSelectChange(e, setTeachingstaffID)}
            ref={teachingstaffIDRef}
            value={teachingstaffID}
            className="mb-3"
          >
            <optgroup
              label={
                dataLanguage === "ar"
                  ? "اختر اسم المعلم"
                  : "Select Teaching Staff Name"
              }
            >
              {teacherIDs.length
                ? teacherIDs.map((teacherID, index) => (
                    <option key={index} value={`${teacherID.ID}`}>
                      {teacherID.name}
                    </option>
                  ))
                : null}
            </optgroup>
          </Form.Select>
          <button className="btn-login mx-auto mt-3">
            {" "}
            {dataLanguage === "ar" ? "تحديث المادة" : "Update Course"}
          </button>
        </Col>
        <ToastContainer style={{ marginTop: "80px" }} />
      </form>
    </div>
  );
};

export default AdminUpdateCourse;
